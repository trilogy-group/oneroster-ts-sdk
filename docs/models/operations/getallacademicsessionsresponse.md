# GetAllAcademicSessionsResponse

## Example Usage

```typescript
import { GetAllAcademicSessionsResponse } from "@superbuilders/oneroster/models/operations";

let value: GetAllAcademicSessionsResponse = {
  result: {
    academicSessions: [
      {
        sourcedId: "<id>",
        status: "tobedeleted",
        title: "<value>",
        startDate: "<value>",
        endDate: "<value>",
        type: "term",
        schoolYear: 3619.46,
        org: {
          href: "https://fuzzy-massage.com",
          sourcedId: "<id>",
          type: "user",
        },
      },
    ],
    totalCount: 1950.88,
    pageCount: 7220.55,
    pageNumber: 4818.21,
    offset: 6479.58,
    limit: 3768.22,
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                       | [operations.GetAllAcademicSessionsResponseBody](../../models/operations/getallacademicsessionsresponsebody.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |