# GetResourceResponse

Successful response with the resource

## Example Usage

```typescript
import { GetResourceResponse } from "@superbuilders/oneroster/models/operations";

let value: GetResourceResponse = {
  resource: {
    sourcedId: "<id>",
    status: "active",
    title: "<value>",
    vendorResourceId: "<id>",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `resource`                                                 | [components.Resource](../../models/components/resource.md) | :heavy_check_mark:                                         | Represents a digital resource of some kind.                |