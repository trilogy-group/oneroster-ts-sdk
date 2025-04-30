# GetLineItemsForClassResponse

## Example Usage

```typescript
import { GetLineItemsForClassResponse } from "@superbuilders/oneroster/models/operations";

let value: GetLineItemsForClassResponse = {
  result: {
    lineItems: [
      {
        status: "tobedeleted",
        title: "<value>",
        assignDate: new Date("2024-08-26T02:39:53.820Z"),
        dueDate: new Date("2024-02-21T00:41:21.309Z"),
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
    totalCount: 5257.37,
    pageCount: 6333.56,
    pageNumber: 8825.87,
    offset: 3464.08,
    limit: 3974.45,
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [operations.GetLineItemsForClassResponseBody](../../models/operations/getlineitemsforclassresponsebody.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |