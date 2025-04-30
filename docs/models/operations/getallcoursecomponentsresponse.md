# GetAllCourseComponentsResponse

## Example Usage

```typescript
import { GetAllCourseComponentsResponse } from "@superbuilders/oneroster/models/operations";

let value: GetAllCourseComponentsResponse = {
  result: {
    courseComponents: [
      {
        status: "active",
        course: {
          sourcedId: "<id>",
        },
        title: "<value>",
        sortOrder: 1,
        unlockDate: "2021-01-01T00:00:00.000Z",
      },
    ],
    totalCount: 9351.96,
    pageCount: 4302.84,
    pageNumber: 1856.94,
    offset: 4729.48,
    limit: 5173.11,
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                       | [operations.GetAllCourseComponentsResponseBody](../../models/operations/getallcoursecomponentsresponsebody.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |