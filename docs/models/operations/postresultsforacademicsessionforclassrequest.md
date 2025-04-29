# PostResultsForAcademicSessionForClassRequest

## Example Usage

```typescript
import { PostResultsForAcademicSessionForClassRequest } from "@superbuilders/oneroster/models/operations";

let value: PostResultsForAcademicSessionForClassRequest = {
  classSourcedId: "<id>",
  academicSessionSourcedId: "<id>",
  requestBody: {
    results: [
      {
        status: "active",
        lineItem: {
          sourcedId: "<id>",
        },
        student: {
          sourcedId: "<id>",
        },
        scoreStatus: "fully graded",
        scoreDate: new Date("2025-01-06T04:32:10.374Z"),
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `classSourcedId`                                                                                                                           | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | The sourcedId of the class                                                                                                                 |
| `academicSessionSourcedId`                                                                                                                 | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | The sourcedId of the academic session                                                                                                      |
| `requestBody`                                                                                                                              | [operations.PostResultsForAcademicSessionForClassRequestBody](../../models/operations/postresultsforacademicsessionforclassrequestbody.md) | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |