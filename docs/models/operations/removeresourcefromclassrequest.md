# RemoveResourceFromClassRequest

## Example Usage

```typescript
import { RemoveResourceFromClassRequest } from "@superbuilders/oneroster/models/operations";

let value: RemoveResourceFromClassRequest = {
  classSourcedId: "<id>",
  resourceSourcedId: "<id>",
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `classSourcedId`                        | *string*                                | :heavy_check_mark:                      | The sourcedId of the class              |
| `resourceSourcedId`                     | *string*                                | :heavy_check_mark:                      | The sourcedId of the resource to remove |