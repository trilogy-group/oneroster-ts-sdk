# GetTermsForSchoolResponseBody

Collection of terms successfully retrieved

## Example Usage

```typescript
import { GetTermsForSchoolResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetTermsForSchoolResponseBody = {
  terms: [
    {
      sourcedId: "<id>",
      status: "tobedeleted",
      title: "<value>",
      startDate: "<value>",
      endDate: "<value>",
      type: "semester",
      schoolYear: 9450.81,
      org: {
        href: "https://wealthy-vestment.info",
        sourcedId: "<id>",
        type: "class",
      },
    },
  ],
  totalCount: 4635.61,
  pageCount: 3974.74,
  pageNumber: 4500.26,
  offset: 2716.95,
  limit: 4014.31,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `terms`                                                                    | [components.AcademicSession](../../models/components/academicsession.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |
| `totalCount`                                                               | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `pageCount`                                                                | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `pageNumber`                                                               | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `offset`                                                                   | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `limit`                                                                    | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |