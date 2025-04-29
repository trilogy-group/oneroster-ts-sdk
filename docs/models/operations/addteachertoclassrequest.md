# AddTeacherToClassRequest

## Example Usage

```typescript
import { AddTeacherToClassRequest } from "@superbuilders/oneroster/models/operations";

let value: AddTeacherToClassRequest = {
  classSourcedId: "<id>",
  requestBody: {
    enrollment: {
      user: {
        sourcedId: "<id>",
      },
      beginDate: "2024-01-01",
      endDate: "2024-01-01",
    },
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `classSourcedId`                                                                                   | *string*                                                                                           | :heavy_check_mark:                                                                                 | Class sourcedId                                                                                    |
| `requestBody`                                                                                      | [operations.AddTeacherToClassRequestBody](../../models/operations/addteachertoclassrequestbody.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |