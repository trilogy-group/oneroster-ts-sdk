# GetAllCategoriesResponseBody

Successful response containing a collection of categories

## Example Usage

```typescript
import { GetAllCategoriesResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetAllCategoriesResponseBody = {
  categories: [
    {
      status: "active",
      title: "<value>",
    },
  ],
  totalCount: 4480.26,
  pageCount: 335.09,
  pageNumber: 5859.99,
  offset: 3666.71,
  limit: 9312.28,
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