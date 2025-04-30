# GetAllOrgsResponse

## Example Usage

```typescript
import { GetAllOrgsResponse } from "@superbuilders/oneroster/models/operations";

let value: GetAllOrgsResponse = {
  result: {
    orgs: [
      {
        sourcedId: "<id>",
        status: "active",
        name: "<value>",
        type: "state",
        identifier: "<value>",
        parent: {
          href: "https://another-lady.net",
          sourcedId: "<id>",
          type: "<value>",
        },
        children: [
          {
            href: "https://courteous-plastic.org/",
            sourcedId: "<id>",
            type: "<value>",
          },
        ],
      },
    ],
    totalCount: 3071.46,
    pageCount: 9945.97,
    pageNumber: 5087.66,
    offset: 8032.7,
    limit: 8559.45,
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `result`                                                                               | [operations.GetAllOrgsResponseBody](../../models/operations/getallorgsresponsebody.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |