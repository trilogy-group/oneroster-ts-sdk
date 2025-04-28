# GetAllCoursesCourse

Represents a course.

## Example Usage

```typescript
import { GetAllCoursesCourse } from "oneroster/models/operations";

let value: GetAllCoursesCourse = {
  status: "tobedeleted",
  title: "<value>",
  org: {
    sourcedId: "<id>",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `sourcedId`                                                                                        | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `status`                                                                                           | [operations.GetAllCoursesStatus](../../models/operations/getallcoursesstatus.md)                   | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `dateLastModified`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `metadata`                                                                                         | Record<string, *any*>                                                                              | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `title`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `academicSession`                                                                                  | [operations.GetAllCoursesAcademicSession](../../models/operations/getallcoursesacademicsession.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `courseCode`                                                                                       | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `grades`                                                                                           | *string*[]                                                                                         | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `subjects`                                                                                         | *string*[]                                                                                         | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `subjectCodes`                                                                                     | *string*[]                                                                                         | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `org`                                                                                              | [operations.GetAllCoursesOrg](../../models/operations/getallcoursesorg.md)                         | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `level`                                                                                            | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `gradingScheme`                                                                                    | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |