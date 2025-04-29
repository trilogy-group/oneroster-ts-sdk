# PutAcademicSessionRequestBody

## Example Usage

```typescript
import { PutAcademicSessionRequestBody } from "@superbuilders/oneroster/models/operations";

let value: PutAcademicSessionRequestBody = {
  academicSession: {
    title: "<value>",
    startDate: "<value>",
    endDate: "<value>",
    type: "gradingPeriod",
    schoolYear: "<value>",
    org: {
      sourcedId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `academicSession`                                                                                            | [operations.PutAcademicSessionAcademicSession](../../models/operations/putacademicsessionacademicsession.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |