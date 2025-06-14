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
    classCode: null,
    classType: "scheduled",
    location: "<value>",
    course: {
      href: "https://intent-plumber.info",
      sourcedId: "<id>",
      type: "<value>",
    },
    school: {
      href: "https://sneaky-marimba.info",
      sourcedId: "<id>",
      type: "<value>",
    },
    terms: [],
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `class`                                              | [components.Class](../../models/components/class.md) | :heavy_check_mark:                                   | Represents a class.                                  |