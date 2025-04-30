# GetResultsForLineItemForClassResponseBody

Successful response containing a collection of results for the specified line item in the class

## Example Usage

```typescript
import { GetResultsForLineItemForClassResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetResultsForLineItemForClassResponseBody = {
  results: [
    {
      status: "tobedeleted",
      lineItem: {
        sourcedId: "<id>",
      },
      student: {
        sourcedId: "<id>",
      },
      scoreStatus: "partially graded",
      scoreDate: new Date("2023-10-06T13:14:02.819Z"),
    },
  ],
  totalCount: 1636.15,
  pageCount: 6499.85,
  pageNumber: 3326.75,
  offset: 733.42,
  limit: 5311.17,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `results`                                                | [components.Result](../../models/components/result.md)[] | :heavy_check_mark:                                       | N/A                                                      |
| `totalCount`                                             | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `pageCount`                                              | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `pageNumber`                                             | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `offset`                                                 | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `limit`                                                  | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |