# GetAllCoursesResponseBody

Collection of Courses

## Example Usage

```typescript
import { GetAllCoursesResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetAllCoursesResponseBody = {
  courses: [
    {
      status: "tobedeleted",
      title: "<value>",
      org: {
        sourcedId: "<id>",
      },
    },
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `courses`                                                                          | [operations.GetAllCoursesCourse](../../models/operations/getallcoursescourse.md)[] | :heavy_check_mark:                                                                 | N/A                                                                                |