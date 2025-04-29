# GetResourcesForClassResponse

Successful response containing a collection of resources for the class

## Example Usage

```typescript
import { GetResourcesForClassResponse } from "@superbuilders/oneroster/models/operations";

let value: GetResourcesForClassResponse = {
  resources: [
    {
      sourcedId: "<id>",
      status: "active",
      title: "<value>",
      vendorResourceId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `resources`                                                  | [components.Resource](../../models/components/resource.md)[] | :heavy_check_mark:                                           | N/A                                                          |