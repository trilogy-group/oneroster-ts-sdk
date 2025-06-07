# GetResultsForLineItemForClassResponseBody

Successful response containing a collection of results for the specified line item in the class

## Example Usage

```typescript
import { GetResultsForLineItemForClassResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetResultsForLineItemForClassResponseBody = {
  results: [
    {
      status: "active",
      lineItem: {
        sourcedId: "<id>",
      },
      student: {
        sourcedId: "<id>",
      },
      scoreStatus: "exempt",
      scoreDate: new Date("2024-03-19T22:34:33.693Z"),
    },
  ],
  totalCount: 6834.34,
  pageCount: 2541.53,
  pageNumber: 1636.15,
  offset: 6499.85,
  limit: 3326.75,
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