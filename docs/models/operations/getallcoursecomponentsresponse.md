# GetAllCourseComponentsResponse

## Example Usage

```typescript
import { GetAllCourseComponentsResponse } from "oneroster/models/operations";

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
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                       | [operations.GetAllCourseComponentsResponseBody](../../models/operations/getallcoursecomponentsresponsebody.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |