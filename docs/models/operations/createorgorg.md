# CreateOrgOrg

## Example Usage

```typescript
import { CreateOrgOrg } from "oneroster/models/operations";

let value: CreateOrgOrg = {
  name: "<value>",
  type: "school",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `sourcedId`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `status`                                                                 | [operations.CreateOrgStatus](../../models/operations/createorgstatus.md) | :heavy_minus_sign:                                                       | N/A                                                                      |
| `metadata`                                                               | Record<string, *any*>                                                    | :heavy_minus_sign:                                                       | N/A                                                                      |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `type`                                                                   | [operations.CreateOrgType](../../models/operations/createorgtype.md)     | :heavy_check_mark:                                                       | N/A                                                                      |
| `identifier`                                                             | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `parent`                                                                 | [operations.CreateOrgParent](../../models/operations/createorgparent.md) | :heavy_minus_sign:                                                       | N/A                                                                      |