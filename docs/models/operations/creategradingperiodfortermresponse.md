# CreateGradingPeriodForTermResponse

Grading period successfully created

## Example Usage

```typescript
import { CreateGradingPeriodForTermResponse } from "@superbuilders/oneroster/models/operations";

let value: CreateGradingPeriodForTermResponse = {
  academicSession: {
    sourcedId: "<id>",
    status: "active",
    title: "<value>",
    startDate: "<value>",
    endDate: "<value>",
    type: "semester",
    schoolYear: 7108.8,
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
| `academicSession`                                                        | [components.AcademicSession](../../models/components/academicsession.md) | :heavy_check_mark:                                                       | Represents an academic session.                                          |