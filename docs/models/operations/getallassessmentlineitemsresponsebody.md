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
  totalCount: 3250.12,
  pageCount: 6764.12,
  pageNumber: 594.65,
  offset: 4851.82,
  limit: 167.51,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `assessmentLineItems`                                                            | [components.AssessmentLineItem](../../models/components/assessmentlineitem.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |
| `totalCount`                                                                     | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `pageCount`                                                                      | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `pageNumber`                                                                     | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `offset`                                                                         | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `limit`                                                                          | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |