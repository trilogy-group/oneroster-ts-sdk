# Class

Represents a class.

## Example Usage

```typescript
import { Class } from "@superbuilders/oneroster/models/components";

let value: Class = {
  sourcedId: "<id>",
  status: "active",
  title: "<value>",
  classCode: "<value>",
  classType: "homeroom",
  location: "<value>",
  course: {
    href: "https://intent-plumber.info",
    sourcedId: "<id>",
    type: "<value>",
  },
  school: {
    href: "https://sneaky-marimba.info",
    sourcedId: "<id>",
    type: "<value>",
  },
  terms: [],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `sourcedId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [components.ClassStatus](../../models/components/classstatus.md)                              | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `dateLastModified`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `title`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `classCode`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `classType`                                                                                   | [components.ClassType](../../models/components/classtype.md)                                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `location`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `grades`                                                                                      | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `subjects`                                                                                    | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `course`                                                                                      | [components.ClassCourse](../../models/components/classcourse.md)                              | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `school`                                                                                      | [components.ClassSchool](../../models/components/classschool.md)                              | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `terms`                                                                                       | [components.Term](../../models/components/term.md)[]                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `subjectCodes`                                                                                | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `periods`                                                                                     | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `resources`                                                                                   | [components.ClassResource](../../models/components/classresource.md)[]                        | :heavy_minus_sign:                                                                            | N/A                                                                                           |