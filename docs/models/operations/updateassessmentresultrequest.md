# UpdateAssessmentResultRequest

## Example Usage

```typescript
import { UpdateAssessmentResultRequest } from "@superbuilders/oneroster/models/operations";

let value: UpdateAssessmentResultRequest = {
  sourcedId: "<id>",
  requestBody: {
    assessmentResult: {
      status: "tobedeleted",
      assessmentLineItem: {
        sourcedId: "<id>",
      },
      student: {
        sourcedId: "<id>",
      },
      scoreDate: new Date("2023-03-01T00:32:15.397Z"),
      scoreStatus: "exempt",
    },
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `sourcedId`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The sourcedId of the assessment result to update                                                             |
| `requestBody`                                                                                                | [operations.UpdateAssessmentResultRequestBody](../../models/operations/updateassessmentresultrequestbody.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |