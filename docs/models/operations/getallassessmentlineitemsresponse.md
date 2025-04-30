# GetAllAssessmentLineItemsResponse

## Example Usage

```typescript
import { GetAllAssessmentLineItemsResponse } from "@superbuilders/oneroster/models/operations";

let value: GetAllAssessmentLineItemsResponse = {
  result: {
    assessmentLineItems: [
      {
        status: "tobedeleted",
        title: "<value>",
      },
    ],
    totalCount: 9587.28,
    pageCount: 3726.03,
    pageNumber: 7471.46,
    offset: 9886.04,
    limit: 9858.75,
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                             | [operations.GetAllAssessmentLineItemsResponseBody](../../models/operations/getallassessmentlineitemsresponsebody.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |