# GetClassesForTeacherResponseBody

Successful response containing a collection of classes for the teacher

## Example Usage

```typescript
import { GetClassesForTeacherResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetClassesForTeacherResponseBody = {
  classes: [],
  totalCount: 5952.18,
  pageCount: 7389.03,
  pageNumber: 3933.6,
  offset: 1680.19,
  limit: 8163.77,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `classes`                                              | [components.Class](../../models/components/class.md)[] | :heavy_check_mark:                                     | N/A                                                    |
| `totalCount`                                           | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `pageCount`                                            | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `pageNumber`                                           | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `offset`                                               | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `limit`                                                | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |