
# TeamPostTeamRequest


## Properties

Name | Type
------------ | -------------
`name` | string
`email` | string
`password` | string
`orgRole` | string
`branchId` | string

## Example

```typescript
import type { TeamPostTeamRequest } from '@f-wallet/typescript'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "email": null,
  "password": null,
  "orgRole": null,
  "branchId": null,
} satisfies TeamPostTeamRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TeamPostTeamRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


