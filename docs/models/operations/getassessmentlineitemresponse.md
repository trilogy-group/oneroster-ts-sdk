# GetAssessmentLineItemResponse

Successful response with the assessment line item

## Example Usage

```typescript
import { GetAssessmentLineItemResponse } from "oneroster/models/operations";

let value: GetAssessmentLineItemResponse = {
  assessmentLineItem: {
    status: "tobedeleted",
    title: "<value>",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `assessmentLineItem`                                                           | [components.AssessmentLineItem](../../models/components/assessmentlineitem.md) | :heavy_check_mark:                                                             | Represents an assessment line item.                                            |