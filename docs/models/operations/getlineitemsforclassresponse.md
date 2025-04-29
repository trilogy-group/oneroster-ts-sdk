# GetLineItemsForClassResponse

Successful response containing a collection of line items for the class

## Example Usage

```typescript
import { GetLineItemsForClassResponse } from "@superbuilders/oneroster/models/operations";

let value: GetLineItemsForClassResponse = {
  lineItems: [
    {
      status: "tobedeleted",
      title: "<value>",
      assignDate: new Date("2024-08-26T02:39:53.820Z"),
      dueDate: new Date("2024-02-21T00:41:21.309Z"),
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