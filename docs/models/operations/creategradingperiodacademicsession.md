# CreateGradingPeriodAcademicSession

## Example Usage

```typescript
import { CreateGradingPeriodAcademicSession } from "@superbuilders/oneroster/models/operations";

let value: CreateGradingPeriodAcademicSession = {
  title: "<value>",
  startDate: "<value>",
  endDate: "<value>",
  schoolYear: "<value>",
  org: {
    sourcedId: "<id>",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `sourcedId`                                                                                  | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `status`                                                                                     | [operations.CreateGradingPeriodStatus](../../models/operations/creategradingperiodstatus.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `metadata`                                                                                   | Record<string, *any*>                                                                        | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `title`                                                                                      | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `startDate`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `endDate`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `type`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `parent`                                                                                     | [operations.CreateGradingPeriodParent](../../models/operations/creategradingperiodparent.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `schoolYear`                                                                                 | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `org`                                                                                        | [operations.CreateGradingPeriodOrg](../../models/operations/creategradingperiodorg.md)       | :heavy_check_mark:                                                                           | N/A                                                                                          |