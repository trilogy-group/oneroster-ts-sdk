# GetClassesForStudentResponseBody

Successful response containing a collection of classes for the student

## Example Usage

```typescript
import { GetClassesForStudentResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetClassesForStudentResponseBody = {
  classes: [
    {
      sourcedId: "<id>",
      status: "active",
      title: "<value>",
      classCode: "<value>",
      classType: "scheduled",
      location: "<value>",
      course: {
        href: "https://intent-plumber.info",
        sourcedId: "<id>",
        type: "<value>",
      },
      school: {
        href: "https://sneaky-marimba.info",
        sourcedId: "<id>",
        type: "<value>",
      },
      terms: [],
    },
  ],
  totalCount: 3673.53,
  pageCount: 555.97,
  pageNumber: 4045.84,
  offset: 9853.76,
  limit: 7524.8,
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