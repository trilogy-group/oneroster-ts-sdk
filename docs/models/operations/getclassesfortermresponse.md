# GetClassesForTermResponse

## Example Usage

```typescript
import { GetClassesForTermResponse } from "@superbuilders/oneroster/models/operations";

let value: GetClassesForTermResponse = {
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
    totalCount: 70.79,
    pageCount: 822.19,
    pageNumber: 9892.37,
    offset: 8288.09,
    limit: 5294.87,
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `result`                                                                                             | [operations.GetClassesForTermResponseBody](../../models/operations/getclassesfortermresponsebody.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |