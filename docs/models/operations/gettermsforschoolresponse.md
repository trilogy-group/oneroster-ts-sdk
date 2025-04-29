# GetTermsForSchoolResponse

Collection of terms successfully retrieved

## Example Usage

```typescript
import { GetTermsForSchoolResponse } from "@superbuilders/oneroster/models/operations";

let value: GetTermsForSchoolResponse = {
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
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `terms`                                                                    | [components.AcademicSession](../../models/components/academicsession.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |