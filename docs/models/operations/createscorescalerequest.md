# CreateScoreScaleRequest

## Example Usage

```typescript
import { CreateScoreScaleRequest } from "@superbuilders/oneroster/models/operations";

let value: CreateScoreScaleRequest = {
  scoreScale: {
    status: "tobedeleted",
    title: "<value>",
    type: "<value>",
    class: {
      sourcedId: "<id>",
    },
    scoreScaleValue: [],
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `scoreScale`                                                   | [components.ScoreScale](../../models/components/scorescale.md) | :heavy_check_mark:                                             | Represents a score scale.                                      |