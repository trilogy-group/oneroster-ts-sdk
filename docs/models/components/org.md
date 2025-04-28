# Org

Represents an organization.

## Example Usage

```typescript
import { Org } from "oneroster/models/components";

let value: Org = {
  sourcedId: "<id>",
  status: "tobedeleted",
  name: "<value>",
  type: "district",
  identifier: "<value>",
  parent: {
    href: "https://eminent-creature.name/",
    sourcedId: "<id>",
    type: "<value>",
  },
  children: [
    {
      href: "https://early-teammate.org/",
      sourcedId: "<id>",
      type: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `sourcedId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [components.OrgStatus](../../models/components/orgstatus.md)                                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `dateLastModified`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `type`                                                                                        | [components.OrgType2](../../models/components/orgtype2.md)                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `identifier`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `parent`                                                                                      | [components.OrgParent](../../models/components/orgparent.md)                                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `children`                                                                                    | [components.Child](../../models/components/child.md)[]                                        | :heavy_check_mark:                                                                            | N/A                                                                                           |