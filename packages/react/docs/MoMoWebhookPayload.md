
# MoMoWebhookPayload


## Properties

Name | Type
------------ | -------------
`transactionId` | string
`phoneNumber` | string
`amount` | number
`currencyCode` | string
`walletId` | string
`signature` | string
`timestamp` | string

## Example

```typescript
import type { MoMoWebhookPayload } from '@f-wallet/react'

// TODO: Update the object below with actual values
const example = {
  "transactionId": MOMO-A1B2C3D4,
  "phoneNumber": +256700100001,
  "amount": 500000,
  "currencyCode": UGX,
  "walletId": null,
  "signature": null,
  "timestamp": null,
} satisfies MoMoWebhookPayload

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MoMoWebhookPayload
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


