# AddStudentToClassResponse

Student successfully enrolled in class

## Example Usage

```typescript
import { AddStudentToClassResponse } from "@superbuilders/oneroster/models/operations";

let value: AddStudentToClassResponse = {
  sourcedIdPairs: {
    suppliedSourcedId: "<id>",
    allocatedSourcedId: "<id>",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `sourcedIdPairs`                                                                                         | [operations.AddStudentToClassSourcedIdPairs](../../models/operations/addstudenttoclasssourcedidpairs.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |