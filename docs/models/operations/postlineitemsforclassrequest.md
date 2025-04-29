# PostLineItemsForClassRequest

## Example Usage

```typescript
import { PostLineItemsForClassRequest } from "@superbuilders/oneroster/models/operations";

let value: PostLineItemsForClassRequest = {
  classSourcedId: "<id>",
  requestBody: {
    lineItem: {
      status: "active",
      title: "<value>",
      assignDate: new Date("2025-06-02T08:43:40.207Z"),
      dueDate: new Date("2023-06-03T10:32:04.965Z"),
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

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `classSourcedId`                                                                                           | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The sourcedId of the class                                                                                 |
| `requestBody`                                                                                              | [operations.PostLineItemsForClassRequestBody](../../models/operations/postlineitemsforclassrequestbody.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |