# GetAllAssessmentResultsResponse

## Example Usage

```typescript
import { GetAllAssessmentResultsResponse } from "@superbuilders/oneroster/models/operations";

let value: GetAllAssessmentResultsResponse = {
  result: {
    assessmentResults: [
      {
        status: "tobedeleted",
        assessmentLineItem: {
          sourcedId: "<id>",
        },
        student: {
          sourcedId: "<id>",
        },
        scoreDate: new Date("2023-10-31T13:10:20.884Z"),
        scoreStatus: "not submitted",
      },
    ],
    totalCount: 3698.19,
    pageCount: 4879.52,
    pageNumber: 5368.17,
    offset: 1663.64,
    limit: 9028.77,
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                         | [operations.GetAllAssessmentResultsResponseBody](../../models/operations/getallassessmentresultsresponsebody.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |