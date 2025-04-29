# PutCourseRequestBody

## Example Usage

```typescript
import { PutCourseRequestBody } from "@superbuilders/oneroster/models/operations";

let value: PutCourseRequestBody = {
  course: {
    status: "active",
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
| `course`                                                                 | [operations.PutCourseCourse](../../models/operations/putcoursecourse.md) | :heavy_check_mark:                                                       | Represents a course.                                                     |