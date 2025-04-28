# GetResourcesForCourseResponse

Successful response containing a collection of resources for the course

## Example Usage

```typescript
import { GetResourcesForCourseResponse } from "oneroster/models/operations";

let value: GetResourcesForCourseResponse = {
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