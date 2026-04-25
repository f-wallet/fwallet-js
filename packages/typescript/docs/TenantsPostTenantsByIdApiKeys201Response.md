
# TenantsPostTenantsByIdApiKeys201Response

API key metadata. The actual key value is only included on creation (see the key field in the creation response).

## Properties

Name | Type
------------ | -------------
`id` | string
`keyPrefix` | string
`name` | string
`scopes` | Array&lt;string&gt;
`environment` | string
`createdAt` | string
`key` | string

## Example

```typescript
import type { TenantsPostTenantsByIdApiKeys201Response } from '@f-wallet/typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "keyPrefix": fwk_live_2640626,
  "name": null,
  "scopes": null,
  "environment": null,
  "createdAt": null,
  "key": null,
} satisfies TenantsPostTenantsByIdApiKeys201Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TenantsPostTenantsByIdApiKeys201Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


