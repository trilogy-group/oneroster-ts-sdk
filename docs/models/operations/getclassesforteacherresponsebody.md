# GetClassesForTeacherResponseBody

Successful response containing a collection of classes for the teacher

## Example Usage

```typescript
import { GetClassesForTeacherResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetClassesForTeacherResponseBody = {
  classes: [
    {
      sourcedId: "<id>",
      status: "active",
      title: "<value>",
      classCode: "<value>",
      classType: "scheduled",
      location: "<value>",
      course: {
        href: "https://immaculate-colonialism.net",
        sourcedId: "<id>",
        type: "<value>",
      },
      school: {
        href: "https://short-analogy.biz",
        sourcedId: "<id>",
        type: "<value>",
      },
      terms: [
        {
          href: "https://all-hexagon.org/",
          sourcedId: "<id>",
          type: "<value>",
        },
      ],
    },
  ],
  totalCount: 212.49,
  pageCount: 2642.33,
  pageNumber: 7055.17,
  offset: 9390.72,
  limit: 2264.4,
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