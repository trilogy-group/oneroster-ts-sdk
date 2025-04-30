# GetResultsForClassResponseBody

Successful response containing a collection of results for the class

## Example Usage

```typescript
import { GetResultsForClassResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetResultsForClassResponseBody = {
  results: [
    {
      status: "tobedeleted",
      lineItem: {
        sourcedId: "<id>",
      },
      student: {
        sourcedId: "<id>",
      },
      scoreStatus: "submitted",
      scoreDate: new Date("2023-12-07T02:02:07.681Z"),
    },
  ],
  totalCount: 3927.07,
  pageCount: 3022.78,
  pageNumber: 796.65,
  offset: 3811.7,
  limit: 6072.01,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `results`                                                | [components.Result](../../models/components/result.md)[] | :heavy_check_mark:                                       | N/A                                                      |
| `totalCount`                                             | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `pageCount`                                              | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `pageNumber`                                             | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `offset`                                                 | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `limit`                                                  | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |