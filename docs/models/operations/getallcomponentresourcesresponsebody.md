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
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `componentResources`                                                                                                           | [operations.GetAllComponentResourcesComponentResource](../../models/operations/getallcomponentresourcescomponentresource.md)[] | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |