# CreateResourceResource

## Example Usage

```typescript
import { CreateResourceResource } from "oneroster/models/operations";

let value: CreateResourceResource = {
  title: "<value>",
  vendorResourceId: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `sourcedId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [operations.CreateResourceStatus](../../models/operations/createresourcestatus.md)            | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `dateLastModified`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `title`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `roles`                                                                                       | [operations.CreateResourceRole](../../models/operations/createresourcerole.md)[]              | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `importance`                                                                                  | [operations.CreateResourceImportance](../../models/operations/createresourceimportance.md)    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `vendorResourceId`                                                                            | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `vendorId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `applicationId`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |