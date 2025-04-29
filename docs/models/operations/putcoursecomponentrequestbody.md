# PutCourseComponentRequestBody

## Example Usage

```typescript
import { PutCourseComponentRequestBody } from "@superbuilders/oneroster/models/operations";

let value: PutCourseComponentRequestBody = {
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

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `courseComponent`                                                                                              | [operations.PutCourseComponentCourseComponent1](../../models/operations/putcoursecomponentcoursecomponent1.md) | :heavy_check_mark:                                                                                             | Represents a component of a course.                                                                            |