# GetClassesForStudentResponse

Successful response containing a collection of classes for the student

## Example Usage

```typescript
import { GetClassesForStudentResponse } from "@superbuilders/oneroster/models/operations";

let value: GetClassesForStudentResponse = {
  classes: [
    {
      sourcedId: "<id>",
      status: "active",
      title: "<value>",
      classCode: "<value>",
      classType: "homeroom",
      location: "<value>",
      course: {
        href: "https://bulky-runway.net",
        sourcedId: "<id>",
        type: "<value>",
      },
      school: {
        href: "https://warm-hydrocarbon.net/",
        sourcedId: "<id>",
        type: "<value>",
      },
      terms: [
        {
          href: "https://frail-minion.biz",
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