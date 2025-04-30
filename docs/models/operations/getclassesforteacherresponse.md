# GetClassesForTeacherResponse

## Example Usage

```typescript
import { GetClassesForTeacherResponse } from "@superbuilders/oneroster/models/operations";

let value: GetClassesForTeacherResponse = {
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
    totalCount: 3516.82,
    pageCount: 4931.49,
    pageNumber: 8890.72,
    offset: 1757.33,
    limit: 1008.7,
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [operations.GetClassesForTeacherResponseBody](../../models/operations/getclassesforteacherresponsebody.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |