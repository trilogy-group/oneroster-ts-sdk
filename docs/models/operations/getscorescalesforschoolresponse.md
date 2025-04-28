# GetScoreScalesForSchoolResponse

Successful response containing a collection of score scales

## Example Usage

```typescript
import { GetScoreScalesForSchoolResponse } from "oneroster/models/operations";

let value: GetScoreScalesForSchoolResponse = {
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
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `scoreScales`                                                    | [components.ScoreScale](../../models/components/scorescale.md)[] | :heavy_check_mark:                                               | N/A                                                              |