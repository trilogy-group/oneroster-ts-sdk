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
  totalCount: 915.72,
  pageCount: 3829.9,
  pageNumber: 2400.25,
  offset: 8293.59,
  limit: 9173.5,
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