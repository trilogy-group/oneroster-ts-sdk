# GetClassesForTermResponseBody

Successful response containing a collection of classes for the term

## Example Usage

```typescript
import { GetClassesForTermResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetClassesForTermResponseBody = {
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
  totalCount: 3580.87,
  pageCount: 3879.8,
  pageNumber: 3771.73,
  offset: 4576.07,
  limit: 9710.32,
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