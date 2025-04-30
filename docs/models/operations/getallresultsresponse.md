# GetAllResultsResponse

## Example Usage

```typescript
import { GetAllResultsResponse } from "@superbuilders/oneroster/models/operations";

let value: GetAllResultsResponse = {
  result: {
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
    totalCount: 4050.55,
    pageCount: 4214.4,
    pageNumber: 9850.73,
    offset: 2122.72,
    limit: 9451.07,
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [operations.GetAllResultsResponseBody](../../models/operations/getallresultsresponsebody.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |