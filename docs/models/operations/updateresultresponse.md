# UpdateResultResponse

Result successfully updated

## Example Usage

```typescript
import { UpdateResultResponse } from "oneroster/models/operations";

let value: UpdateResultResponse = {
  result: {
    status: "active",
    lineItem: {
      sourcedId: "<id>",
    },
    student: {
      sourcedId: "<id>",
    },
    scoreStatus: "fully graded",
    scoreDate: new Date("2025-01-14T09:01:17.191Z"),
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `result`                                               | [components.Result](../../models/components/result.md) | :heavy_check_mark:                                     | Represents a result.                                   |