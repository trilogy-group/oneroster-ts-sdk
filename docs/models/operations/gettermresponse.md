# GetTermResponse

Successful response with the term

## Example Usage

```typescript
import { GetTermResponse } from "@superbuilders/oneroster/models/operations";

let value: GetTermResponse = {
  term: {
    sourcedId: "<id>",
    status: "active",
    title: "<value>",
    startDate: "<value>",
    endDate: "<value>",
    type: "term",
    schoolYear: 6747.48,
    org: {
      href: "https://white-freckle.biz",
      sourcedId: "<id>",
      type: "lineItem",
    },
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `term`                                                                   | [components.AcademicSession](../../models/components/academicsession.md) | :heavy_check_mark:                                                       | Represents an academic session.                                          |