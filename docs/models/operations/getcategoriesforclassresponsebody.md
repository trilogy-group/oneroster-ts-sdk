# GetCategoriesForClassResponseBody

Successful response containing a collection of categories for the class

## Example Usage

```typescript
import { GetCategoriesForClassResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetCategoriesForClassResponseBody = {
  categories: [
    {
      status: "active",
      title: "<value>",
    },
  ],
  totalCount: 5631.41,
  pageCount: 3823.44,
  pageNumber: 8326.38,
  offset: 6086.15,
  limit: 5545.22,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `categories`                                                 | [components.Category](../../models/components/category.md)[] | :heavy_check_mark:                                           | N/A                                                          |
| `totalCount`                                                 | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `pageCount`                                                  | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `pageNumber`                                                 | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `offset`                                                     | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `limit`                                                      | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |