# CreateResultForLineItemRequestBody

## Example Usage

```typescript
import { CreateResultForLineItemRequestBody } from "oneroster/models/operations";

let value: CreateResultForLineItemRequestBody = {
  results: [
    {
      status: "active",
      lineItem: {
        sourcedId: "<id>",
      },
      student: {
        sourcedId: "<id>",
      },
      scoreStatus: "submitted",
      scoreDate: new Date("2023-10-10T12:19:32.671Z"),
    },
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `results`                                                | [components.Result](../../models/components/result.md)[] | :heavy_check_mark:                                       | N/A                                                      |