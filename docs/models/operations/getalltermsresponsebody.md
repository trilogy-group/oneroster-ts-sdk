# GetAllTermsResponseBody

Successful response containing a collection of terms

## Example Usage

```typescript
import { GetAllTermsResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetAllTermsResponseBody = {
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
  totalCount: 7675.21,
  pageCount: 6340.64,
  pageNumber: 1784.96,
  offset: 2079.98,
  limit: 930.57,
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