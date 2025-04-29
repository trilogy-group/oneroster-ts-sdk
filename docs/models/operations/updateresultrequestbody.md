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
    scoreStatus: "not submitted",
    scoreDate: new Date("2023-08-11T11:09:46.535Z"),
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `result`                                               | [components.Result](../../models/components/result.md) | :heavy_check_mark:                                     | Represents a result.                                   |