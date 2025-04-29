# GetAllResultsResponse

Successful response containing a collection of results

## Example Usage

```typescript
import { GetAllResultsResponse } from "@superbuilders/oneroster/models/operations";

let value: GetAllResultsResponse = {
  results: [
    {
      status: "tobedeleted",
      lineItem: {
        sourcedId: "<id>",
      },
      student: {
        sourcedId: "<id>",
      },
      scoreStatus: "not submitted",
      scoreDate: new Date("2023-07-10T05:33:56.746Z"),
    },
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `results`                                                | [components.Result](../../models/components/result.md)[] | :heavy_check_mark:                                       | N/A                                                      |