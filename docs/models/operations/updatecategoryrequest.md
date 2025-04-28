# UpdateCategoryRequest

## Example Usage

```typescript
import { UpdateCategoryRequest } from "oneroster/models/operations";

let value: UpdateCategoryRequest = {
  sourcedId: "<id>",
  requestBody: {
    category: {
      status: "tobedeleted",
      title: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `sourcedId`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | The sourcedId of the category to update                                                      |
| `requestBody`                                                                                | [operations.UpdateCategoryRequestBody](../../models/operations/updatecategoryrequestbody.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |