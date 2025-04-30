# GetLineItemsForSchoolResponseBody

Successful response containing a collection of line items

## Example Usage

```typescript
import { GetLineItemsForSchoolResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetLineItemsForSchoolResponseBody = {
  lineItems: [
    {
      status: "tobedeleted",
      title: "<value>",
      assignDate: new Date("2024-07-05T05:24:44.301Z"),
      dueDate: new Date("2024-06-03T08:42:01.042Z"),
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
  totalCount: 7067.18,
  pageCount: 915.72,
  pageNumber: 3829.9,
  offset: 2400.25,
  limit: 8293.59,
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