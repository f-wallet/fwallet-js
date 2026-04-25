
# WalletsGetWalletsLookup200Response


## Properties

Name | Type
------------ | -------------
`found` | boolean
`user` | [WalletsGetWalletsLookup200ResponseUser](WalletsGetWalletsLookup200ResponseUser.md)
`wallet` | [WalletsGetWalletsLookup200ResponseWallet](WalletsGetWalletsLookup200ResponseWallet.md)

## Example

```typescript
import type { WalletsGetWalletsLookup200Response } from '@f-wallet/typescript'

// TODO: Update the object below with actual values
const example = {
  "found": null,
  "user": null,
  "wallet": null,
} satisfies WalletsGetWalletsLookup200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WalletsGetWalletsLookup200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


