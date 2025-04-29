# UpdateGradingPeriodRequestBody

## Example Usage

```typescript
import { UpdateGradingPeriodRequestBody } from "@superbuilders/oneroster/models/operations";

let value: UpdateGradingPeriodRequestBody = {
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
| `academicSession`                                                                                              | [operations.UpdateGradingPeriodAcademicSession](../../models/operations/updategradingperiodacademicsession.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |