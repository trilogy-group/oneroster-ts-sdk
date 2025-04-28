# GetAllCoursesResponse

## Example Usage

```typescript
import { GetAllCoursesResponse } from "oneroster/models/operations";

let value: GetAllCoursesResponse = {
  result: {
    courses: [
      {
        status: "active",
        title: "<value>",
        org: {
          sourcedId: "<id>",
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [operations.GetAllCoursesResponseBody](../../models/operations/getallcoursesresponsebody.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |