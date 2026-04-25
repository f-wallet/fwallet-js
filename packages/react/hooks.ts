import { useMutation, useQuery } from "@tanstack/react-query";

type ApiCall<TParams, TResult> = (params: TParams) => Promise<TResult>;

export function fwalletQueryKey(scope: string, params?: unknown) {
  return ["fwallet", scope, params] as const;
}

export function useFWalletQuery<TParams, TResult>(
  scope: string,
  apiCall: ApiCall<TParams, TResult>,
  params: TParams,
  options?: { enabled?: boolean },
) {
  return useQuery({
    queryKey: fwalletQueryKey(scope, params),
    queryFn: () => apiCall(params),
    enabled: options?.enabled,
  });
}

export function useFWalletMutation<TParams, TResult>(apiCall: ApiCall<TParams, TResult>) {
  return useMutation({ mutationFn: apiCall });
}
