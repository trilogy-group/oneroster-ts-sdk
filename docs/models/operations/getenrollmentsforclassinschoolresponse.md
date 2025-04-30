# GetEnrollmentsForClassInSchoolResponse

## Example Usage

```typescript
import { GetEnrollmentsForClassInSchoolResponse } from "@superbuilders/oneroster/models/operations";

let value: GetEnrollmentsForClassInSchoolResponse = {
  result: {
    enrollments: [
      {
        sourcedId: "<id>",
        status: "tobedeleted",
        role: "proctor",
        primary: false,
        beginDate: "2024-01-01",
        endDate: "2024-01-01",
        user: {
          href: "https://miserly-stitcher.info",
          sourcedId: "<id>",
          type: "<value>",
        },
        class: {
          href: "https://sniveling-cosset.net/",
          sourcedId: "<id>",
          type: "<value>",
        },
      },
    ],
    totalCount: 8892.26,
    pageCount: 6164.42,
    pageNumber: 4512.65,
    offset: 6510.26,
    limit: 1655.1,
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                                       | [operations.GetEnrollmentsForClassInSchoolResponseBody](../../models/operations/getenrollmentsforclassinschoolresponsebody.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |