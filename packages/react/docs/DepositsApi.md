# DepositsApi

All URIs are relative to *https://api.fwallet.co.ug*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**depositsPostDepositsBankSlipVerify**](DepositsApi.md#depositspostdepositsbankslipverify) | **POST** /v1/deposits/bank-slip/verify | Create Deposits |
| [**depositsPostDepositsBankStatements**](DepositsApi.md#depositspostdepositsbankstatementsoperation) | **POST** /v1/deposits/bank-statements | Create Deposits |
| [**depositsPostDepositsMomoWebhook**](DepositsApi.md#depositspostdepositsmomowebhook) | **POST** /v1/deposits/momo-webhook | Create Deposits |



## depositsPostDepositsBankSlipVerify

> BankSlipResult depositsPostDepositsBankSlipVerify(bankSlipVerifyRequest)

Create Deposits

Verify a bank deposit slip against imported bank statement data. A branch manager enters the slip\&#39;s reference number and amount. The system checks if a matching bank statement line exists: if found with matching amount, the user is credited immediately (verified). If the bank feed hasn\&#39;t arrived yet, returns pending. If the reference exists but the amount differs, returns mismatch for manual investigation.

### Example

```ts
import {
  Configuration,
  DepositsApi,
} from '@f-wallet/react';
import type { DepositsPostDepositsBankSlipVerifyRequest } from '@f-wallet/react';

async function example() {
  console.log("🚀 Testing @f-wallet/react SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: hmacNonce
    apiKey: "YOUR API KEY",
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // To configure API key authorization: hmacContentSha256
    apiKey: "YOUR API KEY",
    // To configure API key authorization: hmacTimestamp
    apiKey: "YOUR API KEY",
    // To configure API key authorization: hmacKeyId
    apiKey: "YOUR API KEY",
    // To configure API key authorization: hmacSignature
    apiKey: "YOUR API KEY",
  });
  const api = new DepositsApi(config);

  const body = {
    // BankSlipVerifyRequest (optional)
    bankSlipVerifyRequest: ...,
  } satisfies DepositsPostDepositsBankSlipVerifyRequest;

  try {
    const data = await api.depositsPostDepositsBankSlipVerify(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **bankSlipVerifyRequest** | [BankSlipVerifyRequest](BankSlipVerifyRequest.md) |  | [Optional] |

### Return type

[**BankSlipResult**](BankSlipResult.md)

### Authorization

[hmacNonce](../README.md#hmacNonce), [apiKey](../README.md#apiKey), [hmacContentSha256](../README.md#hmacContentSha256), [hmacTimestamp](../README.md#hmacTimestamp), [hmacKeyId](../README.md#hmacKeyId), [hmacSignature](../README.md#hmacSignature)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Verification result: verified (user credited), pending (awaiting bank data), or mismatch (amount discrepancy) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## depositsPostDepositsBankStatements

> DepositsPostDepositsBankStatements200Response depositsPostDepositsBankStatements(depositsPostDepositsBankStatementsRequest)

Create Deposits

Import bank statement lines for reconciliation. These lines are used to verify bank slip deposits — when a user presents a slip, the system checks these records for a matching reference and amount. In production, this would connect to a bank feed API; for Phase 1 it accepts manual/CSV-imported data.

### Example

```ts
import {
  Configuration,
  DepositsApi,
} from '@f-wallet/react';
import type { DepositsPostDepositsBankStatementsOperationRequest } from '@f-wallet/react';

async function example() {
  console.log("🚀 Testing @f-wallet/react SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: hmacNonce
    apiKey: "YOUR API KEY",
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // To configure API key authorization: hmacContentSha256
    apiKey: "YOUR API KEY",
    // To configure API key authorization: hmacTimestamp
    apiKey: "YOUR API KEY",
    // To configure API key authorization: hmacKeyId
    apiKey: "YOUR API KEY",
    // To configure API key authorization: hmacSignature
    apiKey: "YOUR API KEY",
  });
  const api = new DepositsApi(config);

  const body = {
    // DepositsPostDepositsBankStatementsRequest (optional)
    depositsPostDepositsBankStatementsRequest: ...,
  } satisfies DepositsPostDepositsBankStatementsOperationRequest;

  try {
    const data = await api.depositsPostDepositsBankStatements(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **depositsPostDepositsBankStatementsRequest** | [DepositsPostDepositsBankStatementsRequest](DepositsPostDepositsBankStatementsRequest.md) |  | [Optional] |

### Return type

[**DepositsPostDepositsBankStatements200Response**](DepositsPostDepositsBankStatements200Response.md)

### Authorization

[hmacNonce](../README.md#hmacNonce), [apiKey](../README.md#apiKey), [hmacContentSha256](../README.md#hmacContentSha256), [hmacTimestamp](../README.md#hmacTimestamp), [hmacKeyId](../README.md#hmacKeyId), [hmacSignature](../README.md#hmacSignature)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Statement lines imported successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## depositsPostDepositsMomoWebhook

> MoMoDepositResult depositsPostDepositsMomoWebhook(moMoWebhookPayload)

Create Deposits

Process a MoMo deposit webhook. When a user deposits via Mobile Money, the MoMo provider sends a webhook notification. FWallet verifies the signature, checks idempotency (by transactionId), and credits the user\&#39;s wallet immediately. The deposit is recorded for later settlement reconciliation. Accounting: DR user wallet (balance increases), CR momo-clearing (settlement pending).

### Example

```ts
import {
  Configuration,
  DepositsApi,
} from '@f-wallet/react';
import type { DepositsPostDepositsMomoWebhookRequest } from '@f-wallet/react';

async function example() {
  console.log("🚀 Testing @f-wallet/react SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: hmacNonce
    apiKey: "YOUR API KEY",
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // To configure API key authorization: hmacContentSha256
    apiKey: "YOUR API KEY",
    // To configure API key authorization: hmacTimestamp
    apiKey: "YOUR API KEY",
    // To configure API key authorization: hmacKeyId
    apiKey: "YOUR API KEY",
    // To configure API key authorization: hmacSignature
    apiKey: "YOUR API KEY",
  });
  const api = new DepositsApi(config);

  const body = {
    // MoMoWebhookPayload (optional)
    moMoWebhookPayload: ...,
  } satisfies DepositsPostDepositsMomoWebhookRequest;

  try {
    const data = await api.depositsPostDepositsMomoWebhook(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **moMoWebhookPayload** | [MoMoWebhookPayload](MoMoWebhookPayload.md) |  | [Optional] |

### Return type

[**MoMoDepositResult**](MoMoDepositResult.md)

### Authorization

[hmacNonce](../README.md#hmacNonce), [apiKey](../README.md#apiKey), [hmacContentSha256](../README.md#hmacContentSha256), [hmacTimestamp](../README.md#hmacTimestamp), [hmacKeyId](../README.md#hmacKeyId), [hmacSignature](../README.md#hmacSignature)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Deposit processed successfully (or replayed if the transactionId was already seen) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

