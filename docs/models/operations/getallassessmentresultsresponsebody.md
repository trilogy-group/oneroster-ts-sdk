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
      scoreDate: new Date("2024-08-24T01:33:30.766Z"),
      scoreStatus: "submitted",
    },
  ],
  totalCount: 909.86,
  pageCount: 4926.22,
  pageNumber: 6938.81,
  offset: 5602.36,
  limit: 7070.33,
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