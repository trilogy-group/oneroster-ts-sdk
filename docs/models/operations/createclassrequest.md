# CreateClassRequest

## Example Usage

```typescript
import { CreateClassRequest } from "@superbuilders/oneroster/models/operations";

let value: CreateClassRequest = {
  class: {
    title: "<value>",
    course: {
      sourcedId: "<id>",
    },
    org: {
      sourcedId: "<id>",
    },
    terms: [
      {
        sourcedId: "<id>",
      },
    ],
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `class`                                                                    | [operations.CreateClassClass](../../models/operations/createclassclass.md) | :heavy_check_mark:                                                         | N/A                                                                        |