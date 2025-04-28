# GetAllOrgsResponse

## Example Usage

```typescript
import { GetAllOrgsResponse } from "oneroster/models/operations";

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
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `result`                                                                               | [operations.GetAllOrgsResponseBody](../../models/operations/getallorgsresponsebody.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |