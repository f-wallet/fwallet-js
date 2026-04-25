
# AuthGetAuthMe200ResponseUser


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`email` | string
`orgRole` | string
`tenantId` | string
`branchId` | string

## Example

```typescript
import type { AuthGetAuthMe200ResponseUser } from '@f-wallet/typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "email": null,
  "orgRole": null,
  "tenantId": null,
  "branchId": null,
} satisfies AuthGetAuthMe200ResponseUser

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AuthGetAuthMe200ResponseUser
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


