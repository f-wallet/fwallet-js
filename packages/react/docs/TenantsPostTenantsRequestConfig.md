
# TenantsPostTenantsRequestConfig

Tenant-level configuration controlling currencies, limits, and approval thresholds. Each tenant (organization) can define its own policies without changing the underlying code.

## Properties

Name | Type
------------ | -------------
`defaultCurrency` | string
`allowedCurrencies` | Array&lt;string&gt;
`maxTransactionAmount` | number
`requireApprovalAbove` | number

## Example

```typescript
import type { TenantsPostTenantsRequestConfig } from '@f-wallet/react'

// TODO: Update the object below with actual values
const example = {
  "defaultCurrency": UGX,
  "allowedCurrencies": null,
  "maxTransactionAmount": 50000000,
  "requireApprovalAbove": 5000000,
} satisfies TenantsPostTenantsRequestConfig

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TenantsPostTenantsRequestConfig
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


