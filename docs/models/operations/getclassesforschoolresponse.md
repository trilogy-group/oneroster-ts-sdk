# GetClassesForSchoolResponse

## Example Usage

```typescript
import { GetClassesForSchoolResponse } from "@superbuilders/oneroster/models/operations";

let value: GetClassesForSchoolResponse = {
  result: {
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
    totalCount: 6318.4,
    pageCount: 809.63,
    pageNumber: 4666.32,
    offset: 5355.76,
    limit: 364.99,
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                 | [operations.GetClassesForSchoolResponseBody](../../models/operations/getclassesforschoolresponsebody.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |