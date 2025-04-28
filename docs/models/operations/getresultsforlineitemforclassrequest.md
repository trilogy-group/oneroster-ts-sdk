# GetResultsForLineItemForClassRequest

## Example Usage

```typescript
import { GetResultsForLineItemForClassRequest } from "oneroster/models/operations";

let value: GetResultsForLineItemForClassRequest = {
  classSourcedId: "<id>",
  lineItemSourcedId: "<id>",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `classSourcedId`               | *string*                       | :heavy_check_mark:             | The sourcedId of the class     |
| `lineItemSourcedId`            | *string*                       | :heavy_check_mark:             | The sourcedId of the line item |