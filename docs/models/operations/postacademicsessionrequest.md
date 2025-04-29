# PostAcademicSessionRequest

## Example Usage

```typescript
import { PostAcademicSessionRequest } from "@superbuilders/oneroster/models/operations";

let value: PostAcademicSessionRequest = {
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

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `academicSession`                                                                                              | [operations.PostAcademicSessionAcademicSession](../../models/operations/postacademicsessionacademicsession.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |