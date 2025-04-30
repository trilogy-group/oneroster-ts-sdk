# GetClassesForCourseResponseBody

Collection of Classes for Course

## Example Usage

```typescript
import { GetClassesForCourseResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetClassesForCourseResponseBody = {
  classes: [
    {
      sourcedId: "<id>",
      status: "active",
      title: "<value>",
      classCode: "<value>",
      classType: "scheduled",
      location: "<value>",
      course: {
        href: "https://bouncy-integer.biz/",
        sourcedId: "<id>",
        type: "<value>",
      },
      school: {
        href: "https://brave-creature.com/",
        sourcedId: "<id>",
        type: "<value>",
      },
      terms: [
        {
          href: "https://lost-velocity.com/",
          sourcedId: "<id>",
          type: "<value>",
        },
      ],
    },
  ],
  totalCount: 520.09,
  pageCount: 858.86,
  pageNumber: 4959.72,
  offset: 6200.17,
  limit: 9678.49,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `classes`                                              | [components.Class](../../models/components/class.md)[] | :heavy_check_mark:                                     | N/A                                                    |
| `totalCount`                                           | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `pageCount`                                            | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `pageNumber`                                           | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `offset`                                               | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `limit`                                                | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |