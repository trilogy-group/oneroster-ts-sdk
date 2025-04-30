# GetResultsForStudentForClassResponse

## Example Usage

```typescript
import { GetResultsForStudentForClassResponse } from "@superbuilders/oneroster/models/operations";

let value: GetResultsForStudentForClassResponse = {
  result: {
    results: [
      {
        status: "tobedeleted",
        lineItem: {
          sourcedId: "<id>",
        },
        student: {
          sourcedId: "<id>",
        },
        scoreStatus: "fully graded",
        scoreDate: new Date("2025-12-31T02:40:19.986Z"),
      },
    ],
    totalCount: 4046.66,
    pageCount: 8847.53,
    pageNumber: 8121.5,
    offset: 3701.71,
    limit: 6597.55,
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                                   | [operations.GetResultsForStudentForClassResponseBody](../../models/operations/getresultsforstudentforclassresponsebody.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |