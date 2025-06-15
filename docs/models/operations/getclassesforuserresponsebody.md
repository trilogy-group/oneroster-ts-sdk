# GetClassesForUserResponseBody

Successful response containing a collection of classes for the user

## Example Usage

```typescript
import { GetClassesForUserResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetClassesForUserResponseBody = {
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
  totalCount: 1098.11,
  pageCount: 4842.82,
  pageNumber: 4821.59,
  offset: 8524.54,
  limit: 4803.17,
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