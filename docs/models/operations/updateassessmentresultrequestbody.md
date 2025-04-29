# UpdateAssessmentResultRequestBody

## Example Usage

```typescript
import { UpdateAssessmentResultRequestBody } from "@superbuilders/oneroster/models/operations";

let value: UpdateAssessmentResultRequestBody = {
  assessmentResult: {
    status: "active",
    assessmentLineItem: {
      sourcedId: "<id>",
    },
    student: {
      sourcedId: "<id>",
    },
    scoreDate: new Date("2025-12-21T10:22:04.314Z"),
    scoreStatus: "submitted",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `assessmentResult`                                                         | [components.AssessmentResult](../../models/components/assessmentresult.md) | :heavy_check_mark:                                                         | Represents an assessment result.                                           |