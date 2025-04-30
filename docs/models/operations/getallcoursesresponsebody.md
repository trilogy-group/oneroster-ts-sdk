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
  totalCount: 6386.94,
  pageCount: 1641.88,
  pageNumber: 8511.84,
  offset: 4403.76,
  limit: 5968.85,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `courses`                                                                          | [operations.GetAllCoursesCourse](../../models/operations/getallcoursescourse.md)[] | :heavy_check_mark:                                                                 | N/A                                                                                |
| `totalCount`                                                                       | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `pageCount`                                                                        | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `pageNumber`                                                                       | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `offset`                                                                           | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `limit`                                                                            | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |