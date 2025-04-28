# GetCourseComponentResponse

Single Course Component

## Example Usage

```typescript
import { GetCourseComponentResponse } from "oneroster/models/operations";

let value: GetCourseComponentResponse = {
  courseComponent: {
    status: "tobedeleted",
    course: {
      sourcedId: "<id>",
    },
    title: "<value>",
    sortOrder: 1,
    unlockDate: "2021-01-01T00:00:00.000Z",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `courseComponent`                                                                                            | [operations.GetCourseComponentCourseComponent](../../models/operations/getcoursecomponentcoursecomponent.md) | :heavy_check_mark:                                                                                           | Represents a component of a course.                                                                          |