
# WalletsGetWallets200ResponseDataInnerBalance

Wallet balance breakdown. All values are strings representing bigint amounts in the smallest currency unit.

## Properties

Name | Type
------------ | -------------
`available` | string
`pending` | string

## Example

```typescript
import type { WalletsGetWallets200ResponseDataInnerBalance } from '@f-wallet/react'

// TODO: Update the object below with actual values
const example = {
  "available": 500000,
  "pending": 0,
} satisfies WalletsGetWallets200ResponseDataInnerBalance

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WalletsGetWallets200ResponseDataInnerBalance
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


