# GetAllClassesResponseBody

Successful response with a list of classes

## Example Usage

```typescript
import { GetAllClassesResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetAllClassesResponseBody = {
  classes: [
    {
      sourcedId: "<id>",
      status: "tobedeleted",
      title: "<value>",
      classCode: "<value>",
      classType: "homeroom",
      location: "<value>",
      course: {
        href: "https://oblong-lox.info",
        sourcedId: "<id>",
        type: "<value>",
      },
      school: {
        href: "https://intent-plumber.info",
        sourcedId: "<id>",
        type: "<value>",
      },
      terms: [
        {
          href: "https://vivid-rosemary.name/",
          sourcedId: "<id>",
          type: "<value>",
        },
      ],
    },
  ],
  totalCount: 3719.47,
  pageCount: 2506.43,
  pageNumber: 9100.63,
  offset: 6265.26,
  limit: 2881.04,
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