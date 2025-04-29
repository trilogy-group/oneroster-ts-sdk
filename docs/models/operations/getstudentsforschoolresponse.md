# GetStudentsForSchoolResponse

Collection of students successfully retrieved

## Example Usage

```typescript
import { GetStudentsForSchoolResponse } from "@superbuilders/oneroster/models/operations";

let value: GetStudentsForSchoolResponse = {
  users: [
    {
      sourcedId: "<id>",
      status: "tobedeleted",
      enabledUser: false,
      givenName: "<value>",
      familyName: "<value>",
      roles: [
        {
          roleType: "primary",
          role: "parent",
          org: {
            href: "https://trim-heartbeat.com",
            sourcedId: "<id>",
            type: "<value>",
          },
          beginDate: "<value>",
          endDate: "<value>",
        },
      ],
      agents: [
        {
          href: "https://rectangular-polyester.com",
          sourcedId: "<id>",
          type: "academicSession",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `users`                                                                                      | [operations.GetStudentsForSchoolUser](../../models/operations/getstudentsforschooluser.md)[] | :heavy_check_mark:                                                                           | N/A                                                                                          |