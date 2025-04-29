# GetResultResponse

Successful response with the result

## Example Usage

```typescript
import { GetResultResponse } from "@superbuilders/oneroster/models/operations";

let value: GetResultResponse = {
  result: {
    status: "tobedeleted",
    lineItem: {
      sourcedId: "<id>",
    },
    student: {
      sourcedId: "<id>",
    },
    scoreStatus: "partially graded",
    scoreDate: new Date("2025-10-06T08:18:52.391Z"),
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `result`                                               | [components.Result](../../models/components/result.md) | :heavy_check_mark:                                     | Represents a result.                                   |