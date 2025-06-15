# GetAllAssessmentLineItemsResponseBody

Successful response containing a collection of assessment line items

## Example Usage

```typescript
import { GetAllAssessmentLineItemsResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetAllAssessmentLineItemsResponseBody = {
  assessmentLineItems: [
    {
      status: "active",
      title: "<value>",
    },
  ],
  totalCount: 6764.12,
  pageCount: 594.65,
  pageNumber: 4851.82,
  offset: 167.51,
  limit: 6626.19,
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