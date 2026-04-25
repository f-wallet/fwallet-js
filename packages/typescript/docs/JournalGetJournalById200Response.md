
# JournalGetJournalById200Response

An immutable ledger journal entry representing a financial event. Every money movement (deposit, transfer, payout, fee) is recorded as a journal entry with two or more lines that must balance. Entries are never updated or deleted — corrections are posted as new reversing entries.

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
`lines` | [Array&lt;JournalLine&gt;](JournalLine.md)

## Example

```typescript
import type { JournalGetJournalById200Response } from '@f-wallet/typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "tenantId": null,
  "idempotencyKey": null,
  "entryType": transfer,
  "description": Transfer 100000 UGX from wallet A to wallet B,
  "postedAt": null,
  "createdAt": null,
  "lines": null,
} satisfies JournalGetJournalById200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JournalGetJournalById200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


