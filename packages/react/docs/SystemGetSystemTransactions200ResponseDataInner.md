
# SystemGetSystemTransactions200ResponseDataInner


## Properties

Name | Type
------------ | -------------
`id` | string
`tenantId` | string
`tenantName` | string
`tenantSlug` | string
`entryType` | string
`description` | string
`idempotencyKey` | string
`postedAt` | string
`lines` | [Array&lt;SystemGetSystemTransactions200ResponseDataInnerLinesInner&gt;](SystemGetSystemTransactions200ResponseDataInnerLinesInner.md)

## Example

```typescript
import type { SystemGetSystemTransactions200ResponseDataInner } from '@f-wallet/react'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "tenantId": null,
  "tenantName": null,
  "tenantSlug": null,
  "entryType": null,
  "description": null,
  "idempotencyKey": null,
  "postedAt": null,
  "lines": null,
} satisfies SystemGetSystemTransactions200ResponseDataInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SystemGetSystemTransactions200ResponseDataInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


