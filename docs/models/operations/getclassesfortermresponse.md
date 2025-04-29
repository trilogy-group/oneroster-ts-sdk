# GetClassesForTermResponse

Successful response containing a collection of classes for the term

## Example Usage

```typescript
import { GetClassesForTermResponse } from "@superbuilders/oneroster/models/operations";

let value: GetClassesForTermResponse = {
  classes: [
    {
      sourcedId: "<id>",
      status: "active",
      title: "<value>",
      classCode: "<value>",
      classType: "homeroom",
      location: "<value>",
      course: {
        href: "https://adolescent-fat.com",
        sourcedId: "<id>",
        type: "<value>",
      },
      school: {
        href: "https://digital-fit.biz/",
        sourcedId: "<id>",
        type: "<value>",
      },
      terms: [
        {
          href: "https://unwritten-affect.org",
          sourcedId: "<id>",
          type: "<value>",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `classes`                                              | [components.Class](../../models/components/class.md)[] | :heavy_check_mark:                                     | N/A                                                    |