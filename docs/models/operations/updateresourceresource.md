# UpdateResourceResource

## Example Usage

```typescript
import { UpdateResourceResource } from "oneroster/models/operations";

let value: UpdateResourceResource = {
  title: "<value>",
  vendorResourceId: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `sourcedId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [operations.UpdateResourceStatus](../../models/operations/updateresourcestatus.md)            | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `dateLastModified`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `title`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `roles`                                                                                       | [operations.UpdateResourceRole](../../models/operations/updateresourcerole.md)[]              | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `importance`                                                                                  | [operations.UpdateResourceImportance](../../models/operations/updateresourceimportance.md)    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `vendorResourceId`                                                                            | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `vendorId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `applicationId`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |