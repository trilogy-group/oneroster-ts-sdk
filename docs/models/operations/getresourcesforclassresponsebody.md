# GetResourcesForClassResponseBody

Successful response containing a collection of resources for the class

## Example Usage

```typescript
import { GetResourcesForClassResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetResourcesForClassResponseBody = {
  resources: [
    {
      sourcedId: "<id>",
      status: "tobedeleted",
      title: "<value>",
      vendorResourceId: "<id>",
    },
  ],
  totalCount: 5250.98,
  pageCount: 637.66,
  pageNumber: 8220.46,
  offset: 4652.12,
  limit: 4057.05,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `resources`                                                  | [components.Resource](../../models/components/resource.md)[] | :heavy_check_mark:                                           | N/A                                                          |
| `totalCount`                                                 | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `pageCount`                                                  | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `pageNumber`                                                 | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `offset`                                                     | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `limit`                                                      | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |