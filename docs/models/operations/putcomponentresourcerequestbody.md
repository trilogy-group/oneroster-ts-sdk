# PutComponentResourceRequestBody

## Example Usage

```typescript
import { PutComponentResourceRequestBody } from "@superbuilders/oneroster/models/operations";

let value: PutComponentResourceRequestBody = {
  componentResource: {
    sourcedId: "<id>",
    status: "tobedeleted",
    courseComponent: {
      sourcedId: "<id>",
    },
    resource: {
      sourcedId: "<id>",
    },
    title: "<value>",
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `componentResource`                                                                                                  | [operations.PutComponentResourceComponentResource](../../models/operations/putcomponentresourcecomponentresource.md) | :heavy_check_mark:                                                                                                   | Represents a resource associated with a course component.                                                            |