# LineItem

Represents a line item.

## Example Usage

```typescript
import { LineItem } from "@superbuilders/oneroster/models/components";

let value: LineItem = {
  status: "active",
  title: "<value>",
  assignDate: new Date("2025-11-30T15:55:48.022Z"),
  dueDate: new Date("2024-10-09T02:10:46.282Z"),
  class: {
    sourcedId: "<id>",
  },
  school: {
    sourcedId: "<id>",
  },
  category: {
    sourcedId: "<id>",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `sourcedId`                                                                                          | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `status`                                                                                             | [components.LineItemStatus](../../models/components/lineitemstatus.md)                               | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `dateLastModified`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `metadata`                                                                                           | Record<string, *any*>                                                                                | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `title`                                                                                              | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `description`                                                                                        | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `assignDate`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `dueDate`                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `class`                                                                                              | [components.LineItemClass](../../models/components/lineitemclass.md)                                 | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `school`                                                                                             | [components.LineItemSchool](../../models/components/lineitemschool.md)                               | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `category`                                                                                           | [components.LineItemCategory](../../models/components/lineitemcategory.md)                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `gradingPeriod`                                                                                      | [components.GradingPeriod](../../models/components/gradingperiod.md)                                 | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `academicSession`                                                                                    | [components.LineItemAcademicSession](../../models/components/lineitemacademicsession.md)             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `scoreScale`                                                                                         | [components.LineItemScoreScale](../../models/components/lineitemscorescale.md)                       | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `resultValueMin`                                                                                     | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `resultValueMax`                                                                                     | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `learningObjectiveSet`                                                                               | [components.LineItemLearningObjectiveSet](../../models/components/lineitemlearningobjectiveset.md)[] | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |