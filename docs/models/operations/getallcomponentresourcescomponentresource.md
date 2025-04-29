# GetAllComponentResourcesComponentResource

Represents a resource associated with a course component.

## Example Usage

```typescript
import { GetAllComponentResourcesComponentResource } from "@superbuilders/oneroster/models/operations";

let value: GetAllComponentResourcesComponentResource = {
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

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `sourcedId`                                                                                                              | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `status`                                                                                                                 | [operations.GetAllComponentResourcesStatus](../../models/operations/getallcomponentresourcesstatus.md)                   | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `dateLastModified`                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                            | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `metadata`                                                                                                               | Record<string, *any*>                                                                                                    | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `courseComponent`                                                                                                        | [operations.GetAllComponentResourcesCourseComponent](../../models/operations/getallcomponentresourcescoursecomponent.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `resource`                                                                                                               | [operations.GetAllComponentResourcesResource](../../models/operations/getallcomponentresourcesresource.md)               | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `title`                                                                                                                  | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `sortOrder`                                                                                                              | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |