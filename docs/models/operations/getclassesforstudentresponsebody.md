# GetClassesForStudentResponseBody

Successful response containing a collection of classes for the student

## Example Usage

```typescript
import { GetClassesForStudentResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetClassesForStudentResponseBody = {
  classes: [
    {
      sourcedId: "<id>",
      status: "tobedeleted",
      title: "<value>",
      classCode: "<value>",
      classType: "homeroom",
      location: "<value>",
      course: {
        href: "https://impressionable-widow.net/",
        sourcedId: "<id>",
        type: "<value>",
      },
      school: {
        href: "https://mysterious-march.info/",
        sourcedId: "<id>",
        type: "<value>",
      },
      terms: [
        {
          href: "https://woeful-outset.org",
          sourcedId: "<id>",
          type: "<value>",
        },
      ],
    },
  ],
  totalCount: 6884.17,
  pageCount: 3.54,
  pageNumber: 3234.88,
  offset: 5133.26,
  limit: 8643.98,
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