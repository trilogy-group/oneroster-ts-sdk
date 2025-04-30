# GetCategoriesForClassResponseBody

Successful response containing a collection of categories for the class

## Example Usage

```typescript
import { GetCategoriesForClassResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetCategoriesForClassResponseBody = {
  categories: [
    {
      status: "tobedeleted",
      title: "<value>",
    },
  ],
  totalCount: 4686.63,
  pageCount: 5631.41,
  pageNumber: 3823.44,
  offset: 8326.38,
  limit: 6086.15,
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