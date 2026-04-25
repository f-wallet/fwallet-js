
# BankSlipVerifyRequest


## Properties

Name | Type
------------ | -------------
`walletId` | string
`reference` | string
`amount` | number
`currencyCode` | string

## Example

```typescript
import type { BankSlipVerifyRequest } from '@f-wallet/react'

// TODO: Update the object below with actual values
const example = {
  "walletId": null,
  "reference": SLIP-20260317-001,
  "amount": 300000,
  "currencyCode": UGX,
} satisfies BankSlipVerifyRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BankSlipVerifyRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


