# GetAllComponentResourcesResponse

## Example Usage

```typescript
import { GetAllComponentResourcesResponse } from "@superbuilders/oneroster/models/operations";

let value: GetAllComponentResourcesResponse = {
  result: {
    componentResources: [
      {
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
    ],
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                           | [operations.GetAllComponentResourcesResponseBody](../../models/operations/getallcomponentresourcesresponsebody.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |