# GetAllOrgsResponseBody

Collection of organizations retrieved successfully

## Example Usage

```typescript
import { GetAllOrgsResponseBody } from "oneroster/models/operations";

let value: GetAllOrgsResponseBody = {
  orgs: [
    {
      sourcedId: "<id>",
      status: "active",
      name: "<value>",
      type: "local",
      identifier: "<value>",
      parent: {
        href: "https://flustered-information.info",
        sourcedId: "<id>",
        type: "<value>",
      },
      children: [
        {
          href: "https://biodegradable-airbus.com/",
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