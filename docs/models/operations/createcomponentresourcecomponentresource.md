# CreateComponentResourceComponentResource

Represents a resource associated with a course component.

## Example Usage

```typescript
import { CreateComponentResourceComponentResource } from "oneroster/models/operations";

let value: CreateComponentResourceComponentResource = {
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

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `sourcedId`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `status`                                                                                                               | [operations.CreateComponentResourceStatus](../../models/operations/createcomponentresourcestatus.md)                   | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `dateLastModified`                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                          | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `metadata`                                                                                                             | Record<string, *any*>                                                                                                  | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `courseComponent`                                                                                                      | [operations.CreateComponentResourceCourseComponent](../../models/operations/createcomponentresourcecoursecomponent.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `resource`                                                                                                             | [operations.CreateComponentResourceResource](../../models/operations/createcomponentresourceresource.md)               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `title`                                                                                                                | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `sortOrder`                                                                                                            | *number*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |