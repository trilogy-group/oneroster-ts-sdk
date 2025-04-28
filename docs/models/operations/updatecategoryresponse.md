# UpdateCategoryResponse

Category successfully updated

## Example Usage

```typescript
import { UpdateCategoryResponse } from "oneroster/models/operations";

let value: UpdateCategoryResponse = {
  category: {
    status: "tobedeleted",
    title: "<value>",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `category`                                                 | [components.Category](../../models/components/category.md) | :heavy_check_mark:                                         | Represents a category.                                     |