
# DeveloperPostDeveloperApiKeys201Response


## Properties

Name | Type
------------ | -------------
`id` | string
`applicationId` | string
`applicationName` | string
`keyPrefix` | string
`name` | string
`scopes` | Array&lt;string&gt;
`environment` | string
`status` | string
`authMode` | string
`restrictions` | [ApiKeyRestrictions](ApiKeyRestrictions.md)
`expiresAt` | string
`revokedAt` | string
`lastUsedAt` | string
`lastUsedIp` | string
`lastUsedOrigin` | string
`createdAt` | string
`updatedAt` | string
`key` | string
`signingSecret` | string

## Example

```typescript
import type { DeveloperPostDeveloperApiKeys201Response } from '@f-wallet/typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "applicationId": null,
  "applicationName": null,
  "keyPrefix": null,
  "name": null,
  "scopes": null,
  "environment": null,
  "status": null,
  "authMode": null,
  "restrictions": null,
  "expiresAt": null,
  "revokedAt": null,
  "lastUsedAt": null,
  "lastUsedIp": null,
  "lastUsedOrigin": null,
  "createdAt": null,
  "updatedAt": null,
  "key": null,
  "signingSecret": null,
} satisfies DeveloperPostDeveloperApiKeys201Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperPostDeveloperApiKeys201Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


