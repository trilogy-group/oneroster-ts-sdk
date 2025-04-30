# GetAllCoursesResponse

## Example Usage

```typescript
import { GetAllCoursesResponse } from "@superbuilders/oneroster/models/operations";

let value: GetAllCoursesResponse = {
  result: {
    courses: [
      {
        status: "active",
        title: "<value>",
        org: {
          sourcedId: "<id>",
        },
      },
    ],
    totalCount: 7164.01,
    pageCount: 6457.62,
    pageNumber: 4485.32,
    offset: 2674.56,
    limit: 2992.94,
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [operations.GetAllCoursesResponseBody](../../models/operations/getallcoursesresponsebody.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |