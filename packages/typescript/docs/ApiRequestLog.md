
# ApiRequestLog


## Properties

Name | Type
------------ | -------------
`id` | string
`tenantId` | string
`applicationId` | string
`apiKeyId` | string
`authMode` | string
`environment` | string
`method` | string
`path` | string
`routePattern` | string
`statusCode` | number
`errorCode` | string
`durationMs` | number
`correlationId` | string
`idempotencyKey` | string
`origin` | string
`ipAddress` | string
`userAgentHash` | string
`actorType` | string
`actorId` | string
`requestBodyHash` | string
`requestSignatureVerified` | boolean
`createdAt` | string

## Example

```typescript
import type { ApiRequestLog } from '@f-wallet/typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "tenantId": null,
  "applicationId": null,
  "apiKeyId": null,
  "authMode": null,
  "environment": null,
  "method": null,
  "path": null,
  "routePattern": null,
  "statusCode": null,
  "errorCode": null,
  "durationMs": null,
  "correlationId": null,
  "idempotencyKey": null,
  "origin": null,
  "ipAddress": null,
  "userAgentHash": null,
  "actorType": null,
  "actorId": null,
  "requestBodyHash": null,
  "requestSignatureVerified": null,
  "createdAt": null,
} satisfies ApiRequestLog

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ApiRequestLog
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


