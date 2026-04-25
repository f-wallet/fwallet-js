
# SystemGetSystemOverview200Response


## Properties

Name | Type
------------ | -------------
`totalOrganizations` | number
`totalWallets` | number
`totalTransactions` | number
`organizations` | [Array&lt;SystemGetSystemOverview200ResponseOrganizationsInner&gt;](SystemGetSystemOverview200ResponseOrganizationsInner.md)
`platformRevenueByCurrency` | [Array&lt;AdminGetAdminDashboard200ResponseRevenueByurrencyInner&gt;](AdminGetAdminDashboard200ResponseRevenueByurrencyInner.md)
`platformTvlByCurrency` | [Array&lt;SystemGetSystemOverview200ResponsePlatformTvlByCurrencyInner&gt;](SystemGetSystemOverview200ResponsePlatformTvlByCurrencyInner.md)

## Example

```typescript
import type { SystemGetSystemOverview200Response } from '@f-wallet/react'

// TODO: Update the object below with actual values
const example = {
  "totalOrganizations": null,
  "totalWallets": null,
  "totalTransactions": null,
  "organizations": null,
  "platformRevenueByCurrency": null,
  "platformTvlByCurrency": null,
} satisfies SystemGetSystemOverview200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SystemGetSystemOverview200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


