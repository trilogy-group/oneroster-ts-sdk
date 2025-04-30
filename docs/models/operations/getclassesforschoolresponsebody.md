# GetClassesForSchoolResponseBody

Collection of classes successfully retrieved

## Example Usage

```typescript
import { GetClassesForSchoolResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetClassesForSchoolResponseBody = {
  classes: [
    {
      sourcedId: "<id>",
      status: "active",
      title: "<value>",
      classCode: "<value>",
      classType: "homeroom",
      location: "<value>",
      course: {
        href: "https://awful-handover.biz",
        sourcedId: "<id>",
        type: "<value>",
      },
      school: {
        href: "https://far-off-commodity.biz/",
        sourcedId: "<id>",
        type: "<value>",
      },
      terms: [
        {
          href: "https://rusty-following.biz",
          sourcedId: "<id>",
          type: "<value>",
        },
      ],
    },
  ],
  totalCount: 5285.59,
  pageCount: 8930.35,
  pageNumber: 4681.82,
  offset: 3701.22,
  limit: 6729.1,
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