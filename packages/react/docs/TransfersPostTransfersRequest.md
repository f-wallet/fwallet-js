
# TransfersPostTransfersRequest

Execute a wallet-to-wallet transfer. The fee engine computes the commission from the tenant\'s fee schedule based on the transactionType. Requires an Idempotency-Key header.

## Properties

Name | Type
------------ | -------------
`fromWalletId` | string
`toWalletId` | string
`amount` | number
`currencyCode` | string
`transactionType` | string

## Example

```typescript
import type { TransfersPostTransfersRequest } from '@f-wallet/react'

// TODO: Update the object below with actual values
const example = {
  "fromWalletId": null,
  "toWalletId": null,
  "amount": 100000,
  "currencyCode": UGX,
  "transactionType": transfer,
} satisfies TransfersPostTransfersRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransfersPostTransfersRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


