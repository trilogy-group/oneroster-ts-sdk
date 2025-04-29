# CreateCourseCourse

Represents a course.

## Example Usage

```typescript
import { CreateCourseCourse } from "@superbuilders/oneroster/models/operations";

let value: CreateCourseCourse = {
  status: "tobedeleted",
  title: "<value>",
  org: {
    sourcedId: "<id>",
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `sourcedId`                                                                                      | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `status`                                                                                         | [operations.CreateCourseStatus](../../models/operations/createcoursestatus.md)                   | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `dateLastModified`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `metadata`                                                                                       | Record<string, *any*>                                                                            | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `title`                                                                                          | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `academicSession`                                                                                | [operations.CreateCourseAcademicSession](../../models/operations/createcourseacademicsession.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `courseCode`                                                                                     | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `grades`                                                                                         | *string*[]                                                                                       | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `subjects`                                                                                       | *string*[]                                                                                       | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `subjectCodes`                                                                                   | *string*[]                                                                                       | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `org`                                                                                            | [operations.CreateCourseOrg](../../models/operations/createcourseorg.md)                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `level`                                                                                          | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `gradingScheme`                                                                                  | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |