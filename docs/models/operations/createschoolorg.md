# CreateSchoolOrg

## Example Usage

```typescript
import { CreateSchoolOrg } from "oneroster/models/operations";

let value: CreateSchoolOrg = {
  name: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `sourcedId`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `status`                                                                       | [operations.CreateSchoolStatus](../../models/operations/createschoolstatus.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `metadata`                                                                     | Record<string, *any*>                                                          | :heavy_minus_sign:                                                             | N/A                                                                            |
| `name`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `type`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `identifier`                                                                   | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `parent`                                                                       | [operations.CreateSchoolParent](../../models/operations/createschoolparent.md) | :heavy_minus_sign:                                                             | N/A                                                                            |