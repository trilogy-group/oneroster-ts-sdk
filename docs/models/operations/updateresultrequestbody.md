# UpdateResultRequestBody

## Example Usage

```typescript
import { UpdateResultRequestBody } from "@superbuilders/oneroster/models/operations";

let value: UpdateResultRequestBody = {
  result: {
    status: "active",
    lineItem: {
      sourcedId: "<id>",
    },
    student: {
      sourcedId: "<id>",
    },
    scoreStatus: "exempt",
    scoreDate: new Date("2025-12-18T02:39:54.603Z"),
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `result`                                               | [components.Result](../../models/components/result.md) | :heavy_check_mark:                                     | Represents a result.                                   |