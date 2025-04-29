# CreateAssessmentLineItemRequest

## Example Usage

```typescript
import { CreateAssessmentLineItemRequest } from "@superbuilders/oneroster/models/operations";

let value: CreateAssessmentLineItemRequest = {
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