# GetResultsForStudentForClassResponse

Successful response containing a collection of results for the specified student in the class

## Example Usage

```typescript
import { GetResultsForStudentForClassResponse } from "oneroster/models/operations";

let value: GetResultsForStudentForClassResponse = {
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
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `results`                                                | [components.Result](../../models/components/result.md)[] | :heavy_check_mark:                                       | N/A                                                      |