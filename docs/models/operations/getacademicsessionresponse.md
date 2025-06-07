# GetAcademicSessionResponse

Success

## Example Usage

```typescript
import { GetAcademicSessionResponse } from "@superbuilders/oneroster/models/operations";

let value: GetAcademicSessionResponse = {
  academicSession: {
    sourcedId: "<id>",
    status: "active",
    title: "<value>",
    startDate: "<value>",
    endDate: "<value>",
    type: "semester",
    schoolYear: 7108.8,
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
| `academicSession`                                                        | [components.AcademicSession](../../models/components/academicsession.md) | :heavy_check_mark:                                                       | Represents an academic session.                                          |