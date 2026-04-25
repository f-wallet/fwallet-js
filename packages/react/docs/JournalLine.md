
# JournalLine


## Properties

Name | Type
------------ | -------------
`id` | string
`accountId` | string
`amount` | string
`direction` | string
`currencyCode` | string

## Example

```typescript
import type { JournalLine } from '@f-wallet/react'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "accountId": null,
  "amount": 100000,
  "direction": null,
  "currencyCode": UGX,
} satisfies JournalLine

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JournalLine
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


