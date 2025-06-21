# GetAllLineItemsResponseBody

Successful response containing a collection of line items

## Example Usage

```typescript
import { GetAllLineItemsResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetAllLineItemsResponseBody = {
  lineItems: [
    {
      status: "tobedeleted",
      title: "<value>",
      assignDate: new Date("2024-06-03T08:42:01.042Z"),
      dueDate: new Date("2025-02-13T13:30:50.872Z"),
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
  totalCount: 9222.59,
  pageCount: 2025.37,
  pageNumber: 1458.05,
  offset: 3947.52,
  limit: 4321.57,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `lineItems`                                                  | [components.LineItem](../../models/components/lineitem.md)[] | :heavy_check_mark:                                           | N/A                                                          |
| `totalCount`                                                 | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `pageCount`                                                  | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `pageNumber`                                                 | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `offset`                                                     | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `limit`                                                      | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |