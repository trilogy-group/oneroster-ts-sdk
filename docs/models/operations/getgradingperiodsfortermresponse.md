# GetGradingPeriodsForTermResponse

Successful response containing a collection of grading periods for the term

## Example Usage

```typescript
import { GetGradingPeriodsForTermResponse } from "@superbuilders/oneroster/models/operations";

let value: GetGradingPeriodsForTermResponse = {
  gradingPeriods: [
    {
      sourcedId: "<id>",
      status: "active",
      title: "<value>",
      startDate: "<value>",
      endDate: "<value>",
      type: "term",
      schoolYear: 2254.23,
      org: {
        href: "https://murky-median.biz",
        sourcedId: "<id>",
        type: "category",
      },
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `gradingPeriods`                                                           | [components.AcademicSession](../../models/components/academicsession.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |