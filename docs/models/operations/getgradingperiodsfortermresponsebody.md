# GetGradingPeriodsForTermResponseBody

Successful response containing a collection of grading periods for the term

## Example Usage

```typescript
import { GetGradingPeriodsForTermResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetGradingPeriodsForTermResponseBody = {
  gradingPeriods: [
    {
      sourcedId: "<id>",
      status: "tobedeleted",
      title: "<value>",
      startDate: "<value>",
      endDate: "<value>",
      type: "semester",
      schoolYear: 6040.34,
      org: {
        href: "https://rusty-schedule.net/",
        sourcedId: "<id>",
        type: "academicSession",
      },
    },
  ],
  totalCount: 8745.34,
  pageCount: 7171.19,
  pageNumber: 9372.17,
  offset: 1119.18,
  limit: 1189.61,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `gradingPeriods`                                                           | [components.AcademicSession](../../models/components/academicsession.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |
| `totalCount`                                                               | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `pageCount`                                                                | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `pageNumber`                                                               | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `offset`                                                                   | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `limit`                                                                    | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |