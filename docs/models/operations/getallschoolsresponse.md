# GetAllSchoolsResponse

Collection of schools successfully retrieved

## Example Usage

```typescript
import { GetAllSchoolsResponse } from "@superbuilders/oneroster/models/operations";

let value: GetAllSchoolsResponse = {
  orgs: [
    {
      sourcedId: "<id>",
      status: "tobedeleted",
      name: "<value>",
      type: "local",
      identifier: "<value>",
      parent: {
        href: "https://speedy-stranger.name/",
        sourcedId: "<id>",
        type: "<value>",
      },
      children: [
        {
          href: "https://ragged-recovery.biz/",
          sourcedId: "<id>",
          type: "<value>",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `orgs`                                             | [components.Org](../../models/components/org.md)[] | :heavy_check_mark:                                 | N/A                                                |