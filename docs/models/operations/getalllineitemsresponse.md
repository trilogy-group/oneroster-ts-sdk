# GetAllLineItemsResponse

## Example Usage

```typescript
import { GetAllLineItemsResponse } from "@superbuilders/oneroster/models/operations";

let value: GetAllLineItemsResponse = {
  result: {
    lineItems: [
      {
        status: "active",
        title: "<value>",
        assignDate: new Date("2024-04-18T09:54:17.672Z"),
        dueDate: new Date("2023-10-07T12:25:36.596Z"),
        class: {
          sourcedId: "<id>",
        },
        school: {
          sourcedId: "<id>",
        },
        category: {
          sourcedId: "<id>",
        },
      },
    ],
    totalCount: 5156.67,
    pageCount: 2331.81,
    pageNumber: 6902.84,
    offset: 5135.57,
    limit: 4592.7,
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `result`                                                                                         | [operations.GetAllLineItemsResponseBody](../../models/operations/getalllineitemsresponsebody.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |