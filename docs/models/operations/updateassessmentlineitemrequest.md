# UpdateAssessmentLineItemRequest

## Example Usage

```typescript
import { UpdateAssessmentLineItemRequest } from "@superbuilders/oneroster/models/operations";

let value: UpdateAssessmentLineItemRequest = {
  sourcedId: "<id>",
  requestBody: {
    assessmentLineItem: {
      status: "tobedeleted",
      title: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `sourcedId`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The sourcedId of the assessment line item to update                                                              |
| `requestBody`                                                                                                    | [operations.UpdateAssessmentLineItemRequestBody](../../models/operations/updateassessmentlineitemrequestbody.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |