# AssignResourceToUserRequest

## Example Usage

```typescript
import { AssignResourceToUserRequest } from "@superbuilders/oneroster/models/operations";

let value: AssignResourceToUserRequest = {
  userSourcedId: "<id>",
  requestBody: {
    resource: {
      sourcedId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `userSourcedId`                                                                                          | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The sourcedId of the user                                                                                |
| `requestBody`                                                                                            | [operations.AssignResourceToUserRequestBody](../../models/operations/assignresourcetouserrequestbody.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |