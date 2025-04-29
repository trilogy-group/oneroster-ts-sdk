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
    type: "school",
    identifier: "<value>",
    parent: {
      href: "https://decent-slipper.biz",
      sourcedId: "<id>",
      type: "<value>",
    },
    children: [
      {
        href: "https://lucky-designation.org",
        sourcedId: "<id>",
        type: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `org`                                            | [components.Org](../../models/components/org.md) | :heavy_check_mark:                               | Represents an organization.                      |