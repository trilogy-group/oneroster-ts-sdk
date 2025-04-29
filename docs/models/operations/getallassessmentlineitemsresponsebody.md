# GetAllAssessmentLineItemsResponseBody

Successful response containing a collection of assessment line items

## Example Usage

```typescript
import { GetAllAssessmentLineItemsResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetAllAssessmentLineItemsResponseBody = {
  assessmentLineItems: [
    {
      status: "tobedeleted",
      title: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `assessmentLineItems`                                                            | [components.AssessmentLineItem](../../models/components/assessmentlineitem.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |