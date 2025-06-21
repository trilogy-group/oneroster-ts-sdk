# UpdateAssessmentLineItemResponse

Assessment line item successfully updated

## Example Usage

```typescript
import { UpdateAssessmentLineItemResponse } from "@superbuilders/oneroster/models/operations";

let value: UpdateAssessmentLineItemResponse = {
  assessmentLineItem: {
    status: "active",
    title: "<value>",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `assessmentLineItem`                                                           | [components.AssessmentLineItem](../../models/components/assessmentlineitem.md) | :heavy_check_mark:                                                             | Represents an assessment line item.                                            |