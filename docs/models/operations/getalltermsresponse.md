# GetAllTermsResponse

Successful response containing a collection of terms

## Example Usage

```typescript
import { GetAllTermsResponse } from "@superbuilders/oneroster/models/operations";

let value: GetAllTermsResponse = {
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
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `terms`                                                                    | [components.AcademicSession](../../models/components/academicsession.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |