# GetAllTermsResponseBody

Successful response containing a collection of terms

## Example Usage

```typescript
import { GetAllTermsResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetAllTermsResponseBody = {
  terms: [
    {
      sourcedId: "<id>",
      status: "tobedeleted",
      title: "<value>",
      startDate: "<value>",
      endDate: "<value>",
      type: "term",
      schoolYear: 6340.64,
      org: {
        href: "https://dreary-bourgeoisie.info/",
        sourcedId: "<id>",
        type: "componentResource",
      },
    },
  ],
  totalCount: 4900.33,
  pageCount: 450.55,
  pageNumber: 4037.55,
  offset: 9099.24,
  limit: 464.3,
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