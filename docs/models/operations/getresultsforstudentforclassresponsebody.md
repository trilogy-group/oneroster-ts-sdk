# GetResultsForStudentForClassResponseBody

Successful response containing a collection of results for the specified student in the class

## Example Usage

```typescript
import { GetResultsForStudentForClassResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetResultsForStudentForClassResponseBody = {
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
  totalCount: 6064.33,
  pageCount: 4820.23,
  pageNumber: 9170.26,
  offset: 3776.56,
  limit: 6053.35,
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