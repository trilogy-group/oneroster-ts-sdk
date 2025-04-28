# GetAllCourseComponentsResponseBody

Collection of Course Components

## Example Usage

```typescript
import { GetAllCourseComponentsResponseBody } from "oneroster/models/operations";

let value: GetAllCourseComponentsResponseBody = {
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
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `courseComponents`                                                                                                     | [operations.GetAllCourseComponentsCourseComponent](../../models/operations/getallcoursecomponentscoursecomponent.md)[] | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |