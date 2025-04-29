# CreateLineItemsForSchoolRequest

## Example Usage

```typescript
import { CreateLineItemsForSchoolRequest } from "@superbuilders/oneroster/models/operations";

let value: CreateLineItemsForSchoolRequest = {
  sourcedId: "<id>",
  requestBody: {
    lineItems: [
      {
        status: "active",
        title: "<value>",
        assignDate: new Date("2024-12-01T20:09:14.889Z"),
        dueDate: new Date("2024-08-01T12:10:58.901Z"),
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
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `sourcedId`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The sourcedId of the school                                                                                      |
| `requestBody`                                                                                                    | [operations.CreateLineItemsForSchoolRequestBody](../../models/operations/createlineitemsforschoolrequestbody.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |