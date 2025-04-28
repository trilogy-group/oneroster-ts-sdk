# UpdateEnrollmentRequest

## Example Usage

```typescript
import { UpdateEnrollmentRequest } from "oneroster/models/operations";

let value: UpdateEnrollmentRequest = {
  sourcedId: "<id>",
  requestBody: {
    enrollment: {
      sourcedId: "<id>",
      status: "tobedeleted",
      role: "proctor",
      beginDate: "2024-01-01",
      endDate: "2024-01-01",
      user: {
        sourcedId: "<id>",
      },
      class: {
        sourcedId: "<id>",
      },
    },
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `sourcedId`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | The unique identifier for the enrollment to update                                               |
| `requestBody`                                                                                    | [operations.UpdateEnrollmentRequestBody](../../models/operations/updateenrollmentrequestbody.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |