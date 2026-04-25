# AdminApi

All URIs are relative to *https://api.fwallet.co.ug*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**adminGetAdminDashboard**](AdminApi.md#admingetadmindashboard) | **GET** /v1/admin/dashboard | Get Admin |
| [**adminGetAdminFeeSchedules**](AdminApi.md#admingetadminfeeschedules) | **GET** /v1/admin/fee-schedules | Get Admin |
| [**adminPostAdminFeeSchedulesByIdRules**](AdminApi.md#adminpostadminfeeschedulesbyidrulesoperation) | **POST** /v1/admin/fee-schedules/{id}/rules | Create Admin |



## adminGetAdminDashboard

> AdminGetAdminDashboard200Response adminGetAdminDashboard()

Get Admin

### Example

```ts
import {
  Configuration,
  AdminApi,
} from '@f-wallet/react';
import type { AdminGetAdminDashboardRequest } from '@f-wallet/react';

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
  const api = new AdminApi(config);

  try {
    const data = await api.adminGetAdminDashboard();
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

[**AdminGetAdminDashboard200Response**](AdminGetAdminDashboard200Response.md)

### Authorization

[hmacNonce](../README.md#hmacNonce), [apiKey](../README.md#apiKey), [hmacContentSha256](../README.md#hmacContentSha256), [hmacTimestamp](../README.md#hmacTimestamp), [hmacKeyId](../README.md#hmacKeyId), [hmacSignature](../README.md#hmacSignature)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Tenant admin dashboard metrics |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## adminGetAdminFeeSchedules

> AdminGetAdminFeeSchedules200Response adminGetAdminFeeSchedules()

Get Admin

### Example

```ts
import {
  Configuration,
  AdminApi,
} from '@f-wallet/react';
import type { AdminGetAdminFeeSchedulesRequest } from '@f-wallet/react';

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
  const api = new AdminApi(config);

  try {
    const data = await api.adminGetAdminFeeSchedules();
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

[**AdminGetAdminFeeSchedules200Response**](AdminGetAdminFeeSchedules200Response.md)

### Authorization

[hmacNonce](../README.md#hmacNonce), [apiKey](../README.md#apiKey), [hmacContentSha256](../README.md#hmacContentSha256), [hmacTimestamp](../README.md#hmacTimestamp), [hmacKeyId](../README.md#hmacKeyId), [hmacSignature](../README.md#hmacSignature)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Fee schedules with rules |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## adminPostAdminFeeSchedulesByIdRules

> AdminPostAdminFeeSchedulesByIdRules201Response adminPostAdminFeeSchedulesByIdRules(id, adminPostAdminFeeSchedulesByIdRulesRequest)

Create Admin

### Example

```ts
import {
  Configuration,
  AdminApi,
} from '@f-wallet/react';
import type { AdminPostAdminFeeSchedulesByIdRulesOperationRequest } from '@f-wallet/react';

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
  const api = new AdminApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // AdminPostAdminFeeSchedulesByIdRulesRequest (optional)
    adminPostAdminFeeSchedulesByIdRulesRequest: ...,
  } satisfies AdminPostAdminFeeSchedulesByIdRulesOperationRequest;

  try {
    const data = await api.adminPostAdminFeeSchedulesByIdRules(body);
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
| **adminPostAdminFeeSchedulesByIdRulesRequest** | [AdminPostAdminFeeSchedulesByIdRulesRequest](AdminPostAdminFeeSchedulesByIdRulesRequest.md) |  | [Optional] |

### Return type

[**AdminPostAdminFeeSchedulesByIdRules201Response**](AdminPostAdminFeeSchedulesByIdRules201Response.md)

### Authorization

[hmacNonce](../README.md#hmacNonce), [apiKey](../README.md#apiKey), [hmacContentSha256](../README.md#hmacContentSha256), [hmacTimestamp](../README.md#hmacTimestamp), [hmacKeyId](../README.md#hmacKeyId), [hmacSignature](../README.md#hmacSignature)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Fee rule created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

