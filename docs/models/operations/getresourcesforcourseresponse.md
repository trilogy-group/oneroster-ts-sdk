# GetResourcesForCourseResponse

## Example Usage

```typescript
import { GetResourcesForCourseResponse } from "@superbuilders/oneroster/models/operations";

let value: GetResourcesForCourseResponse = {
  result: {
    resources: [
      {
        sourcedId: "<id>",
        status: "active",
        title: "<value>",
        vendorResourceId: "<id>",
      },
    ],
    totalCount: 3796.78,
    pageCount: 5719.15,
    pageNumber: 101.51,
    offset: 1709.86,
    limit: 7759.37,
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                     | [operations.GetResourcesForCourseResponseBody](../../models/operations/getresourcesforcourseresponsebody.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |