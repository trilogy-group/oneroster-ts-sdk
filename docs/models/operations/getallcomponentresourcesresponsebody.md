# GetAllComponentResourcesResponseBody

Collection of Component Resources

## Example Usage

```typescript
import { GetAllComponentResourcesResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetAllComponentResourcesResponseBody = {
  componentResources: [
    {
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
  ],
  totalCount: 9879.73,
  pageCount: 2607.01,
  pageNumber: 4928.31,
  offset: 5362.27,
  limit: 7311.28,
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `componentResources`                                                                                                           | [operations.GetAllComponentResourcesComponentResource](../../models/operations/getallcomponentresourcescomponentresource.md)[] | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `totalCount`                                                                                                                   | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `pageCount`                                                                                                                    | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `pageNumber`                                                                                                                   | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `offset`                                                                                                                       | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `limit`                                                                                                                        | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |