# PutComponentResourceComponentResource

Represents a resource associated with a course component.

## Example Usage

```typescript
import { PutComponentResourceComponentResource } from "oneroster/models/operations";

let value: PutComponentResourceComponentResource = {
  sourcedId: "<id>",
  status: "active",
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
| `status`                                                                                                         | [operations.PutComponentResourceStatus](../../models/operations/putcomponentresourcestatus.md)                   | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `dateLastModified`                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `metadata`                                                                                                       | Record<string, *any*>                                                                                            | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `courseComponent`                                                                                                | [operations.PutComponentResourceCourseComponent](../../models/operations/putcomponentresourcecoursecomponent.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `resource`                                                                                                       | [operations.PutComponentResourceResource](../../models/operations/putcomponentresourceresource.md)               | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `title`                                                                                                          | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `sortOrder`                                                                                                      | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |