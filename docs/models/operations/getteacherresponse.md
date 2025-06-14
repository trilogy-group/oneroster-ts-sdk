# GetTeacherResponse

Successful response with the teacher

## Example Usage

```typescript
import { GetTeacherResponse } from "@superbuilders/oneroster/models/operations";

let value: GetTeacherResponse = {
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
| `user`                                                                 | [operations.GetTeacherUser](../../models/operations/getteacheruser.md) | :heavy_check_mark:                                                     | N/A                                                                    |