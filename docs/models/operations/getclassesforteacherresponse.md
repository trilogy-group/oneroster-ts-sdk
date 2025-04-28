# GetClassesForTeacherResponse

Successful response containing a collection of classes for the teacher

## Example Usage

```typescript
import { GetClassesForTeacherResponse } from "oneroster/models/operations";

let value: GetClassesForTeacherResponse = {
  classes: [
    {
      sourcedId: "<id>",
      status: "tobedeleted",
      title: "<value>",
      classCode: "<value>",
      classType: "scheduled",
      location: "<value>",
      course: {
        href: "https://velvety-minister.org/",
        sourcedId: "<id>",
        type: "<value>",
      },
      school: {
        href: "https://plump-swine.net",
        sourcedId: "<id>",
        type: "<value>",
      },
      terms: [
        {
          href: "https://crushing-fisherman.org/",
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