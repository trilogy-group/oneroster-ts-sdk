# AcademicSession

Represents an academic session.

## Example Usage

```typescript
import { AcademicSession } from "oneroster/models/components";

let value: AcademicSession = {
  sourcedId: "<id>",
  status: "active",
  title: "<value>",
  startDate: "<value>",
  endDate: "<value>",
  type: "term",
  schoolYear: 840.71,
  org: {
    href: "https://wrathful-birdcage.net/",
    sourcedId: "<id>",
    type: "org",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `sourcedId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [components.AcademicSessionStatus](../../models/components/academicsessionstatus.md)          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `dateLastModified`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `title`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `startDate`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `endDate`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `type`                                                                                        | [components.AcademicSessionType](../../models/components/academicsessiontype.md)              | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `parent`                                                                                      | [components.AcademicSessionParent](../../models/components/academicsessionparent.md)          | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `schoolYear`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `org`                                                                                         | [components.AcademicSessionOrg](../../models/components/academicsessionorg.md)                | :heavy_check_mark:                                                                            | N/A                                                                                           |