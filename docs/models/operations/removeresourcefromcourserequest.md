# RemoveResourceFromCourseRequest

## Example Usage

```typescript
import { RemoveResourceFromCourseRequest } from "oneroster/models/operations";

let value: RemoveResourceFromCourseRequest = {
  courseSourcedId: "<id>",
  resourceSourcedId: "<id>",
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `courseSourcedId`                       | *string*                                | :heavy_check_mark:                      | The sourcedId of the course             |
| `resourceSourcedId`                     | *string*                                | :heavy_check_mark:                      | The sourcedId of the resource to remove |