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
  totalCount: 1641.88,
  pageCount: 8511.84,
  pageNumber: 4403.76,
  offset: 5968.85,
  limit: 512.98,
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