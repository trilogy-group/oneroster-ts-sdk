# GetComponentResourceResponse

Single Component Resource

## Example Usage

```typescript
import { GetComponentResourceResponse } from "oneroster/models/operations";

let value: GetComponentResourceResponse = {
  componentResource: {
    sourcedId: "<id>",
    status: "tobedeleted",
    courseComponent: {
      sourcedId: "<id>",
    },
    resource: {
      sourcedId: "<id>",
    },
    title: "<value>",
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `componentResource`                                                                                                  | [operations.GetComponentResourceComponentResource](../../models/operations/getcomponentresourcecomponentresource.md) | :heavy_check_mark:                                                                                                   | Represents a resource associated with a course component.                                                            |