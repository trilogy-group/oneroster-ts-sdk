# CreateGradingPeriodRequest

## Example Usage

```typescript
import { CreateGradingPeriodRequest } from "@superbuilders/oneroster/models/operations";

let value: CreateGradingPeriodRequest = {
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

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `academicSession`                                                                                              | [operations.CreateGradingPeriodAcademicSession](../../models/operations/creategradingperiodacademicsession.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |