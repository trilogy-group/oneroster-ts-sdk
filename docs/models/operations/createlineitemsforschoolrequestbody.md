# CreateLineItemsForSchoolRequestBody

## Example Usage

```typescript
import { CreateLineItemsForSchoolRequestBody } from "@superbuilders/oneroster/models/operations";

let value: CreateLineItemsForSchoolRequestBody = {
  lineItems: [
    {
      status: "active",
      title: "<value>",
      assignDate: new Date("2025-03-18T07:01:38.268Z"),
      dueDate: new Date("2025-03-17T00:21:50.234Z"),
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