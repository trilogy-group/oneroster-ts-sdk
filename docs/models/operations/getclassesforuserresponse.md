# GetClassesForUserResponse

## Example Usage

```typescript
import { GetClassesForUserResponse } from "@superbuilders/oneroster/models/operations";

let value: GetClassesForUserResponse = {
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
    totalCount: 3117.71,
    pageCount: 5471.06,
    pageNumber: 5030.55,
    offset: 8123.69,
    limit: 4612.86,
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `result`                                                                                             | [operations.GetClassesForUserResponseBody](../../models/operations/getclassesforuserresponsebody.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |