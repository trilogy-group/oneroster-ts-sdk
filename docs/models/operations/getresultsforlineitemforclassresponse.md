# GetResultsForLineItemForClassResponse

## Example Usage

```typescript
import { GetResultsForLineItemForClassResponse } from "@superbuilders/oneroster/models/operations";

let value: GetResultsForLineItemForClassResponse = {
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
        scoreStatus: "partially graded",
        scoreDate: new Date("2024-05-11T08:37:18.407Z"),
      },
    ],
    totalCount: 6708.99,
    pageCount: 2455.62,
    pageNumber: 9124.39,
    offset: 7540.12,
    limit: 7826.93,
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                                     | [operations.GetResultsForLineItemForClassResponseBody](../../models/operations/getresultsforlineitemforclassresponsebody.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |