# AssignResourceToCourseRequest

## Example Usage

```typescript
import { AssignResourceToCourseRequest } from "oneroster/models/operations";

let value: AssignResourceToCourseRequest = {
  courseSourcedId: "<id>",
  requestBody: {
    resource: {
      sourcedId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `courseSourcedId`                                                                                            | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The sourcedId of the course                                                                                  |
| `requestBody`                                                                                                | [operations.AssignResourceToCourseRequestBody](../../models/operations/assignresourcetocourserequestbody.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |