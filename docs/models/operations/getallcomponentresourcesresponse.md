# GetAllComponentResourcesResponse

## Example Usage

```typescript
import { GetAllComponentResourcesResponse } from "@superbuilders/oneroster/models/operations";

let value: GetAllComponentResourcesResponse = {
  result: {
    componentResources: [
      {
        sourcedId: "<id>",
        status: "tobedeleted",
        courseComponent: {
          sourcedId: "<id>",
        },
        resource: {
          sourcedId: "<id>",
        },
        title: "<value>",
      },
    ],
    totalCount: 4906.82,
    pageCount: 3845.59,
    pageNumber: 132.64,
    offset: 5836.4,
    limit: 2165.27,
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                           | [operations.GetAllComponentResourcesResponseBody](../../models/operations/getallcomponentresourcesresponsebody.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |