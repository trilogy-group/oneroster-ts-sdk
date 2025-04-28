# Resource

Represents a digital resource of some kind.

## Example Usage

```typescript
import { Resource } from "oneroster/models/components";

let value: Resource = {
  sourcedId: "<id>",
  status: "tobedeleted",
  title: "<value>",
  vendorResourceId: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `sourcedId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [components.ResourceStatus](../../models/components/resourcestatus.md)                        | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `dateLastModified`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `title`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `roles`                                                                                       | [components.ResourceRole](../../models/components/resourcerole.md)[]                          | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `importance`                                                                                  | [components.Importance](../../models/components/importance.md)                                | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `vendorResourceId`                                                                            | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `vendorId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `applicationId`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |