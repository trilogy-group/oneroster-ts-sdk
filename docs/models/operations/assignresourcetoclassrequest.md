# AssignResourceToClassRequest

## Example Usage

```typescript
import { AssignResourceToClassRequest } from "@superbuilders/oneroster/models/operations";

let value: AssignResourceToClassRequest = {
  classSourcedId: "<id>",
  requestBody: {
    resource: {
      sourcedId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `classSourcedId`                                                                                           | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The sourcedId of the class                                                                                 |
| `requestBody`                                                                                              | [operations.AssignResourceToClassRequestBody](../../models/operations/assignresourcetoclassrequestbody.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |