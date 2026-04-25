
# AdminGetAdminDashboard200Response


## Properties

Name | Type
------------ | -------------
`tenantId` | string
`tenantName` | string
`walletCount` | number
`totalTransactions` | number
`revenueByurrency` | [Array&lt;AdminGetAdminDashboard200ResponseRevenueByurrencyInner&gt;](AdminGetAdminDashboard200ResponseRevenueByurrencyInner.md)
`tvlByCurrency` | [Array&lt;AdminGetAdminDashboard200ResponseTvlByCurrencyInner&gt;](AdminGetAdminDashboard200ResponseTvlByCurrencyInner.md)
`poolBalances` | [Array&lt;AdminGetAdminDashboard200ResponsePoolBalancesInner&gt;](AdminGetAdminDashboard200ResponsePoolBalancesInner.md)

## Example

```typescript
import type { AdminGetAdminDashboard200Response } from '@f-wallet/typescript'

// TODO: Update the object below with actual values
const example = {
  "tenantId": null,
  "tenantName": null,
  "walletCount": null,
  "totalTransactions": null,
  "revenueByurrency": null,
  "tvlByCurrency": null,
  "poolBalances": null,
} satisfies AdminGetAdminDashboard200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminGetAdminDashboard200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


