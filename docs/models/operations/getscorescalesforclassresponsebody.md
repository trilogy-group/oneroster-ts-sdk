# GetScoreScalesForClassResponseBody

Successful response containing a collection of score scales for the class

## Example Usage

```typescript
import { GetScoreScalesForClassResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetScoreScalesForClassResponseBody = {
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
  totalCount: 3529.82,
  pageCount: 2967.86,
  pageNumber: 1992.42,
  offset: 3619.38,
  limit: 3846.36,
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