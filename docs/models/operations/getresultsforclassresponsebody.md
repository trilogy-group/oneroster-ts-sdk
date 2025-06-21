# GetResultsForClassResponseBody

Successful response containing a collection of results for the class

## Example Usage

```typescript
import { GetResultsForClassResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetResultsForClassResponseBody = {
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
  totalCount: 9594.72,
  pageCount: 3102.96,
  pageNumber: 3927.07,
  offset: 3022.78,
  limit: 796.65,
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