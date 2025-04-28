# CreateComponentResourceRequest

## Example Usage

```typescript
import { CreateComponentResourceRequest } from "oneroster/models/operations";

let value: CreateComponentResourceRequest = {
  componentResource: {
    sourcedId: "<id>",
    status: "active",
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

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `componentResource`                                                                                                        | [operations.CreateComponentResourceComponentResource](../../models/operations/createcomponentresourcecomponentresource.md) | :heavy_check_mark:                                                                                                         | Represents a resource associated with a course component.                                                                  |