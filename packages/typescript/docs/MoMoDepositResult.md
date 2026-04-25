
# MoMoDepositResult


## Properties

Name | Type
------------ | -------------
`journalEntryId` | string
`walletId` | string
`amount` | string
`currencyCode` | string
`replayed` | boolean

## Example

```typescript
import type { MoMoDepositResult } from '@f-wallet/typescript'

// TODO: Update the object below with actual values
const example = {
  "journalEntryId": null,
  "walletId": null,
  "amount": 500000,
  "currencyCode": UGX,
  "replayed": null,
} satisfies MoMoDepositResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MoMoDepositResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


