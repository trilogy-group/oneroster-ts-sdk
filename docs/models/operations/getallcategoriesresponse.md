# GetAllCategoriesResponse

Successful response containing a collection of categories

## Example Usage

```typescript
import { GetAllCategoriesResponse } from "oneroster/models/operations";

let value: GetAllCategoriesResponse = {
  categories: [
    {
      status: "tobedeleted",
      title: "<value>",
    },
  ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `categories`                                                 | [components.Category](../../models/components/category.md)[] | :heavy_check_mark:                                           | N/A                                                          |