# PostLineItemsForClassRequestBody

## Example Usage

```typescript
import { PostLineItemsForClassRequestBody } from "@superbuilders/oneroster/models/operations";

let value: PostLineItemsForClassRequestBody = {
  lineItem: {
    status: "active",
    title: "<value>",
    assignDate: new Date("2025-08-23T11:24:18.860Z"),
    dueDate: new Date("2025-11-25T18:28:26.380Z"),
    class: {
      sourcedId: "<id>",
    },
    school: {
      sourcedId: "<id>",
    },
    category: {
      sourcedId: "<id>",
    },
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `lineItem`                                                 | [components.LineItem](../../models/components/lineitem.md) | :heavy_check_mark:                                         | Represents a line item.                                    |