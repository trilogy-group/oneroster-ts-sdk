# GetScoreScalesForSchoolResponseBody

Successful response containing a collection of score scales

## Example Usage

```typescript
import { GetScoreScalesForSchoolResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetScoreScalesForSchoolResponseBody = {
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
  totalCount: 6321.22,
  pageCount: 8740.71,
  pageNumber: 1224.22,
  offset: 4618.13,
  limit: 8224.67,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `scoreScales`                                                    | [components.ScoreScale](../../models/components/scorescale.md)[] | :heavy_check_mark:                                               | N/A                                                              |
| `totalCount`                                                     | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `pageCount`                                                      | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `pageNumber`                                                     | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `offset`                                                         | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `limit`                                                          | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |