
# DeveloperPostDeveloperApiKeysRequest


## Properties

Name | Type
------------ | -------------
`name` | string
`scopes` | Array&lt;string&gt;
`environment` | string
`applicationId` | string
`authMode` | string
`restrictions` | [ApiKeyRestrictions](ApiKeyRestrictions.md)
`expiresAt` | Date

## Example

```typescript
import type { DeveloperPostDeveloperApiKeysRequest } from '@f-wallet/react'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "scopes": null,
  "environment": null,
  "applicationId": null,
  "authMode": null,
  "restrictions": null,
  "expiresAt": null,
} satisfies DeveloperPostDeveloperApiKeysRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperPostDeveloperApiKeysRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


