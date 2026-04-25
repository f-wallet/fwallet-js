
# JournalGetJournal200ResponseDataInner


## Properties

Name | Type
------------ | -------------
`id` | string
`tenantId` | string
`idempotencyKey` | string
`entryType` | string
`description` | string
`postedAt` | string
`createdAt` | string

## Example

```typescript
import type { JournalGetJournal200ResponseDataInner } from '@f-wallet/react'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "tenantId": null,
  "idempotencyKey": null,
  "entryType": transfer,
  "description": Transfer 100000 UGX from wallet A to wallet B,
  "postedAt": null,
  "createdAt": null,
} satisfies JournalGetJournal200ResponseDataInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JournalGetJournal200ResponseDataInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


