# UpdateAssessmentResultResponse

Assessment result successfully updated

## Example Usage

```typescript
import { UpdateAssessmentResultResponse } from "@superbuilders/oneroster/models/operations";

let value: UpdateAssessmentResultResponse = {
  assessmentResult: {
    status: "tobedeleted",
    assessmentLineItem: {
      sourcedId: "<id>",
    },
    student: {
      sourcedId: "<id>",
    },
    scoreDate: new Date("2025-02-26T08:00:41.444Z"),
    scoreStatus: "not submitted",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `assessmentResult`                                                         | [components.AssessmentResult](../../models/components/assessmentresult.md) | :heavy_check_mark:                                                         | Represents an assessment result.                                           |