# GetAllGradingPeriodsResponse

Success

## Example Usage

```typescript
import { GetAllGradingPeriodsResponse } from "@superbuilders/oneroster/models/operations";

let value: GetAllGradingPeriodsResponse = {
  gradingPeriods: [
    {
      sourcedId: "<id>",
      status: "tobedeleted",
      title: "<value>",
      startDate: "<value>",
      endDate: "<value>",
      type: "term",
      schoolYear: 9004.29,
      org: {
        href: "https://bare-thigh.com/",
        sourcedId: "<id>",
        type: "courseComponent",
      },
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `gradingPeriods`                                                           | [components.AcademicSession](../../models/components/academicsession.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |