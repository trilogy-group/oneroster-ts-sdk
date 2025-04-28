# CreateLineItemRequest

## Example Usage

```typescript
import { CreateLineItemRequest } from "oneroster/models/operations";

let value: CreateLineItemRequest = {
  lineItem: {
    status: "active",
    title: "<value>",
    assignDate: new Date("2023-07-28T04:26:11.874Z"),
    dueDate: new Date("2024-12-05T08:59:50.487Z"),
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