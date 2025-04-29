# GetClassesForUserResponse

Successful response containing a collection of classes for the user

## Example Usage

```typescript
import { GetClassesForUserResponse } from "@superbuilders/oneroster/models/operations";

let value: GetClassesForUserResponse = {
  classes: [
    {
      sourcedId: "<id>",
      status: "active",
      title: "<value>",
      classCode: "<value>",
      classType: "homeroom",
      location: "<value>",
      course: {
        href: "https://spanish-deployment.info/",
        sourcedId: "<id>",
        type: "<value>",
      },
      school: {
        href: "https://whirlwind-intellect.info/",
        sourcedId: "<id>",
        type: "<value>",
      },
      terms: [
        {
          href: "https://impractical-ruin.name",
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