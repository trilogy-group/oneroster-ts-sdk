# GetAllClassesResponse

## Example Usage

```typescript
import { GetAllClassesResponse } from "@superbuilders/oneroster/models/operations";

let value: GetAllClassesResponse = {
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
          href: "https://thick-skean.biz",
          sourcedId: "<id>",
          type: "<value>",
        },
        school: {
          href: "https://grimy-design.info/",
          sourcedId: "<id>",
          type: "<value>",
        },
        terms: [
          {
            href: "https://parallel-mortise.biz",
            sourcedId: "<id>",
            type: "<value>",
          },
        ],
      },
    ],
    totalCount: 1753.04,
    pageCount: 165.2,
    pageNumber: 6749.82,
    offset: 5494.87,
    limit: 8257.78,
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [operations.GetAllClassesResponseBody](../../models/operations/getallclassesresponsebody.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |