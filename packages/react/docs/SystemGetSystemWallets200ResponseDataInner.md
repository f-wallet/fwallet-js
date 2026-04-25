
# SystemGetSystemWallets200ResponseDataInner


## Properties

Name | Type
------------ | -------------
`id` | string
`tenantId` | string
`tenantName` | string
`tenantSlug` | string
`ownerType` | string
`ownerId` | string
`currencyCode` | string
`status` | string
`available` | string
`pending` | string
`createdAt` | string

## Example

```typescript
import type { SystemGetSystemWallets200ResponseDataInner } from '@f-wallet/react'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "tenantId": null,
  "tenantName": null,
  "tenantSlug": null,
  "ownerType": null,
  "ownerId": null,
  "currencyCode": null,
  "status": null,
  "available": null,
  "pending": null,
  "createdAt": null,
} satisfies SystemGetSystemWallets200ResponseDataInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SystemGetSystemWallets200ResponseDataInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


