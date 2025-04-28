# Result

Represents a result.

## Example Usage

```typescript
import { Result } from "oneroster/models/components";

let value: Result = {
  status: "tobedeleted",
  lineItem: {
    sourcedId: "<id>",
  },
  student: {
    sourcedId: "<id>",
  },
  scoreStatus: "not submitted",
  scoreDate: new Date("2025-05-16T13:50:43.584Z"),
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `sourcedId`                                                                                      | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `status`                                                                                         | [components.ResultStatus](../../models/components/resultstatus.md)                               | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `dateLastModified`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `metadata`                                                                                       | Record<string, *any*>                                                                            | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `lineItem`                                                                                       | [components.ResultLineItem](../../models/components/resultlineitem.md)                           | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `student`                                                                                        | [components.ResultStudent](../../models/components/resultstudent.md)                             | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `class`                                                                                          | [components.ResultClass](../../models/components/resultclass.md)                                 | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `scoreScale`                                                                                     | [components.ResultScoreScale](../../models/components/resultscorescale.md)                       | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `scoreStatus`                                                                                    | [components.ResultScoreStatus](../../models/components/resultscorestatus.md)                     | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `score`                                                                                          | *number*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `textScore`                                                                                      | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `scoreDate`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `comment`                                                                                        | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `learningObjectiveSet`                                                                           | [components.ResultLearningObjectiveSet](../../models/components/resultlearningobjectiveset.md)[] | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `inProgress`                                                                                     | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `incomplete`                                                                                     | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `late`                                                                                           | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `missing`                                                                                        | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |