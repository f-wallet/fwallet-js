
# PayoutCancellation


## Properties

Name | Type
------------ | -------------
`journalEntryId` | string
`caseId` | string
`amount` | string
`currencyCode` | string
`status` | string

## Example

```typescript
import type { PayoutCancellation } from '@f-wallet/react'

// TODO: Update the object below with actual values
const example = {
  "journalEntryId": null,
  "caseId": null,
  "amount": null,
  "currencyCode": null,
  "status": cancelled,
} satisfies PayoutCancellation

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PayoutCancellation
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


