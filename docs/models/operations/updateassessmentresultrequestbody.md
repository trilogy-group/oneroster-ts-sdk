# UpdateAssessmentResultRequestBody

## Example Usage

```typescript
import { UpdateAssessmentResultRequestBody } from "@superbuilders/oneroster/models/operations";

let value: UpdateAssessmentResultRequestBody = {
  assessmentResult: {
    status: "tobedeleted",
    assessmentLineItem: {
      sourcedId: "<id>",
    },
    student: {
      sourcedId: "<id>",
    },
    scoreDate: new Date("2025-05-27T04:24:47.054Z"),
    scoreStatus: "fully graded",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `assessmentResult`                                                         | [components.AssessmentResult](../../models/components/assessmentresult.md) | :heavy_check_mark:                                                         | Represents an assessment result.                                           |