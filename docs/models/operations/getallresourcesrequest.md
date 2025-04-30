# GetAllResourcesRequest

## Example Usage

```typescript
import { GetAllResourcesRequest } from "@superbuilders/oneroster/models/operations";

let value: GetAllResourcesRequest = {
  fields: "sourcedId,name",
  filter: "status='active'",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `fields`                                                                               | *string*                                                                               | :heavy_minus_sign:                                                                     | Comma-separated list of fields to include in the response                              | sourcedId,name                                                                         |
| `limit`                                                                                | *number*                                                                               | :heavy_minus_sign:                                                                     | The maximum number of items to return in the paginated response                        | 100                                                                                    |
| `offset`                                                                               | *number*                                                                               | :heavy_minus_sign:                                                                     | The number of items to skip in the paginated response                                  | 0                                                                                      |
| `sort`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | The field to sort the response by                                                      |                                                                                        |
| `orderBy`                                                                              | [operations.GetAllResourcesOrderBy](../../models/operations/getallresourcesorderby.md) | :heavy_minus_sign:                                                                     | The order to sort the response by                                                      |                                                                                        |
| `filter`                                                                               | *string*                                                                               | :heavy_minus_sign:                                                                     | The filter to apply to the response                                                    | status='active'                                                                        |
| `search`                                                                               | *string*                                                                               | :heavy_minus_sign:                                                                     | The search query to apply to the response                                              |                                                                                        |