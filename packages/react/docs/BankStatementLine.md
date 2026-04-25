
# BankStatementLine


## Properties

Name | Type
------------ | -------------
`reference` | string
`amount` | number
`currencyCode` | string
`date` | string
`description` | string

## Example

```typescript
import type { BankStatementLine } from '@f-wallet/react'

// TODO: Update the object below with actual values
const example = {
  "reference": SLIP-20260317-001,
  "amount": 300000,
  "currencyCode": UGX,
  "date": 2026-03-17,
  "description": null,
} satisfies BankStatementLine

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BankStatementLine
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


