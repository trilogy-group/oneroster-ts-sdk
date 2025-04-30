# GetClassesForTermResponseBody

Successful response containing a collection of classes for the term

## Example Usage

```typescript
import { GetClassesForTermResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetClassesForTermResponseBody = {
  classes: [
    {
      sourcedId: "<id>",
      status: "tobedeleted",
      title: "<value>",
      classCode: "<value>",
      classType: "homeroom",
      location: "<value>",
      course: {
        href: "https://humble-importance.org/",
        sourcedId: "<id>",
        type: "<value>",
      },
      school: {
        href: "https://tall-essence.biz",
        sourcedId: "<id>",
        type: "<value>",
      },
      terms: [
        {
          href: "https://known-unique.name",
          sourcedId: "<id>",
          type: "<value>",
        },
      ],
    },
  ],
  totalCount: 3484.6,
  pageCount: 8822.77,
  pageNumber: 1595.67,
  offset: 4540.69,
  limit: 3620.22,
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