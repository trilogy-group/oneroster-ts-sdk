# GetAssessmentResultResponse

Successful response with the assessment result

## Example Usage

```typescript
import { GetAssessmentResultResponse } from "@superbuilders/oneroster/models/operations";

let value: GetAssessmentResultResponse = {
  assessmentResult: {
    status: "active",
    assessmentLineItem: {
      sourcedId: "<id>",
    },
    student: {
      sourcedId: "<id>",
    },
    scoreDate: new Date("2024-05-21T03:02:33.951Z"),
    scoreStatus: "not submitted",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `assessmentResult`                                                         | [components.AssessmentResult](../../models/components/assessmentresult.md) | :heavy_check_mark:                                                         | Represents an assessment result.                                           |