# CreateCourseRequest

## Example Usage

```typescript
import { CreateCourseRequest } from "@superbuilders/oneroster/models/operations";

let value: CreateCourseRequest = {
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

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `course`                                                                       | [operations.CreateCourseCourse](../../models/operations/createcoursecourse.md) | :heavy_check_mark:                                                             | Represents a course.                                                           |