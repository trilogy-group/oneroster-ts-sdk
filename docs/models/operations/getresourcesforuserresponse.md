# GetResourcesForUserResponse

## Example Usage

```typescript
import { GetResourcesForUserResponse } from "@superbuilders/oneroster/models/operations";

let value: GetResourcesForUserResponse = {
  result: {
    resources: [
      {
        sourcedId: "<id>",
        status: "tobedeleted",
        title: "<value>",
        vendorResourceId: "<id>",
      },
    ],
    totalCount: 7662.08,
    pageCount: 122.43,
    pageNumber: 3556.85,
    offset: 5520.27,
    limit: 1361.63,
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                 | [operations.GetResourcesForUserResponseBody](../../models/operations/getresourcesforuserresponsebody.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |