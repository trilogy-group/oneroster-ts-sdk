# UpdateScoreScaleResponse

Score scale successfully updated

## Example Usage

```typescript
import { UpdateScoreScaleResponse } from "@superbuilders/oneroster/models/operations";

let value: UpdateScoreScaleResponse = {
  scoreScale: {
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
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `scoreScale`                                                   | [components.ScoreScale](../../models/components/scorescale.md) | :heavy_check_mark:                                             | Represents a score scale.                                      |