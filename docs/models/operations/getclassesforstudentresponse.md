# GetClassesForStudentResponse

## Example Usage

```typescript
import { GetClassesForStudentResponse } from "@superbuilders/oneroster/models/operations";

let value: GetClassesForStudentResponse = {
  result: {
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
    totalCount: 61.9,
    pageCount: 1381.09,
    pageNumber: 4056.67,
    offset: 3145.93,
    limit: 6555.71,
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [operations.GetClassesForStudentResponseBody](../../models/operations/getclassesforstudentresponsebody.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |