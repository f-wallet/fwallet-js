# WalletsApi

All URIs are relative to *https://api.fwallet.co.ug*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**walletsGetWallets**](WalletsApi.md#walletsgetwallets) | **GET** /v1/wallets | Get Wallets |
| [**walletsGetWalletsById**](WalletsApi.md#walletsgetwalletsbyid) | **GET** /v1/wallets/{id} | Get Wallets |
| [**walletsGetWalletsLookup**](WalletsApi.md#walletsgetwalletslookup) | **GET** /v1/wallets/lookup | Get Wallets |
| [**walletsPostWallets**](WalletsApi.md#walletspostwalletsoperation) | **POST** /v1/wallets | Create Wallets |



## walletsGetWallets

> WalletsGetWallets200Response walletsGetWallets(ownerType, ownerId, currencyCode)

Get Wallets

### Example

```ts
import {
  Configuration,
  WalletsApi,
} from '@f-wallet/react';
import type { WalletsGetWalletsRequest } from '@f-wallet/react';

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
  const api = new WalletsApi(config);

  const body = {
    // 'user' | 'branch' | 'company' (optional)
    ownerType: ownerType_example,
    // string (optional)
    ownerId: ownerId_example,
    // string (optional)
    currencyCode: currencyCode_example,
  } satisfies WalletsGetWalletsRequest;

  try {
    const data = await api.walletsGetWallets(body);
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
| **ownerType** | `user`, `branch`, `company` |  | [Optional] [Defaults to `undefined`] [Enum: user, branch, company] |
| **ownerId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **currencyCode** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**WalletsGetWallets200Response**](WalletsGetWallets200Response.md)

### Authorization

[hmacNonce](../README.md#hmacNonce), [apiKey](../README.md#apiKey), [hmacContentSha256](../README.md#hmacContentSha256), [hmacTimestamp](../README.md#hmacTimestamp), [hmacKeyId](../README.md#hmacKeyId), [hmacSignature](../README.md#hmacSignature)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of wallets |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## walletsGetWalletsById

> WalletsGetWallets200ResponseDataInner walletsGetWalletsById(id)

Get Wallets

### Example

```ts
import {
  Configuration,
  WalletsApi,
} from '@f-wallet/react';
import type { WalletsGetWalletsByIdRequest } from '@f-wallet/react';

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
  const api = new WalletsApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies WalletsGetWalletsByIdRequest;

  try {
    const data = await api.walletsGetWalletsById(body);
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
| **id** | `string` |  | [Defaults to `undefined`] |

### Return type

[**WalletsGetWallets200ResponseDataInner**](WalletsGetWallets200ResponseDataInner.md)

### Authorization

[hmacNonce](../README.md#hmacNonce), [apiKey](../README.md#apiKey), [hmacContentSha256](../README.md#hmacContentSha256), [hmacTimestamp](../README.md#hmacTimestamp), [hmacKeyId](../README.md#hmacKeyId), [hmacSignature](../README.md#hmacSignature)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Wallet details with balance |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## walletsGetWalletsLookup

> WalletsGetWalletsLookup200Response walletsGetWalletsLookup(email, currency)

Get Wallets

Look up a user by email and find their wallet for a given currency. Used for email-based transfers.

### Example

```ts
import {
  Configuration,
  WalletsApi,
} from '@f-wallet/react';
import type { WalletsGetWalletsLookupRequest } from '@f-wallet/react';

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
  const api = new WalletsApi(config);

  const body = {
    // string
    email: email_example,
    // string (optional)
    currency: currency_example,
  } satisfies WalletsGetWalletsLookupRequest;

  try {
    const data = await api.walletsGetWalletsLookup(body);
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
| **email** | `string` |  | [Defaults to `undefined`] |
| **currency** | `string` |  | [Optional] [Defaults to `&#39;UGX&#39;`] |

### Return type

[**WalletsGetWalletsLookup200Response**](WalletsGetWalletsLookup200Response.md)

### Authorization

[hmacNonce](../README.md#hmacNonce), [apiKey](../README.md#apiKey), [hmacContentSha256](../README.md#hmacContentSha256), [hmacTimestamp](../README.md#hmacTimestamp), [hmacKeyId](../README.md#hmacKeyId), [hmacSignature](../README.md#hmacSignature)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Lookup result |  -  |
| **404** | User or wallet not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## walletsPostWallets

> WalletsGetWallets200ResponseDataInner walletsPostWallets(walletsPostWalletsRequest)

Create Wallets

Create a new wallet for a user, branch, or company. Each wallet holds a single currency and is backed by a dedicated ledger account. A user can have at most one wallet per currency (enforced by unique constraint on tenant + ownerType + ownerId + currency).

### Example

```ts
import {
  Configuration,
  WalletsApi,
} from '@f-wallet/react';
import type { WalletsPostWalletsOperationRequest } from '@f-wallet/react';

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
  const api = new WalletsApi(config);

  const body = {
    // WalletsPostWalletsRequest (optional)
    walletsPostWalletsRequest: ...,
  } satisfies WalletsPostWalletsOperationRequest;

  try {
    const data = await api.walletsPostWallets(body);
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
| **walletsPostWalletsRequest** | [WalletsPostWalletsRequest](WalletsPostWalletsRequest.md) |  | [Optional] |

### Return type

[**WalletsGetWallets200ResponseDataInner**](WalletsGetWallets200ResponseDataInner.md)

### Authorization

[hmacNonce](../README.md#hmacNonce), [apiKey](../README.md#apiKey), [hmacContentSha256](../README.md#hmacContentSha256), [hmacTimestamp](../README.md#hmacTimestamp), [hmacKeyId](../README.md#hmacKeyId), [hmacSignature](../README.md#hmacSignature)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Wallet created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

