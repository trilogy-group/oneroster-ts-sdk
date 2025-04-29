# CreateGradingPeriodForTermRequest

## Example Usage

```typescript
import { CreateGradingPeriodForTermRequest } from "@superbuilders/oneroster/models/operations";

let value: CreateGradingPeriodForTermRequest = {
  termSourcedId: "<id>",
  requestBody: {
    academicSession: {
      title: "<value>",
      startDate: "<value>",
      endDate: "<value>",
      schoolYear: "<value>",
      org: {
        sourcedId: "<id>",
      },
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `termSourcedId`                                                                                                      | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The sourcedId of the term                                                                                            |
| `requestBody`                                                                                                        | [operations.CreateGradingPeriodForTermRequestBody](../../models/operations/creategradingperiodfortermrequestbody.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |