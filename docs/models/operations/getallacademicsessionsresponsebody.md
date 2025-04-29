# GetAllAcademicSessionsResponseBody

Success

## Example Usage

```typescript
import { GetAllAcademicSessionsResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetAllAcademicSessionsResponseBody = {
  academicSessions: [
    {
      sourcedId: "<id>",
      status: "active",
      title: "<value>",
      startDate: "<value>",
      endDate: "<value>",
      type: "semester",
      schoolYear: 1093.73,
      org: {
        href: "https://damp-brace.biz/",
        sourcedId: "<id>",
        type: "courseComponent",
      },
    },
  ],
  totalCount: 168413,
  pageCount: 108370,
  pageNumber: 749504,
  offset: 746937,
  limit: 634030,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `academicSessions`                                                         | [components.AcademicSession](../../models/components/academicsession.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |
| `totalCount`                                                               | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `pageCount`                                                                | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `pageNumber`                                                               | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `offset`                                                                   | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `limit`                                                                    | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |