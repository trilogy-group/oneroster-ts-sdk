# Demographics

Represents a student's demographics information.

## Example Usage

```typescript
import { Demographics } from "@superbuilders/oneroster/models/components";

let value: Demographics = {
  sourcedId: "<id>",
  status: "active",
  birthDate: "2004-07-14",
  sex: "other",
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
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `sourcedId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [components.DemographicsStatus](../../models/components/demographicsstatus.md)                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `dateLastModified`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `birthDate`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `sex`                                                                                         | [components.Sex](../../models/components/sex.md)                                              | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `americanIndianOrAlaskaNative`                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `asian`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `blackOrAfricanAmerican`                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `nativeHawaiianOrOtherPacificIslander`                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `white`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `demographicRaceTwoOrMoreRaces`                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `hispanicOrLatinoEthnicity`                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `countryOfBirthCode`                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `stateOfBirthAbbreviation`                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `cityOfBirth`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `publicSchoolResidenceStatus`                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |