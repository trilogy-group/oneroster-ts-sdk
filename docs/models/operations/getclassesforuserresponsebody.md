# GetClassesForUserResponseBody

Successful response containing a collection of classes for the user

## Example Usage

```typescript
import { GetClassesForUserResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetClassesForUserResponseBody = {
  classes: [
    {
      sourcedId: "<id>",
      status: "tobedeleted",
      title: "<value>",
      classCode: "<value>",
      classType: "homeroom",
      location: "<value>",
      course: {
        href: "https://long-term-sticker.info/",
        sourcedId: "<id>",
        type: "<value>",
      },
      school: {
        href: "https://brown-cellar.info/",
        sourcedId: "<id>",
        type: "<value>",
      },
      terms: [
        {
          href: "https://serene-release.org/",
          sourcedId: "<id>",
          type: "<value>",
        },
      ],
    },
  ],
  totalCount: 2378.22,
  pageCount: 806.52,
  pageNumber: 5234.14,
  offset: 2732.1,
  limit: 2077.88,
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