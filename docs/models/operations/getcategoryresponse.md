# GetCategoryResponse

Successful response with the category

## Example Usage

```typescript
import { GetCategoryResponse } from "@superbuilders/oneroster/models/operations";

let value: GetCategoryResponse = {
  category: {
    status: "active",
    title: "<value>",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `category`                                                 | [components.Category](../../models/components/category.md) | :heavy_check_mark:                                         | Represents a category.                                     |