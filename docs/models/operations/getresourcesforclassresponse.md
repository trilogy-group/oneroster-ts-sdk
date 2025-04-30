# GetResourcesForClassResponse

## Example Usage

```typescript
import { GetResourcesForClassResponse } from "@superbuilders/oneroster/models/operations";

let value: GetResourcesForClassResponse = {
  result: {
    resources: [
      {
        sourcedId: "<id>",
        status: "active",
        title: "<value>",
        vendorResourceId: "<id>",
      },
    ],
    totalCount: 6611.94,
    pageCount: 7914.49,
    pageNumber: 371.17,
    offset: 8138,
    limit: 4269.72,
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [operations.GetResourcesForClassResponseBody](../../models/operations/getresourcesforclassresponsebody.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |