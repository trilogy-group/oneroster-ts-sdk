# GetAllDemographicsResponse

Demographics collection retrieved successfully

## Example Usage

```typescript
import { GetAllDemographicsResponse } from "@superbuilders/oneroster/models/operations";

let value: GetAllDemographicsResponse = {
  demographics: [
    {
      sourcedId: "<id>",
      status: "tobedeleted",
      birthDate: "1955-08-13",
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
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `demographics`                                                       | [components.Demographics](../../models/components/demographics.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |