# GetAllAssessmentResultsResponseBody

Successful response containing a collection of assessment results

## Example Usage

```typescript
import { GetAllAssessmentResultsResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetAllAssessmentResultsResponseBody = {
  assessmentResults: [
    {
      status: "tobedeleted",
      assessmentLineItem: {
        sourcedId: "<id>",
      },
      student: {
        sourcedId: "<id>",
      },
      scoreDate: new Date("2025-08-27T19:19:54.088Z"),
      scoreStatus: "exempt",
    },
  ],
  totalCount: 4926.22,
  pageCount: 6938.81,
  pageNumber: 5602.36,
  offset: 7070.33,
  limit: 4750.02,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `assessmentResults`                                                          | [components.AssessmentResult](../../models/components/assessmentresult.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `totalCount`                                                                 | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `pageCount`                                                                  | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `pageNumber`                                                                 | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `offset`                                                                     | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `limit`                                                                      | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |