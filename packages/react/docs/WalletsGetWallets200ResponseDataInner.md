
# WalletsGetWallets200ResponseDataInner

A wallet represents a user-facing balance in a single currency. Under the hood, each wallet maps to a ledger account where all movements are recorded as double-entry journal postings. Balances are materialized and updated atomically with each posting.

## Properties

Name | Type
------------ | -------------
`id` | string
`tenantId` | string
`ownerType` | string
`ownerId` | string
`currencyCode` | string
`status` | string
`balance` | [WalletsGetWallets200ResponseDataInnerBalance](WalletsGetWallets200ResponseDataInnerBalance.md)
`createdAt` | string

## Example

```typescript
import type { WalletsGetWallets200ResponseDataInner } from '@f-wallet/react'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "tenantId": null,
  "ownerType": null,
  "ownerId": null,
  "currencyCode": UGX,
  "status": null,
  "balance": null,
  "createdAt": null,
} satisfies WalletsGetWallets200ResponseDataInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WalletsGetWallets200ResponseDataInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


