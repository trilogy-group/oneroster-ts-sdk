# GetAllDemographicsResponseBody

Demographics collection retrieved successfully

## Example Usage

```typescript
import { GetAllDemographicsResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetAllDemographicsResponseBody = {
  demographics: [
    {
      sourcedId: "<id>",
      status: "active",
      birthDate: "1966-05-20",
      sex: "male",
      americanIndianOrAlaskaNative: "<value>",
      asian: "<value>",
      blackOrAfricanAmerican: "<value>",
      nativeHawaiianOrOtherPacificIslander: "<value>",
      white: "<value>",
      demographicRaceTwoOrMoreRaces: "<value>",
      hispanicOrLatinoEthnicity: "<value>",
      countryOfBirthCode: "<value>",
      stateOfBirthAbbreviation: "<value>",
      cityOfBirth: "<value>",
      publicSchoolResidenceStatus: "<value>",
    },
  ],
  totalCount: 2285,
  pageCount: 3906.29,
  pageNumber: 4457.84,
  offset: 2555.22,
  limit: 5705.29,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `demographics`                                                       | [components.Demographics](../../models/components/demographics.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `totalCount`                                                         | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `pageCount`                                                          | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `pageNumber`                                                         | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `offset`                                                             | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `limit`                                                              | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |