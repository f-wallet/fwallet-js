
# AdminPostAdminFeeSchedulesByIdRulesRequest


## Properties

Name | Type
------------ | -------------
`transactionType` | string
`currencyCode` | string
`minAmount` | number
`maxAmount` | number
`flatFee` | number
`percentageFee` | number
`minFee` | number
`maxFee` | number

## Example

```typescript
import type { AdminPostAdminFeeSchedulesByIdRulesRequest } from '@f-wallet/react'

// TODO: Update the object below with actual values
const example = {
  "transactionType": null,
  "currencyCode": null,
  "minAmount": null,
  "maxAmount": null,
  "flatFee": null,
  "percentageFee": null,
  "minFee": null,
  "maxFee": null,
} satisfies AdminPostAdminFeeSchedulesByIdRulesRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminPostAdminFeeSchedulesByIdRulesRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


