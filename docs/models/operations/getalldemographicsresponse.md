# GetAllDemographicsResponse

## Example Usage

```typescript
import { GetAllDemographicsResponse } from "@superbuilders/oneroster/models/operations";

let value: GetAllDemographicsResponse = {
  result: {
    demographics: [
      {
        sourcedId: "<id>",
        status: "tobedeleted",
        birthDate: "1955-04-15",
        sex: "female",
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
    totalCount: 4395.58,
    pageCount: 3939.06,
    pageNumber: 6264.99,
    offset: 3367.85,
    limit: 8176.39,
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `result`                                                                                               | [operations.GetAllDemographicsResponseBody](../../models/operations/getalldemographicsresponsebody.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |