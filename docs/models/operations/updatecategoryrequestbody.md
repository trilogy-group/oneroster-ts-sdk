# UpdateCategoryRequestBody

## Example Usage

```typescript
import { UpdateCategoryRequestBody } from "@superbuilders/oneroster/models/operations";

let value: UpdateCategoryRequestBody = {
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