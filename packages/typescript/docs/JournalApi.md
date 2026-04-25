# JournalApi

All URIs are relative to *https://api.fwallet.co.ug*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**journalGetJournal**](JournalApi.md#journalgetjournal) | **GET** /v1/journal | Get Journal |
| [**journalGetJournalById**](JournalApi.md#journalgetjournalbyid) | **GET** /v1/journal/{id} | Get Journal |



## journalGetJournal

> JournalGetJournal200Response journalGetJournal(cursor, limit)

Get Journal

List journal entries for the authenticated tenant. Returns entries ordered by posting time (newest first). Use cursor-based pagination for large result sets.

### Example

```ts
import {
  Configuration,
  JournalApi,
} from '@f-wallet/typescript';
import type { JournalGetJournalRequest } from '@f-wallet/typescript';

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
  const api = new JournalApi(config);

  const body = {
    // string (optional)
    cursor: cursor_example,
    // number (optional)
    limit: 20,
  } satisfies JournalGetJournalRequest;

  try {
    const data = await api.journalGetJournal(body);
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
| **cursor** | `string` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**JournalGetJournal200Response**](JournalGetJournal200Response.md)

### Authorization

[hmacNonce](../README.md#hmacNonce), [apiKey](../README.md#apiKey), [hmacContentSha256](../README.md#hmacContentSha256), [hmacTimestamp](../README.md#hmacTimestamp), [hmacKeyId](../README.md#hmacKeyId), [hmacSignature](../README.md#hmacSignature)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated list of journal entries (without individual lines — use GET /journal/:id for full detail) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## journalGetJournalById

> JournalGetJournalById200Response journalGetJournalById(id)

Get Journal

Get a single journal entry with all its debit/credit lines. Use this to inspect the full accounting detail of any transaction.

### Example

```ts
import {
  Configuration,
  JournalApi,
} from '@f-wallet/typescript';
import type { JournalGetJournalByIdRequest } from '@f-wallet/typescript';

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
  const api = new JournalApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies JournalGetJournalByIdRequest;

  try {
    const data = await api.journalGetJournalById(body);
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

[**JournalGetJournalById200Response**](JournalGetJournalById200Response.md)

### Authorization

[hmacNonce](../README.md#hmacNonce), [apiKey](../README.md#apiKey), [hmacContentSha256](../README.md#hmacContentSha256), [hmacTimestamp](../README.md#hmacTimestamp), [hmacKeyId](../README.md#hmacKeyId), [hmacSignature](../README.md#hmacSignature)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Journal entry with all debit/credit lines |  -  |
| **404** | Journal entry not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

