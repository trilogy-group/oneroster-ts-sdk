# ResultLearningObjectiveSet

## Example Usage

```typescript
import { ResultLearningObjectiveSet } from "oneroster/models/components";

let value: ResultLearningObjectiveSet = {
  source: "<value>",
  learningObjectiveIds: [
    {
      learningObjectiveId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `source`                                                                                       | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `learningObjectiveIds`                                                                         | [components.ResultLearningObjectiveId](../../models/components/resultlearningobjectiveid.md)[] | :heavy_check_mark:                                                                             | N/A                                                                                            |