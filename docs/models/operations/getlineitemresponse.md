# GetLineItemResponse

Successful response with the line item

## Example Usage

```typescript
import { GetLineItemResponse } from "oneroster/models/operations";

let value: GetLineItemResponse = {
  lineItem: {
    status: "active",
    title: "<value>",
    assignDate: new Date("2024-11-06T10:38:08.819Z"),
    dueDate: new Date("2025-09-03T22:30:18.963Z"),
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