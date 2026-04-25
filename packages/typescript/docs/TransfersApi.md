# TransfersApi

All URIs are relative to *https://api.fwallet.co.ug*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**transfersPostTransfers**](TransfersApi.md#transfersposttransfersoperation) | **POST** /v1/transfers | Create Transfers |
| [**transfersPostTransfersSimulateFee**](TransfersApi.md#transfersposttransferssimulatefeeoperation) | **POST** /v1/transfers/simulate-fee | Create Transfers |



## transfersPostTransfers

> TransfersPostTransfers200Response transfersPostTransfers(idempotencyKey, transfersPostTransfersRequest)

Create Transfers

### Example

```ts
import {
  Configuration,
  TransfersApi,
} from '@f-wallet/typescript';
import type { TransfersPostTransfersOperationRequest } from '@f-wallet/typescript';

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
  const api = new TransfersApi(config);

  const body = {
    // string | Unique key for idempotent financial writes. Reusing the same key with the same request returns the original result.
    idempotencyKey: idempotencyKey_example,
    // TransfersPostTransfersRequest (optional)
    transfersPostTransfersRequest: ...,
  } satisfies TransfersPostTransfersOperationRequest;

  try {
    const data = await api.transfersPostTransfers(body);
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
| **transfersPostTransfersRequest** | [TransfersPostTransfersRequest](TransfersPostTransfersRequest.md) |  | [Optional] |

### Return type

[**TransfersPostTransfers200Response**](TransfersPostTransfers200Response.md)

### Authorization

[hmacNonce](../README.md#hmacNonce), [apiKey](../README.md#apiKey), [hmacContentSha256](../README.md#hmacContentSha256), [hmacTimestamp](../README.md#hmacTimestamp), [hmacKeyId](../README.md#hmacKeyId), [hmacSignature](../README.md#hmacSignature)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Transfer executed (or replayed if idempotent) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## transfersPostTransfersSimulateFee

> TransfersPostTransfersSimulateFee200Response transfersPostTransfersSimulateFee(idempotencyKey, transfersPostTransfersSimulateFeeRequest)

Create Transfers

### Example

```ts
import {
  Configuration,
  TransfersApi,
} from '@f-wallet/typescript';
import type { TransfersPostTransfersSimulateFeeOperationRequest } from '@f-wallet/typescript';

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
  const api = new TransfersApi(config);

  const body = {
    // string | Required for financial writes. Reusing the same key with the same request returns the original result; reusing it with a different body returns an idempotency conflict.
    idempotencyKey: idempotencyKey_example,
    // TransfersPostTransfersSimulateFeeRequest (optional)
    transfersPostTransfersSimulateFeeRequest: ...,
  } satisfies TransfersPostTransfersSimulateFeeOperationRequest;

  try {
    const data = await api.transfersPostTransfersSimulateFee(body);
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
| **idempotencyKey** | `string` | Required for financial writes. Reusing the same key with the same request returns the original result; reusing it with a different body returns an idempotency conflict. | [Defaults to `undefined`] |
| **transfersPostTransfersSimulateFeeRequest** | [TransfersPostTransfersSimulateFeeRequest](TransfersPostTransfersSimulateFeeRequest.md) |  | [Optional] |

### Return type

[**TransfersPostTransfersSimulateFee200Response**](TransfersPostTransfersSimulateFee200Response.md)

### Authorization

[hmacNonce](../README.md#hmacNonce), [apiKey](../README.md#apiKey), [hmacContentSha256](../README.md#hmacContentSha256), [hmacTimestamp](../README.md#hmacTimestamp), [hmacKeyId](../README.md#hmacKeyId), [hmacSignature](../README.md#hmacSignature)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Fee simulation result |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

