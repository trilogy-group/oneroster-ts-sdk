# CreateGradingPeriodForTermAcademicSession

## Example Usage

```typescript
import { CreateGradingPeriodForTermAcademicSession } from "@superbuilders/oneroster/models/operations";

let value: CreateGradingPeriodForTermAcademicSession = {
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

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `sourcedId`                                                                                                | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `status`                                                                                                   | [operations.CreateGradingPeriodForTermStatus](../../models/operations/creategradingperiodfortermstatus.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `metadata`                                                                                                 | Record<string, *any*>                                                                                      | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `title`                                                                                                    | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `startDate`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `endDate`                                                                                                  | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `type`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `parent`                                                                                                   | [operations.CreateGradingPeriodForTermParent](../../models/operations/creategradingperiodfortermparent.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `schoolYear`                                                                                               | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `org`                                                                                                      | [operations.CreateGradingPeriodForTermOrg](../../models/operations/creategradingperiodfortermorg.md)       | :heavy_check_mark:                                                                                         | N/A                                                                                                        |