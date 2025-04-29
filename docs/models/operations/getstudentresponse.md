# GetStudentResponse

Successful response with the student

## Example Usage

```typescript
import { GetStudentResponse } from "@superbuilders/oneroster/models/operations";

let value: GetStudentResponse = {
  user: {
    sourcedId: "<id>",
    status: "tobedeleted",
    enabledUser: false,
    givenName: "<value>",
    familyName: "<value>",
    roles: [
      {
        roleType: "primary",
        role: "administrator",
        org: {
          href: "https://classic-assist.name/",
          sourcedId: "<id>",
          type: "<value>",
        },
        beginDate: "<value>",
        endDate: "<value>",
      },
    ],
    agents: [
      {
        href: "https://passionate-pleasure.info/",
        sourcedId: "<id>",
        type: "scoreScale",
      },
    ],
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `user`                                                                 | [operations.GetStudentUser](../../models/operations/getstudentuser.md) | :heavy_check_mark:                                                     | N/A                                                                    |