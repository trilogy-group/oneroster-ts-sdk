# GetResultsForStudentForClassRequest

## Example Usage

```typescript
import { GetResultsForStudentForClassRequest } from "oneroster/models/operations";

let value: GetResultsForStudentForClassRequest = {
  classSourcedId: "<id>",
  studentSourcedId: "<id>",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `classSourcedId`             | *string*                     | :heavy_check_mark:           | The sourcedId of the class   |
| `studentSourcedId`           | *string*                     | :heavy_check_mark:           | The sourcedId of the student |