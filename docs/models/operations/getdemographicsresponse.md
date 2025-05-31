# GetDemographicsResponse

Demographics record retrieved successfully

## Example Usage

```typescript
import { GetDemographicsResponse } from "@superbuilders/oneroster/models/operations";

let value: GetDemographicsResponse = {
  demographics: {
    sourcedId: "<id>",
    status: "active",
    birthDate: "1965-02-26",
    sex: "unspecified",
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
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `demographics`                                                     | [components.Demographics](../../models/components/demographics.md) | :heavy_check_mark:                                                 | Represents a student's demographics information.                   |