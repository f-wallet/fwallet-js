# DeveloperApi

All URIs are relative to *https://api.fwallet.co.ug*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**developerGetDeveloperApiKeys**](DeveloperApi.md#developergetdeveloperapikeys) | **GET** /v1/developer/api-keys | Get Developer |
| [**developerGetDeveloperApps**](DeveloperApi.md#developergetdeveloperapps) | **GET** /v1/developer/apps | Get Developer |
| [**developerGetDeveloperRequestLogs**](DeveloperApi.md#developergetdeveloperrequestlogs) | **GET** /v1/developer/request-logs | Get Developer |
| [**developerPatchDeveloperApiKeysByIdRestrictions**](DeveloperApi.md#developerpatchdeveloperapikeysbyidrestrictionsoperation) | **PATCH** /v1/developer/api-keys/{id}/restrictions | Update Developer |
| [**developerPatchDeveloperAppsById**](DeveloperApi.md#developerpatchdeveloperappsbyidoperation) | **PATCH** /v1/developer/apps/{id} | Update Developer |
| [**developerPostDeveloperApiKeys**](DeveloperApi.md#developerpostdeveloperapikeysoperation) | **POST** /v1/developer/api-keys | Create Developer |
| [**developerPostDeveloperApiKeysByIdRevoke**](DeveloperApi.md#developerpostdeveloperapikeysbyidrevoke) | **POST** /v1/developer/api-keys/{id}/revoke | Create Developer |
| [**developerPostDeveloperApiKeysByIdRotate**](DeveloperApi.md#developerpostdeveloperapikeysbyidrotate) | **POST** /v1/developer/api-keys/{id}/rotate | Create Developer |
| [**developerPostDeveloperApps**](DeveloperApi.md#developerpostdeveloperappsoperation) | **POST** /v1/developer/apps | Create Developer |



## developerGetDeveloperApiKeys

> DeveloperGetDeveloperApiKeys200Response developerGetDeveloperApiKeys()

Get Developer

### Example

```ts
import {
  Configuration,
  DeveloperApi,
} from '@f-wallet/react';
import type { DeveloperGetDeveloperApiKeysRequest } from '@f-wallet/react';

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
  const api = new DeveloperApi(config);

  try {
    const data = await api.developerGetDeveloperApiKeys();
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

[**DeveloperGetDeveloperApiKeys200Response**](DeveloperGetDeveloperApiKeys200Response.md)

### Authorization

[hmacNonce](../README.md#hmacNonce), [apiKey](../README.md#apiKey), [hmacContentSha256](../README.md#hmacContentSha256), [hmacTimestamp](../README.md#hmacTimestamp), [hmacKeyId](../README.md#hmacKeyId), [hmacSignature](../README.md#hmacSignature)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | API key metadata |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## developerGetDeveloperApps

> DeveloperGetDeveloperApps200Response developerGetDeveloperApps()

Get Developer

### Example

```ts
import {
  Configuration,
  DeveloperApi,
} from '@f-wallet/react';
import type { DeveloperGetDeveloperAppsRequest } from '@f-wallet/react';

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
  const api = new DeveloperApi(config);

  try {
    const data = await api.developerGetDeveloperApps();
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

[**DeveloperGetDeveloperApps200Response**](DeveloperGetDeveloperApps200Response.md)

### Authorization

[hmacNonce](../README.md#hmacNonce), [apiKey](../README.md#apiKey), [hmacContentSha256](../README.md#hmacContentSha256), [hmacTimestamp](../README.md#hmacTimestamp), [hmacKeyId](../README.md#hmacKeyId), [hmacSignature](../README.md#hmacSignature)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Developer applications |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## developerGetDeveloperRequestLogs

> DeveloperGetDeveloperRequestLogs200Response developerGetDeveloperRequestLogs(apiKeyId, applicationId, authMode, traffic, environment, statusFamily, statusCode, method, path, origin, ipAddress, actorType, actorId, idempotencyKey, correlationId, createdFrom, createdTo, limit, page)

Get Developer

### Example

```ts
import {
  Configuration,
  DeveloperApi,
} from '@f-wallet/react';
import type { DeveloperGetDeveloperRequestLogsRequest } from '@f-wallet/react';

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
  const api = new DeveloperApi(config);

  const body = {
    // string (optional)
    apiKeyId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string (optional)
    applicationId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // 'api_key' | 'hmac' | 'session' | 'system' | 'none' (optional)
    authMode: authMode_example,
    // 'api' | 'all' (optional)
    traffic: traffic_example,
    // 'live' | 'test' (optional)
    environment: environment_example,
    // '2xx' | '3xx' | '4xx' | '5xx' (optional)
    statusFamily: statusFamily_example,
    // number (optional)
    statusCode: 56,
    // string (optional)
    method: method_example,
    // string (optional)
    path: path_example,
    // string (optional)
    origin: origin_example,
    // string (optional)
    ipAddress: ipAddress_example,
    // string (optional)
    actorType: actorType_example,
    // string (optional)
    actorId: actorId_example,
    // string (optional)
    idempotencyKey: idempotencyKey_example,
    // string (optional)
    correlationId: correlationId_example,
    // Date (optional)
    createdFrom: 2013-10-20T19:20:30+01:00,
    // Date (optional)
    createdTo: 2013-10-20T19:20:30+01:00,
    // number (optional)
    limit: 56,
    // number (optional)
    page: 56,
  } satisfies DeveloperGetDeveloperRequestLogsRequest;

  try {
    const data = await api.developerGetDeveloperRequestLogs(body);
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
| **apiKeyId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **applicationId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **authMode** | `api_key`, `hmac`, `session`, `system`, `none` |  | [Optional] [Defaults to `undefined`] [Enum: api_key, hmac, session, system, none] |
| **traffic** | `api`, `all` |  | [Optional] [Defaults to `&#39;api&#39;`] [Enum: api, all] |
| **environment** | `live`, `test` |  | [Optional] [Defaults to `undefined`] [Enum: live, test] |
| **statusFamily** | `2xx`, `3xx`, `4xx`, `5xx` |  | [Optional] [Defaults to `undefined`] [Enum: 2xx, 3xx, 4xx, 5xx] |
| **statusCode** | `number` |  | [Optional] [Defaults to `undefined`] |
| **method** | `string` |  | [Optional] [Defaults to `undefined`] |
| **path** | `string` |  | [Optional] [Defaults to `undefined`] |
| **origin** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ipAddress** | `string` |  | [Optional] [Defaults to `undefined`] |
| **actorType** | `string` |  | [Optional] [Defaults to `undefined`] |
| **actorId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **idempotencyKey** | `string` |  | [Optional] [Defaults to `undefined`] |
| **correlationId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **createdFrom** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **createdTo** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `50`] |
| **page** | `number` |  | [Optional] [Defaults to `1`] |

### Return type

[**DeveloperGetDeveloperRequestLogs200Response**](DeveloperGetDeveloperRequestLogs200Response.md)

### Authorization

[hmacNonce](../README.md#hmacNonce), [apiKey](../README.md#apiKey), [hmacContentSha256](../README.md#hmacContentSha256), [hmacTimestamp](../README.md#hmacTimestamp), [hmacKeyId](../README.md#hmacKeyId), [hmacSignature](../README.md#hmacSignature)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | API request logs |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## developerPatchDeveloperApiKeysByIdRestrictions

> ApiKeyMetadata developerPatchDeveloperApiKeysByIdRestrictions(id, developerPatchDeveloperApiKeysByIdRestrictionsRequest)

Update Developer

### Example

```ts
import {
  Configuration,
  DeveloperApi,
} from '@f-wallet/react';
import type { DeveloperPatchDeveloperApiKeysByIdRestrictionsOperationRequest } from '@f-wallet/react';

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
  const api = new DeveloperApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // DeveloperPatchDeveloperApiKeysByIdRestrictionsRequest (optional)
    developerPatchDeveloperApiKeysByIdRestrictionsRequest: ...,
  } satisfies DeveloperPatchDeveloperApiKeysByIdRestrictionsOperationRequest;

  try {
    const data = await api.developerPatchDeveloperApiKeysByIdRestrictions(body);
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
| **developerPatchDeveloperApiKeysByIdRestrictionsRequest** | [DeveloperPatchDeveloperApiKeysByIdRestrictionsRequest](DeveloperPatchDeveloperApiKeysByIdRestrictionsRequest.md) |  | [Optional] |

### Return type

[**ApiKeyMetadata**](ApiKeyMetadata.md)

### Authorization

[hmacNonce](../README.md#hmacNonce), [apiKey](../README.md#apiKey), [hmacContentSha256](../README.md#hmacContentSha256), [hmacTimestamp](../README.md#hmacTimestamp), [hmacKeyId](../README.md#hmacKeyId), [hmacSignature](../README.md#hmacSignature)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | API key restrictions updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## developerPatchDeveloperAppsById

> DeveloperApplication developerPatchDeveloperAppsById(id, developerPatchDeveloperAppsByIdRequest)

Update Developer

### Example

```ts
import {
  Configuration,
  DeveloperApi,
} from '@f-wallet/react';
import type { DeveloperPatchDeveloperAppsByIdOperationRequest } from '@f-wallet/react';

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
  const api = new DeveloperApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // DeveloperPatchDeveloperAppsByIdRequest (optional)
    developerPatchDeveloperAppsByIdRequest: ...,
  } satisfies DeveloperPatchDeveloperAppsByIdOperationRequest;

  try {
    const data = await api.developerPatchDeveloperAppsById(body);
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
| **developerPatchDeveloperAppsByIdRequest** | [DeveloperPatchDeveloperAppsByIdRequest](DeveloperPatchDeveloperAppsByIdRequest.md) |  | [Optional] |

### Return type

[**DeveloperApplication**](DeveloperApplication.md)

### Authorization

[hmacNonce](../README.md#hmacNonce), [apiKey](../README.md#apiKey), [hmacContentSha256](../README.md#hmacContentSha256), [hmacTimestamp](../README.md#hmacTimestamp), [hmacKeyId](../README.md#hmacKeyId), [hmacSignature](../README.md#hmacSignature)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Developer application updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## developerPostDeveloperApiKeys

> DeveloperPostDeveloperApiKeys201Response developerPostDeveloperApiKeys(developerPostDeveloperApiKeysRequest)

Create Developer

### Example

```ts
import {
  Configuration,
  DeveloperApi,
} from '@f-wallet/react';
import type { DeveloperPostDeveloperApiKeysOperationRequest } from '@f-wallet/react';

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
  const api = new DeveloperApi(config);

  const body = {
    // DeveloperPostDeveloperApiKeysRequest (optional)
    developerPostDeveloperApiKeysRequest: ...,
  } satisfies DeveloperPostDeveloperApiKeysOperationRequest;

  try {
    const data = await api.developerPostDeveloperApiKeys(body);
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
| **developerPostDeveloperApiKeysRequest** | [DeveloperPostDeveloperApiKeysRequest](DeveloperPostDeveloperApiKeysRequest.md) |  | [Optional] |

### Return type

[**DeveloperPostDeveloperApiKeys201Response**](DeveloperPostDeveloperApiKeys201Response.md)

### Authorization

[hmacNonce](../README.md#hmacNonce), [apiKey](../README.md#apiKey), [hmacContentSha256](../README.md#hmacContentSha256), [hmacTimestamp](../README.md#hmacTimestamp), [hmacKeyId](../README.md#hmacKeyId), [hmacSignature](../README.md#hmacSignature)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | API key created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## developerPostDeveloperApiKeysByIdRevoke

> ApiKeyMetadata developerPostDeveloperApiKeysByIdRevoke(id)

Create Developer

### Example

```ts
import {
  Configuration,
  DeveloperApi,
} from '@f-wallet/react';
import type { DeveloperPostDeveloperApiKeysByIdRevokeRequest } from '@f-wallet/react';

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
  const api = new DeveloperApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeveloperPostDeveloperApiKeysByIdRevokeRequest;

  try {
    const data = await api.developerPostDeveloperApiKeysByIdRevoke(body);
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

[**ApiKeyMetadata**](ApiKeyMetadata.md)

### Authorization

[hmacNonce](../README.md#hmacNonce), [apiKey](../README.md#apiKey), [hmacContentSha256](../README.md#hmacContentSha256), [hmacTimestamp](../README.md#hmacTimestamp), [hmacKeyId](../README.md#hmacKeyId), [hmacSignature](../README.md#hmacSignature)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | API key revoked |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## developerPostDeveloperApiKeysByIdRotate

> DeveloperPostDeveloperApiKeysByIdRotate201Response developerPostDeveloperApiKeysByIdRotate(id)

Create Developer

### Example

```ts
import {
  Configuration,
  DeveloperApi,
} from '@f-wallet/react';
import type { DeveloperPostDeveloperApiKeysByIdRotateRequest } from '@f-wallet/react';

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
  const api = new DeveloperApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeveloperPostDeveloperApiKeysByIdRotateRequest;

  try {
    const data = await api.developerPostDeveloperApiKeysByIdRotate(body);
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

[**DeveloperPostDeveloperApiKeysByIdRotate201Response**](DeveloperPostDeveloperApiKeysByIdRotate201Response.md)

### Authorization

[hmacNonce](../README.md#hmacNonce), [apiKey](../README.md#apiKey), [hmacContentSha256](../README.md#hmacContentSha256), [hmacTimestamp](../README.md#hmacTimestamp), [hmacKeyId](../README.md#hmacKeyId), [hmacSignature](../README.md#hmacSignature)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | API key rotated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## developerPostDeveloperApps

> DeveloperApplication developerPostDeveloperApps(developerPostDeveloperAppsRequest)

Create Developer

### Example

```ts
import {
  Configuration,
  DeveloperApi,
} from '@f-wallet/react';
import type { DeveloperPostDeveloperAppsOperationRequest } from '@f-wallet/react';

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
  const api = new DeveloperApi(config);

  const body = {
    // DeveloperPostDeveloperAppsRequest (optional)
    developerPostDeveloperAppsRequest: ...,
  } satisfies DeveloperPostDeveloperAppsOperationRequest;

  try {
    const data = await api.developerPostDeveloperApps(body);
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
| **developerPostDeveloperAppsRequest** | [DeveloperPostDeveloperAppsRequest](DeveloperPostDeveloperAppsRequest.md) |  | [Optional] |

### Return type

[**DeveloperApplication**](DeveloperApplication.md)

### Authorization

[hmacNonce](../README.md#hmacNonce), [apiKey](../README.md#apiKey), [hmacContentSha256](../README.md#hmacContentSha256), [hmacTimestamp](../README.md#hmacTimestamp), [hmacKeyId](../README.md#hmacKeyId), [hmacSignature](../README.md#hmacSignature)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Developer application created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

