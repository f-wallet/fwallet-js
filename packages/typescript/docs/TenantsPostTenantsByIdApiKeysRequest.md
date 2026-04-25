
# TenantsPostTenantsByIdApiKeysRequest

Create a new API key for a tenant. The full key value is returned only once on creation — store it securely. All subsequent API calls use this key in the X-API-Key header.

## Properties

Name | Type
------------ | -------------
`name` | string
`scopes` | Array&lt;string&gt;
`environment` | string

## Example

```typescript
import type { TenantsPostTenantsByIdApiKeysRequest } from '@f-wallet/typescript'

// TODO: Update the object below with actual values
const example = {
  "name": Production API Key,
  "scopes": ["ledger:read","wallet:transfer"],
  "environment": null,
} satisfies TenantsPostTenantsByIdApiKeysRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TenantsPostTenantsByIdApiKeysRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


