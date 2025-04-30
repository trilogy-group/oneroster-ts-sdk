# GetLineItemsForSchoolResponse

## Example Usage

```typescript
import { GetLineItemsForSchoolResponse } from "@superbuilders/oneroster/models/operations";

let value: GetLineItemsForSchoolResponse = {
  result: {
    lineItems: [
      {
        status: "active",
        title: "<value>",
        assignDate: new Date("2023-03-06T04:41:28.306Z"),
        dueDate: new Date("2025-03-04T20:40:12.090Z"),
        class: {
          sourcedId: "<id>",
        },
        school: {
          sourcedId: "<id>",
        },
        category: {
          sourcedId: "<id>",
        },
      },
    ],
    totalCount: 5226.74,
    pageCount: 1333.93,
    pageNumber: 3527.17,
    offset: 4201.61,
    limit: 9618.79,
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                     | [operations.GetLineItemsForSchoolResponseBody](../../models/operations/getlineitemsforschoolresponsebody.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |