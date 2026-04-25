
# AdminGetAdminFeeSchedules200ResponseDataInner


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`isDefault` | boolean
`rules` | [Array&lt;AdminGetAdminFeeSchedules200ResponseDataInnerRulesInner&gt;](AdminGetAdminFeeSchedules200ResponseDataInnerRulesInner.md)

## Example

```typescript
import type { AdminGetAdminFeeSchedules200ResponseDataInner } from '@f-wallet/typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "isDefault": null,
  "rules": null,
} satisfies AdminGetAdminFeeSchedules200ResponseDataInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminGetAdminFeeSchedules200ResponseDataInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


