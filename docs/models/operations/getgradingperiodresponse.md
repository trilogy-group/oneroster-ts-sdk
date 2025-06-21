# GetGradingPeriodResponse

Success

## Example Usage

```typescript
import { GetGradingPeriodResponse } from "@superbuilders/oneroster/models/operations";

let value: GetGradingPeriodResponse = {
  gradingPeriod: {
    sourcedId: "<id>",
    status: "active",
    title: "<value>",
    startDate: "<value>",
    endDate: "<value>",
    type: "term",
    schoolYear: 5476.03,
    org: {
      href: "https://white-freckle.biz",
      sourcedId: "<id>",
      type: "lineItem",
    },
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `gradingPeriod`                                                          | [components.AcademicSession](../../models/components/academicsession.md) | :heavy_check_mark:                                                       | Represents an academic session.                                          |