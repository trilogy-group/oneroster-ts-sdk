# PostAcademicSessionAcademicSession

## Example Usage

```typescript
import { PostAcademicSessionAcademicSession } from "@superbuilders/oneroster/models/operations";

let value: PostAcademicSessionAcademicSession = {
  title: "<value>",
  startDate: "<value>",
  endDate: "<value>",
  type: "semester",
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
| `status`                                                                                     | [operations.PostAcademicSessionStatus](../../models/operations/postacademicsessionstatus.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `metadata`                                                                                   | Record<string, *any*>                                                                        | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `title`                                                                                      | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `startDate`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `endDate`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `type`                                                                                       | [operations.PostAcademicSessionType](../../models/operations/postacademicsessiontype.md)     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `parent`                                                                                     | [operations.PostAcademicSessionParent](../../models/operations/postacademicsessionparent.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `schoolYear`                                                                                 | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `org`                                                                                        | [operations.PostAcademicSessionOrg](../../models/operations/postacademicsessionorg.md)       | :heavy_check_mark:                                                                           | N/A                                                                                          |