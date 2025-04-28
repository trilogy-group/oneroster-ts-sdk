# GetAllTeachersResponse

Successful response containing a collection of teachers

## Example Usage

```typescript
import { GetAllTeachersResponse } from "oneroster/models/operations";

let value: GetAllTeachersResponse = {
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
          role: "relative",
          org: {
            href: "https://glossy-minister.name/",
            sourcedId: "<id>",
            type: "<value>",
          },
          beginDate: "<value>",
          endDate: "<value>",
        },
      ],
      agents: [
        {
          href: "https://noteworthy-gown.org",
          sourcedId: "<id>",
          type: "student",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `users`                                                                          | [operations.GetAllTeachersUser](../../models/operations/getallteachersuser.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |