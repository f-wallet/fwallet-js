
# TenantsPostTenants201Response

A tenant represents an organization using FWallet (e.g. a betting platform, a remittance company). Tenants are fully isolated — each has its own wallets, ledger, fee schedules, and approval policies.

## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`slug` | string
`status` | string
`createdAt` | string

## Example

```typescript
import type { TenantsPostTenants201Response } from '@f-wallet/react'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "slug": null,
  "status": null,
  "createdAt": null,
} satisfies TenantsPostTenants201Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TenantsPostTenants201Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


