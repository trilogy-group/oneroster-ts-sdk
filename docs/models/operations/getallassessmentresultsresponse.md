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
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                         | [operations.GetAllAssessmentResultsResponseBody](../../models/operations/getallassessmentresultsresponsebody.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |