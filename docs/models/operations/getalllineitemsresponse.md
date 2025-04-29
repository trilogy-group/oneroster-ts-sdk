# GetAllLineItemsResponse

Successful response containing a collection of line items

## Example Usage

```typescript
import { GetAllLineItemsResponse } from "@superbuilders/oneroster/models/operations";

let value: GetAllLineItemsResponse = {
  lineItems: [
    {
      status: "active",
      title: "<value>",
      assignDate: new Date("2024-04-18T09:54:17.672Z"),
      dueDate: new Date("2023-10-07T12:25:36.596Z"),
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