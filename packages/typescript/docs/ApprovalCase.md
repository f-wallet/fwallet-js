
# ApprovalCase


## Properties

Name | Type
------------ | -------------
`id` | string
`caseType` | string
`status` | string
`payload` | { [key: string]: any | null; }
`requestedBy` | string
`decidedBy` | string
`createdAt` | string

## Example

```typescript
import type { ApprovalCase } from '@f-wallet/typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "caseType": payout_approval,
  "status": null,
  "payload": null,
  "requestedBy": null,
  "decidedBy": null,
  "createdAt": null,
} satisfies ApprovalCase

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ApprovalCase
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


