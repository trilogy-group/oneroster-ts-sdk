# UpdateOrgOrg

## Example Usage

```typescript
import { UpdateOrgOrg } from "oneroster/models/operations";

let value: UpdateOrgOrg = {
  name: "<value>",
  type: "state",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `sourcedId`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `status`                                                                 | [operations.UpdateOrgStatus](../../models/operations/updateorgstatus.md) | :heavy_minus_sign:                                                       | N/A                                                                      |
| `metadata`                                                               | Record<string, *any*>                                                    | :heavy_minus_sign:                                                       | N/A                                                                      |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `type`                                                                   | [operations.UpdateOrgType](../../models/operations/updateorgtype.md)     | :heavy_check_mark:                                                       | N/A                                                                      |
| `identifier`                                                             | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `parent`                                                                 | [operations.UpdateOrgParent](../../models/operations/updateorgparent.md) | :heavy_minus_sign:                                                       | N/A                                                                      |