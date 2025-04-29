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
    totalCount: 195088,
    pageCount: 722055,
    pageNumber: 481821,
    offset: 647958,
    limit: 376822,
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                       | [operations.GetAllAcademicSessionsResponseBody](../../models/operations/getallacademicsessionsresponsebody.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |