# GetAllAssessmentResultsResponseBody

Successful response containing a collection of assessment results

## Example Usage

```typescript
import { GetAllAssessmentResultsResponseBody } from "oneroster/models/operations";

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
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `assessmentResults`                                                          | [components.AssessmentResult](../../models/components/assessmentresult.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |