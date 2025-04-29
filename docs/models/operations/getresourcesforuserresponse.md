# GetResourcesForUserResponse

Successful response containing a collection of resources for the user

## Example Usage

```typescript
import { GetResourcesForUserResponse } from "@superbuilders/oneroster/models/operations";

let value: GetResourcesForUserResponse = {
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