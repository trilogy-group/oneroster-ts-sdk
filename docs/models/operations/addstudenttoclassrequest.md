# AddStudentToClassRequest

## Example Usage

```typescript
import { AddStudentToClassRequest } from "@superbuilders/oneroster/models/operations";

let value: AddStudentToClassRequest = {
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
| `requestBody`                                                                                      | [operations.AddStudentToClassRequestBody](../../models/operations/addstudenttoclassrequestbody.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |