
# WalletsPostWalletsRequest

Create a new wallet. Each wallet is backed by a dedicated ledger account (asset:wallet:{ownerType}:{ownerId}:{currency}) with a zero initial balance. A user can have one wallet per currency.

## Properties

Name | Type
------------ | -------------
`ownerType` | string
`ownerId` | string
`currencyCode` | string

## Example

```typescript
import type { WalletsPostWalletsRequest } from '@f-wallet/react'

// TODO: Update the object below with actual values
const example = {
  "ownerType": null,
  "ownerId": user-alice-001,
  "currencyCode": UGX,
} satisfies WalletsPostWalletsRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WalletsPostWalletsRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


