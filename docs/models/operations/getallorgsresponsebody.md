# GetAllOrgsResponseBody

Collection of organizations retrieved successfully

## Example Usage

```typescript
import { GetAllOrgsResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetAllOrgsResponseBody = {
  orgs: [
    {
      sourcedId: "<id>",
      status: "active",
      name: "<value>",
      type: "local",
      identifier: "<value>",
      parent: {
        href: "https://flustered-information.info",
        sourcedId: "<id>",
        type: "<value>",
      },
      children: [
        {
          href: "https://biodegradable-airbus.com/",
          sourcedId: "<id>",
          type: "<value>",
        },
      ],
    },
  ],
  totalCount: 6701.32,
  pageCount: 9547.29,
  pageNumber: 5435.65,
  offset: 6074.22,
  limit: 7741.66,
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