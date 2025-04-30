# GetAllCategoriesResponse

## Example Usage

```typescript
import { GetAllCategoriesResponse } from "@superbuilders/oneroster/models/operations";

let value: GetAllCategoriesResponse = {
  result: {
    categories: [
      {
        status: "tobedeleted",
        title: "<value>",
      },
    ],
    totalCount: 6776.72,
    pageCount: 2052.29,
    pageNumber: 9695.55,
    offset: 2350.42,
    limit: 4685.79,
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `result`                                                                                           | [operations.GetAllCategoriesResponseBody](../../models/operations/getallcategoriesresponsebody.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |