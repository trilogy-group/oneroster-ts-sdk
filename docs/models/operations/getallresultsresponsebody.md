# GetAllResultsResponseBody

Successful response containing a collection of results

## Example Usage

```typescript
import { GetAllResultsResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetAllResultsResponseBody = {
  results: [
    {
      status: "active",
      lineItem: {
        sourcedId: "<id>",
      },
      student: {
        sourcedId: "<id>",
      },
      scoreStatus: "partially graded",
      scoreDate: new Date("2024-06-21T01:00:20.991Z"),
    },
  ],
  totalCount: 7676.57,
  pageCount: 2592.09,
  pageNumber: 6423.95,
  offset: 4273.38,
  limit: 2267.56,
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