
# TransfersPostTransfers200Response

Result of a completed transfer, including the fee breakdown. If the same Idempotency-Key is replayed, the original result is returned with an Idempotent-Replayed: true header.

## Properties

Name | Type
------------ | -------------
`id` | string
`journalEntryId` | string
`fromWalletId` | string
`toWalletId` | string
`amount` | string
`fee` | string
`currencyCode` | string
`status` | string
`createdAt` | string

## Example

```typescript
import type { TransfersPostTransfers200Response } from '@f-wallet/react'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "journalEntryId": null,
  "fromWalletId": null,
  "toWalletId": null,
  "amount": 100000,
  "fee": 2000,
  "currencyCode": UGX,
  "status": completed,
  "createdAt": null,
} satisfies TransfersPostTransfers200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransfersPostTransfers200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


