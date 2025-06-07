# GetAllOrgsResponseBody

Collection of organizations retrieved successfully

## Example Usage

```typescript
import { GetAllOrgsResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetAllOrgsResponseBody = {
  orgs: [],
  totalCount: 6026.49,
  pageCount: 9351.3,
  pageNumber: 2823.01,
  offset: 4632.51,
  limit: 4980.26,
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