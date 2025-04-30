# GetTermsForSchoolResponse

## Example Usage

```typescript
import { GetTermsForSchoolResponse } from "@superbuilders/oneroster/models/operations";

let value: GetTermsForSchoolResponse = {
  result: {
    terms: [
      {
        sourcedId: "<id>",
        status: "tobedeleted",
        title: "<value>",
        startDate: "<value>",
        endDate: "<value>",
        type: "schoolYear",
        schoolYear: 4913.78,
        org: {
          href: "https://golden-babushka.net/",
          sourcedId: "<id>",
          type: "resource",
        },
      },
    ],
    totalCount: 6478.45,
    pageCount: 5294.16,
    pageNumber: 1906.35,
    offset: 7640.33,
    limit: 743.63,
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `result`                                                                                             | [operations.GetTermsForSchoolResponseBody](../../models/operations/gettermsforschoolresponsebody.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |