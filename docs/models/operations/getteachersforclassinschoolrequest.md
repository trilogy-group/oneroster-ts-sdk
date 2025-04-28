# GetTeachersForClassInSchoolRequest

## Example Usage

```typescript
import { GetTeachersForClassInSchoolRequest } from "oneroster/models/operations";

let value: GetTeachersForClassInSchoolRequest = {
  schoolSourcedId: "<id>",
  classSourcedId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `schoolSourcedId`  | *string*           | :heavy_check_mark: | School sourced ID  |
| `classSourcedId`   | *string*           | :heavy_check_mark: | Class sourced ID   |