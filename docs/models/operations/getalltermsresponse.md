# GetAllTermsResponse

## Example Usage

```typescript
import { GetAllTermsResponse } from "@superbuilders/oneroster/models/operations";

let value: GetAllTermsResponse = {
  result: {
    terms: [
      {
        sourcedId: "<id>",
        status: "tobedeleted",
        title: "<value>",
        startDate: "<value>",
        endDate: "<value>",
        type: "gradingPeriod",
        schoolYear: 6564.25,
        org: {
          href: "https://selfish-battle.net/",
          sourcedId: "<id>",
          type: "course",
        },
      },
    ],
    totalCount: 9504.05,
    pageCount: 3004.23,
    pageNumber: 9414.46,
    offset: 1176.79,
    limit: 7423.53,
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `result`                                                                                 | [operations.GetAllTermsResponseBody](../../models/operations/getalltermsresponsebody.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |