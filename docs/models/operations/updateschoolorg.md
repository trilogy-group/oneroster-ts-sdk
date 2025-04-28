# UpdateSchoolOrg

## Example Usage

```typescript
import { UpdateSchoolOrg } from "oneroster/models/operations";

let value: UpdateSchoolOrg = {
  name: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `sourcedId`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `status`                                                                       | [operations.UpdateSchoolStatus](../../models/operations/updateschoolstatus.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `metadata`                                                                     | Record<string, *any*>                                                          | :heavy_minus_sign:                                                             | N/A                                                                            |
| `name`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `type`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `identifier`                                                                   | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `parent`                                                                       | [operations.UpdateSchoolParent](../../models/operations/updateschoolparent.md) | :heavy_minus_sign:                                                             | N/A                                                                            |