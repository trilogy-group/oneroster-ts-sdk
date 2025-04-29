# UpdateAssessmentLineItemRequestBody

## Example Usage

```typescript
import { UpdateAssessmentLineItemRequestBody } from "@superbuilders/oneroster/models/operations";

let value: UpdateAssessmentLineItemRequestBody = {
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