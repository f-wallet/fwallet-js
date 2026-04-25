
# PayoutsPostPayouts200Response

Result of a payout request. Funds are immediately held (moved from wallet to suspense) and an approval case is created. The payout is not settled until an approver (who is not the requestor) approves it.

## Properties

Name | Type
------------ | -------------
`payoutCaseId` | string
`holdJournalEntryId` | string
`walletId` | string
`amount` | string
`currencyCode` | string
`status` | string

## Example

```typescript
import type { PayoutsPostPayouts200Response } from '@f-wallet/typescript'

// TODO: Update the object below with actual values
const example = {
  "payoutCaseId": null,
  "holdJournalEntryId": null,
  "walletId": null,
  "amount": 200000,
  "currencyCode": UGX,
  "status": pending_approval,
} satisfies PayoutsPostPayouts200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PayoutsPostPayouts200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


