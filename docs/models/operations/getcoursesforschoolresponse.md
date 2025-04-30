# GetCoursesForSchoolResponse

## Example Usage

```typescript
import { GetCoursesForSchoolResponse } from "@superbuilders/oneroster/models/operations";

let value: GetCoursesForSchoolResponse = {
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
    totalCount: 2573.49,
    pageCount: 9286.79,
    pageNumber: 7120.96,
    offset: 4295.39,
    limit: 4812.13,
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                 | [operations.GetCoursesForSchoolResponseBody](../../models/operations/getcoursesforschoolresponsebody.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |