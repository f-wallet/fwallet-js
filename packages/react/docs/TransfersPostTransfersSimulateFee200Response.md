
# TransfersPostTransfersSimulateFee200Response

Fee simulation result. Shows the breakdown between flat and percentage components, and the total amount that would be debited from the sender\'s wallet.

## Properties

Name | Type
------------ | -------------
`fee` | string
`feeBreakdown` | [TransfersPostTransfersSimulateFee200ResponseFeeBreakdown](TransfersPostTransfersSimulateFee200ResponseFeeBreakdown.md)
`totalDebit` | string

## Example

```typescript
import type { TransfersPostTransfersSimulateFee200Response } from '@f-wallet/react'

// TODO: Update the object below with actual values
const example = {
  "fee": 2000,
  "feeBreakdown": null,
  "totalDebit": 102000,
} satisfies TransfersPostTransfersSimulateFee200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransfersPostTransfersSimulateFee200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


