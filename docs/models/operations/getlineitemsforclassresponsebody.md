# GetLineItemsForClassResponseBody

Successful response containing a collection of line items for the class

## Example Usage

```typescript
import { GetLineItemsForClassResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetLineItemsForClassResponseBody = {
  lineItems: [],
  totalCount: 589.12,
  pageCount: 572.48,
  pageNumber: 8646.77,
  offset: 3918.63,
  limit: 8120.14,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `lineItems`                                                  | [components.LineItem](../../models/components/lineitem.md)[] | :heavy_check_mark:                                           | N/A                                                          |
| `totalCount`                                                 | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `pageCount`                                                  | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `pageNumber`                                                 | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `offset`                                                     | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `limit`                                                      | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |