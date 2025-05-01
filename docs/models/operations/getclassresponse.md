# GetClassResponse

Successful response with the requested class

## Example Usage

```typescript
import { GetClassResponse } from "@superbuilders/oneroster/models/operations";

let value: GetClassResponse = {
  class: {
    sourcedId: "<id>",
    status: "tobedeleted",
    title: "<value>",
    classCode: "<value>",
    classType: "homeroom",
    location: "<value>",
    course: {
      href: "https://inexperienced-lady.name",
      sourcedId: "<id>",
      type: "<value>",
    },
    school: {
      href: "https://dramatic-custom.net/",
      sourcedId: "<id>",
      type: "<value>",
    },
    terms: [
      {
        href: "https://cuddly-comestible.name",
        sourcedId: "<id>",
        type: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `class`                                              | [components.Class](../../models/components/class.md) | :heavy_check_mark:                                   | Represents a class.                                  |