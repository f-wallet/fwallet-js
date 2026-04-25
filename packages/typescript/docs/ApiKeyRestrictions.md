
# ApiKeyRestrictions


## Properties

Name | Type
------------ | -------------
`allowedOrigins` | Array&lt;string&gt;
`allowedIps` | Array&lt;string&gt;
`allowedCurrencies` | Array&lt;string&gt;
`allowedOwnerTypes` | Array&lt;string&gt;
`allowedWalletIds` | Array&lt;string&gt;
`maxAmountMinor` | string
`requireActorHeaders` | boolean
`requireRequestSigning` | boolean

## Example

```typescript
import type { ApiKeyRestrictions } from '@f-wallet/typescript'

// TODO: Update the object below with actual values
const example = {
  "allowedOrigins": null,
  "allowedIps": null,
  "allowedCurrencies": null,
  "allowedOwnerTypes": null,
  "allowedWalletIds": null,
  "maxAmountMinor": null,
  "requireActorHeaders": null,
  "requireRequestSigning": null,
} satisfies ApiKeyRestrictions

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ApiKeyRestrictions
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


