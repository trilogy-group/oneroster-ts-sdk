# UpdateResourceRequest

## Example Usage

```typescript
import { UpdateResourceRequest } from "oneroster/models/operations";

let value: UpdateResourceRequest = {
  sourcedId: "<id>",
  requestBody: {
    resource: {
      title: "<value>",
      vendorResourceId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `sourcedId`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | The sourcedId of the resource to update                                                      |
| `requestBody`                                                                                | [operations.UpdateResourceRequestBody](../../models/operations/updateresourcerequestbody.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |