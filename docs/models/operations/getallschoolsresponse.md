# GetAllSchoolsResponse

## Example Usage

```typescript
import { GetAllSchoolsResponse } from "@superbuilders/oneroster/models/operations";

let value: GetAllSchoolsResponse = {
  result: {
    orgs: [
      {
        sourcedId: "<id>",
        status: "tobedeleted",
        name: "<value>",
        type: "local",
        identifier: "<value>",
        parent: {
          href: "https://speedy-stranger.name/",
          sourcedId: "<id>",
          type: "<value>",
        },
        children: [
          {
            href: "https://ragged-recovery.biz/",
            sourcedId: "<id>",
            type: "<value>",
          },
        ],
      },
    ],
    totalCount: 470.02,
    pageCount: 5436.45,
    pageNumber: 5460.15,
    offset: 5196.41,
    limit: 889.27,
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [operations.GetAllSchoolsResponseBody](../../models/operations/getallschoolsresponsebody.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |