# GetResultsForLineItemForClassResponse

Successful response containing a collection of results for the specified line item in the class

## Example Usage

```typescript
import { GetResultsForLineItemForClassResponse } from "@superbuilders/oneroster/models/operations";

let value: GetResultsForLineItemForClassResponse = {
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
      scoreDate: new Date("2024-05-11T08:37:18.407Z"),
    },
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `results`                                                | [components.Result](../../models/components/result.md)[] | :heavy_check_mark:                                       | N/A                                                      |