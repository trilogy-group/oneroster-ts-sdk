# CreateResultForLineItemRequest

## Example Usage

```typescript
import { CreateResultForLineItemRequest } from "oneroster/models/operations";

let value: CreateResultForLineItemRequest = {
  sourcedId: "<id>",
  requestBody: {
    results: [
      {
        status: "active",
        lineItem: {
          sourcedId: "<id>",
        },
        student: {
          sourcedId: "<id>",
        },
        scoreStatus: "exempt",
        scoreDate: new Date("2025-06-12T18:24:25.853Z"),
      },
    ],
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `sourcedId`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The sourcedId of the line item                                                                                 |
| `requestBody`                                                                                                  | [operations.CreateResultForLineItemRequestBody](../../models/operations/createresultforlineitemrequestbody.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |