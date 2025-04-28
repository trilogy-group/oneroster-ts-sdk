# GetAllResourcesResponse

Successful response containing a collection of resources

## Example Usage

```typescript
import { GetAllResourcesResponse } from "oneroster/models/operations";

let value: GetAllResourcesResponse = {
  resources: [
    {
      sourcedId: "<id>",
      status: "tobedeleted",
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