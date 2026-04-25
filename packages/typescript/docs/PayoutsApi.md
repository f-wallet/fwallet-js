# PayoutsApi

All URIs are relative to *https://api.fwallet.co.ug*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**payoutsGetPayoutsCases**](PayoutsApi.md#payoutsgetpayoutscases) | **GET** /v1/payouts/cases | Get Payouts |
| [**payoutsPostPayouts**](PayoutsApi.md#payoutspostpayouts) | **POST** /v1/payouts | Create Payouts |
| [**payoutsPostPayoutsByCaseIdApprove**](PayoutsApi.md#payoutspostpayoutsbycaseidapproveoperation) | **POST** /v1/payouts/{caseId}/approve | Create Payouts |
| [**payoutsPostPayoutsByCaseIdReject**](PayoutsApi.md#payoutspostpayoutsbycaseidrejectoperation) | **POST** /v1/payouts/{caseId}/reject | Create Payouts |



## payoutsGetPayoutsCases

> PayoutsGetPayoutsCases200Response payoutsGetPayoutsCases(status)

Get Payouts

List payout approval cases. Filter by status to see pending cases that need action, or historical approved/rejected cases.

### Example

```ts
import {
  Configuration,
  PayoutsApi,
} from '@f-wallet/typescript';
import type { PayoutsGetPayoutsCasesRequest } from '@f-wallet/typescript';

async function example() {
  console.log("🚀 Testing @f-wallet/typescript SDK...");
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
  const api = new PayoutsApi(config);

  const body = {
    // 'pending' | 'approved' | 'rejected' | 'expired' (optional)
    status: status_example,
  } satisfies PayoutsGetPayoutsCasesRequest;

  try {
    const data = await api.payoutsGetPayoutsCases(body);
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
| **status** | `pending`, `approved`, `rejected`, `expired` |  | [Optional] [Defaults to `undefined`] [Enum: pending, approved, rejected, expired] |

### Return type

[**PayoutsGetPayoutsCases200Response**](PayoutsGetPayoutsCases200Response.md)

### Authorization

[hmacNonce](../README.md#hmacNonce), [apiKey](../README.md#apiKey), [hmacContentSha256](../README.md#hmacContentSha256), [hmacTimestamp](../README.md#hmacTimestamp), [hmacKeyId](../README.md#hmacKeyId), [hmacSignature](../README.md#hmacSignature)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of payout approval cases |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## payoutsPostPayouts

> PayoutsPostPayouts200Response payoutsPostPayouts(idempotencyKey, payoutRequest)

Create Payouts

Request a payout (withdrawal). This immediately places a hold on the user\&#39;s wallet (available balance decreases, funds move to suspense) and creates an approval case. The payout is NOT settled until approved by a different person (maker-checker pattern). If rejected, the hold is reversed and the balance restored.

### Example

```ts
import {
  Configuration,
  PayoutsApi,
} from '@f-wallet/typescript';
import type { PayoutsPostPayoutsRequest } from '@f-wallet/typescript';

async function example() {
  console.log("🚀 Testing @f-wallet/typescript SDK...");
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
  const api = new PayoutsApi(config);

  const body = {
    // string | Unique key for idempotent financial writes. Reusing the same key with the same request returns the original result.
    idempotencyKey: idempotencyKey_example,
    // PayoutRequest (optional)
    payoutRequest: ...,
  } satisfies PayoutsPostPayoutsRequest;

  try {
    const data = await api.payoutsPostPayouts(body);
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
| **idempotencyKey** | `string` | Unique key for idempotent financial writes. Reusing the same key with the same request returns the original result. | [Defaults to `undefined`] |
| **payoutRequest** | [PayoutRequest](PayoutRequest.md) |  | [Optional] |

### Return type

[**PayoutsPostPayouts200Response**](PayoutsPostPayouts200Response.md)

### Authorization

[hmacNonce](../README.md#hmacNonce), [apiKey](../README.md#apiKey), [hmacContentSha256](../README.md#hmacContentSha256), [hmacTimestamp](../README.md#hmacTimestamp), [hmacKeyId](../README.md#hmacKeyId), [hmacSignature](../README.md#hmacSignature)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Payout requested — funds held, awaiting approval |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## payoutsPostPayoutsByCaseIdApprove

> PayoutSettlement payoutsPostPayoutsByCaseIdApprove(caseId, idempotencyKey, payoutsPostPayoutsByCaseIdApproveRequest)

Create Payouts

Approve a pending payout. Settles the payout by moving funds from suspense to the payout-clearing account. The actorId must differ from the requestor (maker-checker). Returns MAKER_CHECKER_VIOLATION (422) if the same person tries to approve their own request.

### Example

```ts
import {
  Configuration,
  PayoutsApi,
} from '@f-wallet/typescript';
import type { PayoutsPostPayoutsByCaseIdApproveOperationRequest } from '@f-wallet/typescript';

async function example() {
  console.log("🚀 Testing @f-wallet/typescript SDK...");
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
  const api = new PayoutsApi(config);

  const body = {
    // string
    caseId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Required for financial writes. Reusing the same key with the same request returns the original result; reusing it with a different body returns an idempotency conflict.
    idempotencyKey: idempotencyKey_example,
    // PayoutsPostPayoutsByCaseIdApproveRequest (optional)
    payoutsPostPayoutsByCaseIdApproveRequest: ...,
  } satisfies PayoutsPostPayoutsByCaseIdApproveOperationRequest;

  try {
    const data = await api.payoutsPostPayoutsByCaseIdApprove(body);
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
| **caseId** | `string` |  | [Defaults to `undefined`] |
| **idempotencyKey** | `string` | Required for financial writes. Reusing the same key with the same request returns the original result; reusing it with a different body returns an idempotency conflict. | [Defaults to `undefined`] |
| **payoutsPostPayoutsByCaseIdApproveRequest** | [PayoutsPostPayoutsByCaseIdApproveRequest](PayoutsPostPayoutsByCaseIdApproveRequest.md) |  | [Optional] |

### Return type

[**PayoutSettlement**](PayoutSettlement.md)

### Authorization

[hmacNonce](../README.md#hmacNonce), [apiKey](../README.md#apiKey), [hmacContentSha256](../README.md#hmacContentSha256), [hmacTimestamp](../README.md#hmacTimestamp), [hmacKeyId](../README.md#hmacKeyId), [hmacSignature](../README.md#hmacSignature)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Payout approved and settled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## payoutsPostPayoutsByCaseIdReject

> PayoutCancellation payoutsPostPayoutsByCaseIdReject(caseId, idempotencyKey, payoutsPostPayoutsByCaseIdRejectRequest)

Create Payouts

Reject a pending payout. Reverses the balance hold by posting a reversing journal entry (funds move from suspense back to the user\&#39;s wallet). The user\&#39;s available balance is restored.

### Example

```ts
import {
  Configuration,
  PayoutsApi,
} from '@f-wallet/typescript';
import type { PayoutsPostPayoutsByCaseIdRejectOperationRequest } from '@f-wallet/typescript';

async function example() {
  console.log("🚀 Testing @f-wallet/typescript SDK...");
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
  const api = new PayoutsApi(config);

  const body = {
    // string
    caseId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Required for financial writes. Reusing the same key with the same request returns the original result; reusing it with a different body returns an idempotency conflict.
    idempotencyKey: idempotencyKey_example,
    // PayoutsPostPayoutsByCaseIdRejectRequest (optional)
    payoutsPostPayoutsByCaseIdRejectRequest: ...,
  } satisfies PayoutsPostPayoutsByCaseIdRejectOperationRequest;

  try {
    const data = await api.payoutsPostPayoutsByCaseIdReject(body);
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
| **caseId** | `string` |  | [Defaults to `undefined`] |
| **idempotencyKey** | `string` | Required for financial writes. Reusing the same key with the same request returns the original result; reusing it with a different body returns an idempotency conflict. | [Defaults to `undefined`] |
| **payoutsPostPayoutsByCaseIdRejectRequest** | [PayoutsPostPayoutsByCaseIdRejectRequest](PayoutsPostPayoutsByCaseIdRejectRequest.md) |  | [Optional] |

### Return type

[**PayoutCancellation**](PayoutCancellation.md)

### Authorization

[hmacNonce](../README.md#hmacNonce), [apiKey](../README.md#apiKey), [hmacContentSha256](../README.md#hmacContentSha256), [hmacTimestamp](../README.md#hmacTimestamp), [hmacKeyId](../README.md#hmacKeyId), [hmacSignature](../README.md#hmacSignature)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Payout rejected — hold reversed, balance restored |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

