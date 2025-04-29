# UpdateScoreScaleRequest

## Example Usage

```typescript
import { UpdateScoreScaleRequest } from "@superbuilders/oneroster/models/operations";

let value: UpdateScoreScaleRequest = {
  sourcedId: "<id>",
  requestBody: {
    scoreScale: {
      status: "tobedeleted",
      title: "<value>",
      type: "<value>",
      class: {
        sourcedId: "<id>",
      },
      scoreScaleValue: [
        {
          itemValueLHS: "<value>",
          itemValueRHS: "<value>",
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `sourcedId`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | The sourcedId of the score scale to update                                                       |
| `requestBody`                                                                                    | [operations.UpdateScoreScaleRequestBody](../../models/operations/updatescorescalerequestbody.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |