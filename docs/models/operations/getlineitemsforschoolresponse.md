# GetLineItemsForSchoolResponse

Successful response containing a collection of line items

## Example Usage

```typescript
import { GetLineItemsForSchoolResponse } from "oneroster/models/operations";

let value: GetLineItemsForSchoolResponse = {
  lineItems: [
    {
      status: "active",
      title: "<value>",
      assignDate: new Date("2023-03-06T04:41:28.306Z"),
      dueDate: new Date("2025-03-04T20:40:12.090Z"),
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
  ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `lineItems`                                                  | [components.LineItem](../../models/components/lineitem.md)[] | :heavy_check_mark:                                           | N/A                                                          |