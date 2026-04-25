# AuthApi

All URIs are relative to *https://api.fwallet.co.ug*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**authGetAuthMe**](AuthApi.md#authgetauthme) | **GET** /v1/auth/me | Get Auth |



## authGetAuthMe

> AuthGetAuthMe200Response authGetAuthMe()

Get Auth

Get the current session\&#39;s user info. Used by the dashboard to validate sessions via HTTP.

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '@f-wallet/react';
import type { AuthGetAuthMeRequest } from '@f-wallet/react';

async function example() {
  console.log("🚀 Testing @f-wallet/react SDK...");
  const api = new AuthApi();

  try {
    const data = await api.authGetAuthMe();
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

[**AuthGetAuthMe200Response**](AuthGetAuthMe200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Current user session |  -  |
| **401** | No valid session |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

