# GetLineItemResponse

Successful response with the line item

## Example Usage

```typescript
import { GetLineItemResponse } from "@superbuilders/oneroster/models/operations";

let value: GetLineItemResponse = {
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