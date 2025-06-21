# GetTermsForSchoolResponseBody

Collection of terms successfully retrieved

## Example Usage

```typescript
import { GetTermsForSchoolResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetTermsForSchoolResponseBody = {
  terms: [
    {
      sourcedId: "<id>",
      status: "active",
      title: "<value>",
      startDate: "<value>",
      endDate: "<value>",
      type: "term",
      schoolYear: 9932.39,
      org: {
        href: "https://white-freckle.biz",
        sourcedId: "<id>",
        type: "lineItem",
      },
    },
  ],
  totalCount: 3974.74,
  pageCount: 4500.26,
  pageNumber: 2716.95,
  offset: 4014.31,
  limit: 3364.81,
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