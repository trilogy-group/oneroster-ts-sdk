# GetResultsForClassResponse

Successful response containing a collection of results for the class

## Example Usage

```typescript
import { GetResultsForClassResponse } from "@superbuilders/oneroster/models/operations";

let value: GetResultsForClassResponse = {
  results: [
    {
      status: "active",
      lineItem: {
        sourcedId: "<id>",
      },
      student: {
        sourcedId: "<id>",
      },
      scoreStatus: "partially graded",
      scoreDate: new Date("2025-12-21T02:23:25.439Z"),
    },
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `results`                                                | [components.Result](../../models/components/result.md)[] | :heavy_check_mark:                                       | N/A                                                      |