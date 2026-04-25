
# PayoutRequest


## Properties

Name | Type
------------ | -------------
`walletId` | string
`amount` | number
`currencyCode` | string
`payoutMethod` | string
`requestedBy` | string

## Example

```typescript
import type { PayoutRequest } from '@f-wallet/typescript'

// TODO: Update the object below with actual values
const example = {
  "walletId": null,
  "amount": 200000,
  "currencyCode": UGX,
  "payoutMethod": momo,
  "requestedBy": david-004,
} satisfies PayoutRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PayoutRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


