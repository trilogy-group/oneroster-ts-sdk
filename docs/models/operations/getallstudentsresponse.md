# GetAllStudentsResponse

Successful response containing a collection of students

## Example Usage

```typescript
import { GetAllStudentsResponse } from "@superbuilders/oneroster/models/operations";

let value: GetAllStudentsResponse = {
  users: [
    {
      sourcedId: "<id>",
      status: "active",
      enabledUser: false,
      givenName: "<value>",
      familyName: "<value>",
      roles: [
        {
          roleType: "secondary",
          role: "guardian",
          org: {
            href: "https://bowed-tuba.com/",
            sourcedId: "<id>",
            type: "<value>",
          },
          beginDate: "<value>",
          endDate: "<value>",
        },
      ],
      agents: [
        {
          href: "https://nifty-e-mail.org",
          sourcedId: "<id>",
          type: "category",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `users`                                                                          | [operations.GetAllStudentsUser](../../models/operations/getallstudentsuser.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |