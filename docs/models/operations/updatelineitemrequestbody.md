# UpdateLineItemRequestBody

## Example Usage

```typescript
import { UpdateLineItemRequestBody } from "oneroster/models/operations";

let value: UpdateLineItemRequestBody = {
  lineItem: {
    status: "tobedeleted",
    title: "<value>",
    assignDate: new Date("2025-06-07T04:03:25.674Z"),
    dueDate: new Date("2025-11-09T02:43:11.854Z"),
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