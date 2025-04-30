# GetAllResourcesResponse

## Example Usage

```typescript
import { GetAllResourcesResponse } from "@superbuilders/oneroster/models/operations";

let value: GetAllResourcesResponse = {
  result: {
    resources: [
      {
        sourcedId: "<id>",
        status: "tobedeleted",
        title: "<value>",
        vendorResourceId: "<id>",
      },
    ],
    totalCount: 5526.72,
    pageCount: 1173.12,
    pageNumber: 2846.52,
    offset: 6300.91,
    limit: 1067.45,
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `result`                                                                                         | [operations.GetAllResourcesResponseBody](../../models/operations/getallresourcesresponsebody.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |