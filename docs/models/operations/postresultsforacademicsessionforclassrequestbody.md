# PostResultsForAcademicSessionForClassRequestBody

## Example Usage

```typescript
import { PostResultsForAcademicSessionForClassRequestBody } from "oneroster/models/operations";

let value: PostResultsForAcademicSessionForClassRequestBody = {
  results: [
    {
      status: "active",
      lineItem: {
        sourcedId: "<id>",
      },
      student: {
        sourcedId: "<id>",
      },
      scoreStatus: "submitted",
      scoreDate: new Date("2023-02-14T19:57:05.656Z"),
    },
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `results`                                                | [components.Result](../../models/components/result.md)[] | :heavy_check_mark:                                       | N/A                                                      |