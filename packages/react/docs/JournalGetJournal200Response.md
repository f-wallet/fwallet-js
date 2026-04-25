
# JournalGetJournal200Response


## Properties

Name | Type
------------ | -------------
`data` | [Array&lt;JournalGetJournal200ResponseDataInner&gt;](JournalGetJournal200ResponseDataInner.md)
`nextCursor` | string
`hasMore` | boolean

## Example

```typescript
import type { JournalGetJournal200Response } from '@f-wallet/react'

// TODO: Update the object below with actual values
const example = {
  "data": null,
  "nextCursor": null,
  "hasMore": null,
} satisfies JournalGetJournal200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JournalGetJournal200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


