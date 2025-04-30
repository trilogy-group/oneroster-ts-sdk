# GetResultsForClassResponse

## Example Usage

```typescript
import { GetResultsForClassResponse } from "@superbuilders/oneroster/models/operations";

let value: GetResultsForClassResponse = {
  result: {
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
    totalCount: 1136.52,
    pageCount: 5947.06,
    pageNumber: 2947.24,
    offset: 7445.76,
    limit: 7918.78,
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `result`                                                                                               | [operations.GetResultsForClassResponseBody](../../models/operations/getresultsforclassresponsebody.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |