# GetCourseResponse

Single Course

## Example Usage

```typescript
import { GetCourseResponse } from "@superbuilders/oneroster/models/operations";

let value: GetCourseResponse = {
  course: {
    status: "tobedeleted",
    title: "<value>",
    org: {
      sourcedId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `course`                                                                 | [operations.GetCourseCourse](../../models/operations/getcoursecourse.md) | :heavy_check_mark:                                                       | Represents a course.                                                     |