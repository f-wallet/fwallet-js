# SystemApi

All URIs are relative to *https://api.fwallet.co.ug*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**systemGetSystemOrganizations**](SystemApi.md#systemgetsystemorganizations) | **GET** /v1/system/organizations | Get System |
| [**systemGetSystemOverview**](SystemApi.md#systemgetsystemoverview) | **GET** /v1/system/overview | Get System |
| [**systemGetSystemTransactions**](SystemApi.md#systemgetsystemtransactions) | **GET** /v1/system/transactions | Get System |
| [**systemGetSystemWallets**](SystemApi.md#systemgetsystemwallets) | **GET** /v1/system/wallets | Get System |
| [**systemPostSystemOrganizations**](SystemApi.md#systempostsystemorganizationsoperation) | **POST** /v1/system/organizations | Create System |



## systemGetSystemOrganizations

> SystemGetSystemOrganizations200Response systemGetSystemOrganizations()

Get System

### Example

```ts
import {
  Configuration,
  SystemApi,
} from '@f-wallet/react';
import type { SystemGetSystemOrganizationsRequest } from '@f-wallet/react';

async function example() {
  console.log("🚀 Testing @f-wallet/react SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: systemKey
    apiKey: "YOUR API KEY",
  });
  const api = new SystemApi(config);

  try {
    const data = await api.systemGetSystemOrganizations();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**SystemGetSystemOrganizations200Response**](SystemGetSystemOrganizations200Response.md)

### Authorization

[systemKey](../README.md#systemKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | All organizations |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## systemGetSystemOverview

> SystemGetSystemOverview200Response systemGetSystemOverview()

Get System

### Example

```ts
import {
  Configuration,
  SystemApi,
} from '@f-wallet/react';
import type { SystemGetSystemOverviewRequest } from '@f-wallet/react';

async function example() {
  console.log("🚀 Testing @f-wallet/react SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: systemKey
    apiKey: "YOUR API KEY",
  });
  const api = new SystemApi(config);

  try {
    const data = await api.systemGetSystemOverview();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**SystemGetSystemOverview200Response**](SystemGetSystemOverview200Response.md)

### Authorization

[systemKey](../README.md#systemKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | System-wide overview across all organizations |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## systemGetSystemTransactions

> SystemGetSystemTransactions200Response systemGetSystemTransactions(limit)

Get System

### Example

```ts
import {
  Configuration,
  SystemApi,
} from '@f-wallet/react';
import type { SystemGetSystemTransactionsRequest } from '@f-wallet/react';

async function example() {
  console.log("🚀 Testing @f-wallet/react SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: systemKey
    apiKey: "YOUR API KEY",
  });
  const api = new SystemApi(config);

  const body = {
    // number (optional)
    limit: 56,
  } satisfies SystemGetSystemTransactionsRequest;

  try {
    const data = await api.systemGetSystemTransactions(body);
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
| **limit** | `number` |  | [Optional] [Defaults to `50`] |

### Return type

[**SystemGetSystemTransactions200Response**](SystemGetSystemTransactions200Response.md)

### Authorization

[systemKey](../README.md#systemKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Recent ledger transactions across all organizations |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## systemGetSystemWallets

> SystemGetSystemWallets200Response systemGetSystemWallets(limit)

Get System

### Example

```ts
import {
  Configuration,
  SystemApi,
} from '@f-wallet/react';
import type { SystemGetSystemWalletsRequest } from '@f-wallet/react';

async function example() {
  console.log("🚀 Testing @f-wallet/react SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: systemKey
    apiKey: "YOUR API KEY",
  });
  const api = new SystemApi(config);

  const body = {
    // number (optional)
    limit: 56,
  } satisfies SystemGetSystemWalletsRequest;

  try {
    const data = await api.systemGetSystemWallets(body);
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
| **limit** | `number` |  | [Optional] [Defaults to `50`] |

### Return type

[**SystemGetSystemWallets200Response**](SystemGetSystemWallets200Response.md)

### Authorization

[systemKey](../README.md#systemKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Recent wallets across all organizations |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## systemPostSystemOrganizations

> SystemPostSystemOrganizations201Response systemPostSystemOrganizations(systemPostSystemOrganizationsRequest)

Create System

### Example

```ts
import {
  Configuration,
  SystemApi,
} from '@f-wallet/react';
import type { SystemPostSystemOrganizationsOperationRequest } from '@f-wallet/react';

async function example() {
  console.log("🚀 Testing @f-wallet/react SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: systemKey
    apiKey: "YOUR API KEY",
  });
  const api = new SystemApi(config);

  const body = {
    // SystemPostSystemOrganizationsRequest (optional)
    systemPostSystemOrganizationsRequest: ...,
  } satisfies SystemPostSystemOrganizationsOperationRequest;

  try {
    const data = await api.systemPostSystemOrganizations(body);
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
| **systemPostSystemOrganizationsRequest** | [SystemPostSystemOrganizationsRequest](SystemPostSystemOrganizationsRequest.md) |  | [Optional] |

### Return type

[**SystemPostSystemOrganizations201Response**](SystemPostSystemOrganizations201Response.md)

### Authorization

[systemKey](../README.md#systemKey)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Organization created and tenant admin invited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

