# TenantsApi

All URIs are relative to *https://api.fwallet.co.ug*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**tenantsGetTenantsById**](TenantsApi.md#tenantsgettenantsbyid) | **GET** /v1/tenants/{id} | Get Tenants |
| [**tenantsPostTenants**](TenantsApi.md#tenantsposttenantsoperation) | **POST** /v1/tenants | Create Tenants |
| [**tenantsPostTenantsByIdApiKeys**](TenantsApi.md#tenantsposttenantsbyidapikeysoperation) | **POST** /v1/tenants/{id}/api-keys | Create Tenants |



## tenantsGetTenantsById

> TenantsPostTenants201Response tenantsGetTenantsById(id)

Get Tenants

### Example

```ts
import {
  Configuration,
  TenantsApi,
} from '@f-wallet/typescript';
import type { TenantsGetTenantsByIdRequest } from '@f-wallet/typescript';

async function example() {
  console.log("🚀 Testing @f-wallet/typescript SDK...");
  const api = new TenantsApi();

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies TenantsGetTenantsByIdRequest;

  try {
    const data = await api.tenantsGetTenantsById(body);
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

[**TenantsPostTenants201Response**](TenantsPostTenants201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Tenant details |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## tenantsPostTenants

> TenantsPostTenants201Response tenantsPostTenants(tenantsPostTenantsRequest)

Create Tenants

### Example

```ts
import {
  Configuration,
  TenantsApi,
} from '@f-wallet/typescript';
import type { TenantsPostTenantsOperationRequest } from '@f-wallet/typescript';

async function example() {
  console.log("🚀 Testing @f-wallet/typescript SDK...");
  const api = new TenantsApi();

  const body = {
    // TenantsPostTenantsRequest (optional)
    tenantsPostTenantsRequest: ...,
  } satisfies TenantsPostTenantsOperationRequest;

  try {
    const data = await api.tenantsPostTenants(body);
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
| **tenantsPostTenantsRequest** | [TenantsPostTenantsRequest](TenantsPostTenantsRequest.md) |  | [Optional] |

### Return type

[**TenantsPostTenants201Response**](TenantsPostTenants201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Tenant created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## tenantsPostTenantsByIdApiKeys

> TenantsPostTenantsByIdApiKeys201Response tenantsPostTenantsByIdApiKeys(id, tenantsPostTenantsByIdApiKeysRequest)

Create Tenants

### Example

```ts
import {
  Configuration,
  TenantsApi,
} from '@f-wallet/typescript';
import type { TenantsPostTenantsByIdApiKeysOperationRequest } from '@f-wallet/typescript';

async function example() {
  console.log("🚀 Testing @f-wallet/typescript SDK...");
  const api = new TenantsApi();

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // TenantsPostTenantsByIdApiKeysRequest (optional)
    tenantsPostTenantsByIdApiKeysRequest: ...,
  } satisfies TenantsPostTenantsByIdApiKeysOperationRequest;

  try {
    const data = await api.tenantsPostTenantsByIdApiKeys(body);
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
| **tenantsPostTenantsByIdApiKeysRequest** | [TenantsPostTenantsByIdApiKeysRequest](TenantsPostTenantsByIdApiKeysRequest.md) |  | [Optional] |

### Return type

[**TenantsPostTenantsByIdApiKeys201Response**](TenantsPostTenantsByIdApiKeys201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | API key created. The key value is only shown once. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

