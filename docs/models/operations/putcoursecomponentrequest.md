# PutCourseComponentRequest

## Example Usage

```typescript
import { PutCourseComponentRequest } from "oneroster/models/operations";

let value: PutCourseComponentRequest = {
  sourcedId: "<id>",
  requestBody: {
    courseComponent: {
      status: "tobedeleted",
      course: {
        sourcedId: "<id>",
      },
      title: "<value>",
      sortOrder: 1,
      unlockDate: "2021-01-01T00:00:00.000Z",
    },
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `sourcedId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | The sourcedId of the course component to update                                                      |
| `requestBody`                                                                                        | [operations.PutCourseComponentRequestBody](../../models/operations/putcoursecomponentrequestbody.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |