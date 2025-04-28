# LearningObjectiveSet

## Example Usage

```typescript
import { LearningObjectiveSet } from "oneroster/models/components";

let value: LearningObjectiveSet = {
  source: "<value>",
  learningObjectiveIds: [
    {
      learningObjectiveId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `source`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `learningObjectiveIds`                                                                                                     | [components.LearningObjectiveSetLearningObjectiveId](../../models/components/learningobjectivesetlearningobjectiveid.md)[] | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |