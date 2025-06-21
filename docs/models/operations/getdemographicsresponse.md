# GetDemographicsResponse

Demographics record retrieved successfully

## Example Usage

```typescript
import { GetDemographicsResponse } from "@superbuilders/oneroster/models/operations";

let value: GetDemographicsResponse = {
  demographics: {
    sourcedId: "<id>",
    status: "active",
    birthDate: "2003-12-08",
    sex: "female",
    americanIndianOrAlaskaNative: "<value>",
    asian: "<value>",
    blackOrAfricanAmerican: "<value>",
    nativeHawaiianOrOtherPacificIslander: null,
    white: "<value>",
    demographicRaceTwoOrMoreRaces: null,
    hispanicOrLatinoEthnicity: "<value>",
    countryOfBirthCode: "<value>",
    stateOfBirthAbbreviation: "<value>",
    cityOfBirth: null,
    publicSchoolResidenceStatus: "<value>",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `demographics`                                                     | [components.Demographics](../../models/components/demographics.md) | :heavy_check_mark:                                                 | Represents a student's demographics information.                   |