# HealthApi

All URIs are relative to *https://api.fwallet.co.ug*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**healthGetHealth**](HealthApi.md#healthgethealth) | **GET** /v1/health | Get Health |



## healthGetHealth

> HealthGetHealth200Response healthGetHealth()

Get Health

### Example

```ts
import {
  Configuration,
  HealthApi,
} from '@f-wallet/typescript';
import type { HealthGetHealthRequest } from '@f-wallet/typescript';

async function example() {
  console.log("🚀 Testing @f-wallet/typescript SDK...");
  const api = new HealthApi();

  try {
    const data = await api.healthGetHealth();
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

[**HealthGetHealth200Response**](HealthGetHealth200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Service is healthy |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

