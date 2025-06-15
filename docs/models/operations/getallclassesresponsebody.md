# GetAllClassesResponseBody

Successful response with a list of classes

## Example Usage

```typescript
import { GetAllClassesResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetAllClassesResponseBody = {
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
  totalCount: 9100.63,
  pageCount: 6265.26,
  pageNumber: 2881.04,
  offset: 265.7,
  limit: 7693.7,
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