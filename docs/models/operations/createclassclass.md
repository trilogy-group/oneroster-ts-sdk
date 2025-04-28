# CreateClassClass

## Example Usage

```typescript
import { CreateClassClass } from "oneroster/models/operations";

let value: CreateClassClass = {
  title: "<value>",
  course: {
    sourcedId: "<id>",
  },
  org: {
    sourcedId: "<id>",
  },
  terms: [
    {
      sourcedId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `sourcedId`                                                                        | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `status`                                                                           | [operations.CreateClassStatus](../../models/operations/createclassstatus.md)       | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `metadata`                                                                         | Record<string, *any*>                                                              | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `title`                                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `classCode`                                                                        | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `classType`                                                                        | [operations.CreateClassClassType](../../models/operations/createclassclasstype.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `location`                                                                         | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `grades`                                                                           | *string*[]                                                                         | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `subjects`                                                                         | *string*[]                                                                         | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `course`                                                                           | [operations.CreateClassCourse](../../models/operations/createclasscourse.md)       | :heavy_check_mark:                                                                 | N/A                                                                                |
| `org`                                                                              | [operations.CreateClassOrg](../../models/operations/createclassorg.md)             | :heavy_check_mark:                                                                 | N/A                                                                                |
| `subjectCodes`                                                                     | *string*[]                                                                         | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `periods`                                                                          | *string*[]                                                                         | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `resources`                                                                        | [operations.CreateClassResource](../../models/operations/createclassresource.md)[] | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `terms`                                                                            | [operations.CreateClassTerm](../../models/operations/createclassterm.md)[]         | :heavy_check_mark:                                                                 | N/A                                                                                |