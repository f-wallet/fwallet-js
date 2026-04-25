const encoder = new TextEncoder();

export type SigningInput = {
  url: string;
  method: string;
  body?: string;
  keyId: string;
  signingSecret: string;
  idempotencyKey?: string;
  actorType?: string;
  actorId?: string;
  nonce?: string;
  timestamp?: string;
};

export async function signFWalletRequest(input: SigningInput) {
  const method = input.method.toUpperCase();
  const body = input.body ?? "";
  const timestamp = input.timestamp ?? new Date().toISOString();
  const nonce = input.nonce ?? crypto.randomUUID();
  const contentSha256 = await sha256Base64Url(body);
  const canonicalRequest = buildCanonicalRequest({
    timestamp,
    nonce,
    method,
    pathWithQuery: canonicalPathWithSortedQuery(input.url),
    contentSha256,
    idempotencyKey: input.idempotencyKey,
    actorType: input.actorType,
    actorId: input.actorId,
  });
  const signature = formatSignature(await hmacSha256Base64Url(input.signingSecret, canonicalRequest));

  return {
    "X-FWallet-Key-Id": input.keyId,
    "X-FWallet-Timestamp": timestamp,
    "X-FWallet-Nonce": nonce,
    "X-FWallet-Content-SHA256": contentSha256,
    "X-FWallet-Signature": signature,
    ...(input.idempotencyKey ? { "Idempotency-Key": input.idempotencyKey } : {}),
    ...(input.actorType ? { "X-FWallet-Actor-Type": input.actorType } : {}),
    ...(input.actorId ? { "X-FWallet-Actor-Id": input.actorId } : {}),
  };
}

export function buildCanonicalRequest(parts: {
  timestamp: string;
  nonce: string;
  method: string;
  pathWithQuery: string;
  contentSha256: string;
  idempotencyKey?: string;
  actorType?: string;
  actorId?: string;
}) {
  return [
    "v1",
    parts.timestamp,
    parts.nonce,
    parts.method.toUpperCase(),
    parts.pathWithQuery,
    parts.contentSha256,
    parts.idempotencyKey ?? "",
    parts.actorType ?? "",
    parts.actorId ?? "",
  ].join("\n");
}

export function canonicalPathWithSortedQuery(url: string) {
  const parsed = new URL(url);
  const params = Array.from(parsed.searchParams.entries()).sort(([leftKey, leftValue], [rightKey, rightValue]) => {
    if (leftKey === rightKey) return leftValue.localeCompare(rightValue);
    return leftKey.localeCompare(rightKey);
  });
  const query = new URLSearchParams(params).toString();
  return query ? `${parsed.pathname}?${query}` : parsed.pathname;
}

export async function sha256Base64Url(input: string) {
  const digest = await crypto.subtle.digest("SHA-256", encoder.encode(input));
  return base64UrlEncode(new Uint8Array(digest));
}

export async function hmacSha256Base64Url(secret: string, payload: string) {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(payload));
  return base64UrlEncode(new Uint8Array(signature));
}

export function formatSignature(signature: string) {
  return `v1=:${signature}:`;
}

export function createIdempotencyKey(prefix = "fwallet") {
  return `${prefix}_${crypto.randomUUID()}`;
}

function base64UrlEncode(bytes: Uint8Array) {
  return btoa(String.fromCharCode(...bytes))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}
