
# TenantsPostTenantsRequest

Create a new tenant (organization). On creation, the system auto-provisions: system ledger accounts (pool, MoMo clearing, bank clearing, payout clearing, fee revenue, suspense) for each allowed currency, and a default fee schedule.

## Properties

Name | Type
------------ | -------------
`name` | string
`slug` | string
`config` | [TenantsPostTenantsRequestConfig](TenantsPostTenantsRequestConfig.md)

## Example

```typescript
import type { TenantsPostTenantsRequest } from '@f-wallet/react'

// TODO: Update the object below with actual values
const example = {
  "name": FWallet Uganda,
  "slug": fwallet-ug,
  "config": null,
} satisfies TenantsPostTenantsRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TenantsPostTenantsRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


