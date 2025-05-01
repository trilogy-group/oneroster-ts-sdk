# GetAcademicSessionResponse

Success

## Example Usage

```typescript
import { GetAcademicSessionResponse } from "@superbuilders/oneroster/models/operations";

let value: GetAcademicSessionResponse = {
  academicSession: {
    sourcedId: "<id>",
    status: "tobedeleted",
    title: "<value>",
    startDate: "<value>",
    endDate: "<value>",
    type: "gradingPeriod",
    schoolYear: 6609.42,
    org: {
      href: "https://flustered-gastropod.com/",
      sourcedId: "<id>",
      type: "user",
    },
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `academicSession`                                                        | [components.AcademicSession](../../models/components/academicsession.md) | :heavy_check_mark:                                                       | Represents an academic session.                                          |