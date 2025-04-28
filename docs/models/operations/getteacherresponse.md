# GetTeacherResponse

Successful response with the teacher

## Example Usage

```typescript
import { GetTeacherResponse } from "oneroster/models/operations";

let value: GetTeacherResponse = {
  user: {
    sourcedId: "<id>",
    status: "tobedeleted",
    enabledUser: false,
    givenName: "<value>",
    familyName: "<value>",
    roles: [
      {
        roleType: "primary",
        role: "guardian",
        org: {
          href: "https://nimble-amendment.biz/",
          sourcedId: "<id>",
          type: "<value>",
        },
        beginDate: "<value>",
        endDate: "<value>",
      },
    ],
    agents: [
      {
        href: "https://merry-rationale.name",
        sourcedId: "<id>",
        type: "student",
      },
    ],
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `user`                                                                 | [operations.GetTeacherUser](../../models/operations/getteacheruser.md) | :heavy_check_mark:                                                     | N/A                                                                    |