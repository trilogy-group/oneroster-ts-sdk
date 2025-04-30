# GetScoreScalesForClassResponse

## Example Usage

```typescript
import { GetScoreScalesForClassResponse } from "@superbuilders/oneroster/models/operations";

let value: GetScoreScalesForClassResponse = {
  result: {
    scoreScales: [
      {
        status: "active",
        title: "<value>",
        type: "<value>",
        class: {
          sourcedId: "<id>",
        },
        scoreScaleValue: [
          {
            itemValueLHS: "<value>",
            itemValueRHS: "<value>",
          },
        ],
      },
    ],
    totalCount: 4295.49,
    pageCount: 7089.28,
    pageNumber: 2733.12,
    offset: 7678.28,
    limit: 9619.73,
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                       | [operations.GetScoreScalesForClassResponseBody](../../models/operations/getscorescalesforclassresponsebody.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |