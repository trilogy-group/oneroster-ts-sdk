# GetAllSchoolsResponseBody

Collection of schools successfully retrieved

## Example Usage

```typescript
import { GetAllSchoolsResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetAllSchoolsResponseBody = {
  orgs: [
    {
      sourcedId: "<id>",
      status: "tobedeleted",
      name: "<value>",
      type: "school",
      identifier: "<value>",
      parent: {
        href: "https://tidy-management.com/",
        sourcedId: "<id>",
        type: "<value>",
      },
      children: [
        {
          href: "https://innocent-bakeware.info/",
          sourcedId: "<id>",
          type: "<value>",
        },
      ],
    },
  ],
  totalCount: 2952.78,
  pageCount: 5158.87,
  pageNumber: 8241.93,
  offset: 6203.91,
  limit: 7344.62,
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `orgs`                                             | [components.Org](../../models/components/org.md)[] | :heavy_check_mark:                                 | N/A                                                |
| `totalCount`                                       | *number*                                           | :heavy_check_mark:                                 | N/A                                                |
| `pageCount`                                        | *number*                                           | :heavy_check_mark:                                 | N/A                                                |
| `pageNumber`                                       | *number*                                           | :heavy_check_mark:                                 | N/A                                                |
| `offset`                                           | *number*                                           | :heavy_check_mark:                                 | N/A                                                |
| `limit`                                            | *number*                                           | :heavy_check_mark:                                 | N/A                                                |