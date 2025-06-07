# GetOrgResponse

Organization retrieved successfully

## Example Usage

```typescript
import { GetOrgResponse } from "@superbuilders/oneroster/models/operations";

let value: GetOrgResponse = {
  org: {
    sourcedId: "<id>",
    status: "active",
    name: "<value>",
    type: "national",
    identifier: "<value>",
    parent: {
      href: "https://afraid-chops.info",
      sourcedId: "<id>",
      type: "<value>",
    },
    children: [],
  },
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `org`                                            | [components.Org](../../models/components/org.md) | :heavy_check_mark:                               | Represents an organization.                      |