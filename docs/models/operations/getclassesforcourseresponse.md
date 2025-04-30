# GetClassesForCourseResponse

## Example Usage

```typescript
import { GetClassesForCourseResponse } from "@superbuilders/oneroster/models/operations";

let value: GetClassesForCourseResponse = {
  result: {
    classes: [
      {
        sourcedId: "<id>",
        status: "tobedeleted",
        title: "<value>",
        classCode: "<value>",
        classType: "scheduled",
        location: "<value>",
        course: {
          href: "https://simple-majority.org/",
          sourcedId: "<id>",
          type: "<value>",
        },
        school: {
          href: "https://good-mallard.net/",
          sourcedId: "<id>",
          type: "<value>",
        },
        terms: [
          {
            href: "https://second-hand-knickers.com/",
            sourcedId: "<id>",
            type: "<value>",
          },
        ],
      },
    ],
    totalCount: 3933.56,
    pageCount: 4977.87,
    pageNumber: 1057.89,
    offset: 5027.16,
    limit: 8553.49,
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                 | [operations.GetClassesForCourseResponseBody](../../models/operations/getclassesforcourseresponsebody.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |