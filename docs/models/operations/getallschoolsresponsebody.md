# GetAllSchoolsResponseBody

Collection of schools successfully retrieved

## Example Usage

```typescript
import { GetAllSchoolsResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetAllSchoolsResponseBody = {
  orgs: [
    {
      sourcedId: "<id>",
      status: "active",
      name: "<value>",
      type: "department",
      identifier: "<value>",
      parent: {
        href: "https://afraid-chops.info",
        sourcedId: "<id>",
        type: "<value>",
      },
      children: [],
    },
  ],
  totalCount: 4749.77,
  pageCount: 2952.78,
  pageNumber: 5158.87,
  offset: 8241.93,
  limit: 6203.91,
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