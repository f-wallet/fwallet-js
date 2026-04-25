
# SystemGetSystemOverview200ResponseOrganizationsInner


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`slug` | string
`status` | string
`walletCount` | number
`transactionCount` | number
`revenueByCurrency` | [Array&lt;SystemGetSystemOverview200ResponseOrganizationsInnerRevenueByCurrencyInner&gt;](SystemGetSystemOverview200ResponseOrganizationsInnerRevenueByCurrencyInner.md)
`tvlByCurrency` | [Array&lt;SystemGetSystemOverview200ResponseOrganizationsInnerTvlByCurrencyInner&gt;](SystemGetSystemOverview200ResponseOrganizationsInnerTvlByCurrencyInner.md)

## Example

```typescript
import type { SystemGetSystemOverview200ResponseOrganizationsInner } from '@f-wallet/react'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "slug": null,
  "status": null,
  "walletCount": null,
  "transactionCount": null,
  "revenueByCurrency": null,
  "tvlByCurrency": null,
} satisfies SystemGetSystemOverview200ResponseOrganizationsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SystemGetSystemOverview200ResponseOrganizationsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


