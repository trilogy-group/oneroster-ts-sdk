# CreateCourseComponentRequest

## Example Usage

```typescript
import { CreateCourseComponentRequest } from "oneroster/models/operations";

let value: CreateCourseComponentRequest = {
  courseComponent: {
    status: "active",
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

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `courseComponent`                                                                                                    | [operations.CreateCourseComponentCourseComponent1](../../models/operations/createcoursecomponentcoursecomponent1.md) | :heavy_check_mark:                                                                                                   | Represents a component of a course.                                                                                  |