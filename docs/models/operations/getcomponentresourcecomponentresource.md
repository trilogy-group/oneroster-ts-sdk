# GetComponentResourceComponentResource

Represents a resource associated with a course component.

## Example Usage

```typescript
import { GetComponentResourceComponentResource } from "@superbuilders/oneroster/models/operations";

let value: GetComponentResourceComponentResource = {
  sourcedId: "<id>",
  status: "tobedeleted",
  courseComponent: {
    sourcedId: "<id>",
  },
  resource: {
    sourcedId: "<id>",
  },
  title: "<value>",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `sourcedId`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `status`                                                                                                         | [operations.GetComponentResourceStatus](../../models/operations/getcomponentresourcestatus.md)                   | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `dateLastModified`                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `metadata`                                                                                                       | Record<string, *any*>                                                                                            | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `courseComponent`                                                                                                | [operations.GetComponentResourceCourseComponent](../../models/operations/getcomponentresourcecoursecomponent.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `resource`                                                                                                       | [operations.GetComponentResourceResource](../../models/operations/getcomponentresourceresource.md)               | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `title`                                                                                                          | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `sortOrder`                                                                                                      | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |