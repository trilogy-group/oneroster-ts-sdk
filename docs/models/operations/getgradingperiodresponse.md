# GetGradingPeriodResponse

Success

## Example Usage

```typescript
import { GetGradingPeriodResponse } from "oneroster/models/operations";

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
      href: "https://legal-solution.info/",
      sourcedId: "<id>",
      type: "class",
    },
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `gradingPeriod`                                                          | [components.AcademicSession](../../models/components/academicsession.md) | :heavy_check_mark:                                                       | Represents an academic session.                                          |