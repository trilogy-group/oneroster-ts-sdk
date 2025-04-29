# CreateGradingPeriodForTermRequestBody

## Example Usage

```typescript
import { CreateGradingPeriodForTermRequestBody } from "@superbuilders/oneroster/models/operations";

let value: CreateGradingPeriodForTermRequestBody = {
  academicSession: {
    title: "<value>",
    startDate: "<value>",
    endDate: "<value>",
    schoolYear: "<value>",
    org: {
      sourcedId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `academicSession`                                                                                                            | [operations.CreateGradingPeriodForTermAcademicSession](../../models/operations/creategradingperiodfortermacademicsession.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |