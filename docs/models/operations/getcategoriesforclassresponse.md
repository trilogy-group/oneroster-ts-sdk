# GetCategoriesForClassResponse

Successful response containing a collection of categories for the class

## Example Usage

```typescript
import { GetCategoriesForClassResponse } from "oneroster/models/operations";

let value: GetCategoriesForClassResponse = {
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