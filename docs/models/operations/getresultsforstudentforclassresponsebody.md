# GetResultsForStudentForClassResponseBody

Successful response containing a collection of results for the specified student in the class

## Example Usage

```typescript
import { GetResultsForStudentForClassResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetResultsForStudentForClassResponseBody = {
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
      scoreDate: new Date("2024-06-12T07:08:23.003Z"),
    },
  ],
  totalCount: 9170.26,
  pageCount: 3776.56,
  pageNumber: 6053.35,
  offset: 1454.47,
  limit: 3699.99,
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