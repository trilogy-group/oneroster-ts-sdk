# UpdateLineItemRequest

## Example Usage

```typescript
import { UpdateLineItemRequest } from "@superbuilders/oneroster/models/operations";

let value: UpdateLineItemRequest = {
  sourcedId: "<id>",
  requestBody: {
    lineItem: {
      status: "tobedeleted",
      title: "<value>",
      assignDate: new Date("2025-01-14T21:08:50.435Z"),
      dueDate: new Date("2025-12-02T01:45:50.187Z"),
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
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `sourcedId`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | The sourcedId of the line item to update                                                     |
| `requestBody`                                                                                | [operations.UpdateLineItemRequestBody](../../models/operations/updatelineitemrequestbody.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |