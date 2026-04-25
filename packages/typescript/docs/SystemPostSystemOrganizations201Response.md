
# SystemPostSystemOrganizations201Response


## Properties

Name | Type
------------ | -------------
`tenant` | [SystemGetSystemOrganizations200ResponseDataInner](SystemGetSystemOrganizations200ResponseDataInner.md)
`adminUser` | [SystemPostSystemOrganizations201ResponseAdminUser](SystemPostSystemOrganizations201ResponseAdminUser.md)
`temporaryPassword` | string
`inviteStatus` | string
`inviteEmail` | [SystemPostSystemOrganizations201ResponseInviteEmail](SystemPostSystemOrganizations201ResponseInviteEmail.md)

## Example

```typescript
import type { SystemPostSystemOrganizations201Response } from '@f-wallet/typescript'

// TODO: Update the object below with actual values
const example = {
  "tenant": null,
  "adminUser": null,
  "temporaryPassword": null,
  "inviteStatus": null,
  "inviteEmail": null,
} satisfies SystemPostSystemOrganizations201Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SystemPostSystemOrganizations201Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


