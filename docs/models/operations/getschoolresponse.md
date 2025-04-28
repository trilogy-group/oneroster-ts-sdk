# GetSchoolResponse

School successfully retrieved

## Example Usage

```typescript
import { GetSchoolResponse } from "oneroster/models/operations";

let value: GetSchoolResponse = {
  org: {
    sourcedId: "<id>",
    status: "active",
    name: "<value>",
    type: "national",
    identifier: "<value>",
    parent: {
      href: "https://grave-certification.biz/",
      sourcedId: "<id>",
      type: "<value>",
    },
    children: [
      {
        href: "https://slow-shoulder.info",
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