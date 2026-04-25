
# DeveloperApplication


## Properties

Name | Type
------------ | -------------
`id` | string
`tenantId` | string
`name` | string
`description` | string
`environment` | string
`status` | string
`ownerUserId` | string
`createdByUserId` | string
`disabledAt` | string
`createdAt` | string
`updatedAt` | string

## Example

```typescript
import type { DeveloperApplication } from '@f-wallet/react'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "tenantId": null,
  "name": null,
  "description": null,
  "environment": null,
  "status": null,
  "ownerUserId": null,
  "createdByUserId": null,
  "disabledAt": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies DeveloperApplication

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperApplication
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


