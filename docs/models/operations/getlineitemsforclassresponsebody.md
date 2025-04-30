# GetLineItemsForClassResponseBody

Successful response containing a collection of line items for the class

## Example Usage

```typescript
import { GetLineItemsForClassResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetLineItemsForClassResponseBody = {
  lineItems: [
    {
      status: "active",
      title: "<value>",
      assignDate: new Date("2023-03-06T13:37:45.510Z"),
      dueDate: new Date("2023-03-04T17:51:01.797Z"),
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
  totalCount: 8646.77,
  pageCount: 3918.63,
  pageNumber: 8120.14,
  offset: 3017.26,
  limit: 6716.55,
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