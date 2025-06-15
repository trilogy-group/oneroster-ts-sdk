# GetStudentResponse

Successful response with the student

## Example Usage

```typescript
import { GetStudentResponse } from "@superbuilders/oneroster/models/operations";

let value: GetStudentResponse = {
  user: {
    sourcedId: "<id>",
    status: "tobedeleted",
    enabledUser: true,
    givenName: "<value>",
    familyName: "<value>",
    roles: [],
    agents: [],
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `user`                                                                 | [operations.GetStudentUser](../../models/operations/getstudentuser.md) | :heavy_check_mark:                                                     | N/A                                                                    |