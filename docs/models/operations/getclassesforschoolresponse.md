# GetClassesForSchoolResponse

Collection of classes successfully retrieved

## Example Usage

```typescript
import { GetClassesForSchoolResponse } from "oneroster/models/operations";

let value: GetClassesForSchoolResponse = {
  classes: [
    {
      sourcedId: "<id>",
      status: "active",
      title: "<value>",
      classCode: "<value>",
      classType: "scheduled",
      location: "<value>",
      course: {
        href: "https://interesting-sediment.net",
        sourcedId: "<id>",
        type: "<value>",
      },
      school: {
        href: "https://hateful-gym.name",
        sourcedId: "<id>",
        type: "<value>",
      },
      terms: [
        {
          href: "https://charming-transom.com/",
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