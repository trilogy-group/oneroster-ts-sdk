# GetScoreScalesForClassResponse

Successful response containing a collection of score scales for the class

## Example Usage

```typescript
import { GetScoreScalesForClassResponse } from "oneroster/models/operations";

let value: GetScoreScalesForClassResponse = {
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
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `scoreScales`                                                    | [components.ScoreScale](../../models/components/scorescale.md)[] | :heavy_check_mark:                                               | N/A                                                              |