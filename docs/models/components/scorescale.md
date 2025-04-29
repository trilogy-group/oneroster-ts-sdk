# ScoreScale

Represents a score scale.

## Example Usage

```typescript
import { ScoreScale } from "@superbuilders/oneroster/models/components";

let value: ScoreScale = {
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
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `sourcedId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [components.ScoreScaleStatus](../../models/components/scorescalestatus.md)                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `dateLastModified`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `title`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `class`                                                                                       | [components.ScoreScaleClass](../../models/components/scorescaleclass.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `course`                                                                                      | [components.ScoreScaleCourse](../../models/components/scorescalecourse.md)                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `scoreScaleValue`                                                                             | [components.ScoreScaleValue](../../models/components/scorescalevalue.md)[]                    | :heavy_check_mark:                                                                            | N/A                                                                                           |