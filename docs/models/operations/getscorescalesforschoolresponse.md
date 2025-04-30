# GetScoreScalesForSchoolResponse

## Example Usage

```typescript
import { GetScoreScalesForSchoolResponse } from "@superbuilders/oneroster/models/operations";

let value: GetScoreScalesForSchoolResponse = {
  result: {
    scoreScales: [
      {
        status: "tobedeleted",
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
    totalCount: 8130.59,
    pageCount: 4239.55,
    pageNumber: 2439.22,
    offset: 5796.24,
    limit: 2638.75,
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                         | [operations.GetScoreScalesForSchoolResponseBody](../../models/operations/getscorescalesforschoolresponsebody.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |