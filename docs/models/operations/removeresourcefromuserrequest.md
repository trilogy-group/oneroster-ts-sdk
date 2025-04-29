# RemoveResourceFromUserRequest

## Example Usage

```typescript
import { RemoveResourceFromUserRequest } from "@superbuilders/oneroster/models/operations";

let value: RemoveResourceFromUserRequest = {
  userSourcedId: "<id>",
  resourceSourcedId: "<id>",
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `userSourcedId`                         | *string*                                | :heavy_check_mark:                      | The sourcedId of the user               |
| `resourceSourcedId`                     | *string*                                | :heavy_check_mark:                      | The sourcedId of the resource to remove |