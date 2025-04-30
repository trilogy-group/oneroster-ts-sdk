# GetAllScoreScalesResponseBody

Successful response containing a collection of score scales

## Example Usage

```typescript
import { GetAllScoreScalesResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetAllScoreScalesResponseBody = {
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
  totalCount: 9305.18,
  pageCount: 7507.61,
  pageNumber: 225.99,
  offset: 2588.58,
  limit: 673.87,
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