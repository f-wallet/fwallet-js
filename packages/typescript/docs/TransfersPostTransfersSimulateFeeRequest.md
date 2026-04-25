
# TransfersPostTransfersSimulateFeeRequest

Preview the fee for a hypothetical transaction without executing it. Useful for showing users the fee before they confirm a transfer.

## Properties

Name | Type
------------ | -------------
`transactionType` | string
`amount` | number
`currencyCode` | string

## Example

```typescript
import type { TransfersPostTransfersSimulateFeeRequest } from '@f-wallet/typescript'

// TODO: Update the object below with actual values
const example = {
  "transactionType": transfer,
  "amount": 100000,
  "currencyCode": UGX,
} satisfies TransfersPostTransfersSimulateFeeRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransfersPostTransfersSimulateFeeRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


