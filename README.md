# oneroster

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *oneroster* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=oneroster&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

<!-- Start Summary [summary] -->
## Summary

OneRoster API: # Authentication

All endpoints require authentication using the `Authorization: Bearer <token>` header.

The token can be obtained with:

```
curl -X POST https://alpha-auth-development-idp.auth.us-west-2.amazoncognito.com/oauth2/token \
-H "Content-Type: application/x-www-form-urlencoded" \
-d "grant_type=client_credentials&client_id=<your-client-id>&client_secret=<your-client-secret>"
```

Use the correct IDP server depending on the environment you're using:

- Production Server:

  https://alpha-auth-production-idp.auth.us-west-2.amazoncognito.com
- Staging Server:

  https://alpha-auth-development-idp.auth.us-west-2.amazoncognito.com

Reach out to the platform team to get a client/secret pair for your application.

# Pagination

Our API uses offset pagination for list endpoints. Paginated responses include the following fields:

- `offset`: Offset for the next page of results
- `limit`: Number of items per page (default: 100)

Example request:

```
GET /ims/oneroster/rostering/v1p2/users?offset=20&limit=20
```

All listing endpoints support offset pagination.

# Filtering

All listing endpoints support filtering using the `filter` query parameter, following 1EdTech's filtering specification.

The filter should be a string with the following format:

```
?filter=[field][operator][value]
```

Example request:

```
GET /ims/oneroster/rostering/v1p2/users?filter=status='active'
```

Example request with multiple filters:

```
GET /ims/oneroster/rostering/v1p2/users?filter=status='active' AND name='John'
```

**Filtering by nested relations is not supported**.

# Sorting

All listing endpoints support sorting using the `sort` and `orderBy` query parameters, following 1EdTech's sorting specification

Example request:

```
GET /ims/oneroster/rostering/v1p2/users?sort=lastName&orderBy=asc
```
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [oneroster](#oneroster)
* [Pagination](#pagination)
* [Filtering](#filtering)
* [Sorting](#sorting)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Pagination](#pagination-1)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @superbuilders/oneroster
```

### PNPM

```bash
pnpm add @superbuilders/oneroster
```

### Bun

```bash
bun add @superbuilders/oneroster
```

### Yarn

```bash
yarn add @superbuilders/oneroster zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.


### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

> Node.js v20 or greater is required to run the MCP server from npm.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "OneRoster": {
      "command": "npx",
      "args": [
        "-y", "--package", "@superbuilders/oneroster",
        "--",
        "mcp", "start",
        "--o-auth2", "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Create a `.cursor/mcp.json` file in your project root with the following content:

```json
{
  "mcpServers": {
    "OneRoster": {
      "command": "npx",
      "args": [
        "-y", "--package", "@superbuilders/oneroster",
        "--",
        "mcp", "start",
        "--o-auth2", "..."
      ]
    }
  }
}
```

</details>

You can also run MCP servers as a standalone binary with no additional dependencies. You must pull these binaries from available Github releases:

```bash
curl -L -o mcp-server \
    https://github.com/{org}/{repo}/releases/download/{tag}/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

If the repo is a private repo you must add your Github PAT to download a release `-H "Authorization: Bearer {GITHUB_PAT}"`.


```json
{
  "mcpServers": {
    "Todos": {
      "command": "./DOWNLOAD/PATH/mcp-server",
      "args": [
        "start"
      ]
    }
  }
}
```

For a full list of server arguments, run:

```sh
npx -y --package @superbuilders/oneroster -- mcp start --help
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { OneRoster } from "@superbuilders/oneroster";

const oneRoster = new OneRoster({
  oAuth2: process.env["ONEROSTER_O_AUTH2"] ?? "",
});

async function run() {
  const result = await oneRoster.scoreScalesManagement.getAllScoreScales({
    fields: "sourcedId,name",
    filter: "status='active'",
  });

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name     | Type   | Scheme       | Environment Variable |
| -------- | ------ | ------------ | -------------------- |
| `oAuth2` | oauth2 | OAuth2 token | `ONEROSTER_O_AUTH2`  |

To authenticate with the API the `oAuth2` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { OneRoster } from "@superbuilders/oneroster";

const oneRoster = new OneRoster({
  oAuth2: process.env["ONEROSTER_O_AUTH2"] ?? "",
});

async function run() {
  const result = await oneRoster.scoreScalesManagement.getAllScoreScales({
    fields: "sourcedId,name",
    filter: "status='active'",
  });

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [academicSessionsManagement](docs/sdks/academicsessionsmanagement/README.md)

* [getAllAcademicSessions](docs/sdks/academicsessionsmanagement/README.md#getallacademicsessions) - Get all Academic Sessions
* [postAcademicSession](docs/sdks/academicsessionsmanagement/README.md#postacademicsession) - Create an Academic Session
* [getAcademicSession](docs/sdks/academicsessionsmanagement/README.md#getacademicsession) - Get a specific Academic Session
* [putAcademicSession](docs/sdks/academicsessionsmanagement/README.md#putacademicsession) - Update an Academic Session
* [deleteAcademicSession](docs/sdks/academicsessionsmanagement/README.md#deleteacademicsession) - Delete an Academic Session

### [assessmentLineItemsManagement](docs/sdks/assessmentlineitemsmanagement/README.md)

* [getAllAssessmentLineItems](docs/sdks/assessmentlineitemsmanagement/README.md#getallassessmentlineitems) - Get all Assessment Line Items
* [createAssessmentLineItem](docs/sdks/assessmentlineitemsmanagement/README.md#createassessmentlineitem) - Create an Assessment Line Item
* [getAssessmentLineItem](docs/sdks/assessmentlineitemsmanagement/README.md#getassessmentlineitem) - Get an Assessment Line Item
* [updateAssessmentLineItem](docs/sdks/assessmentlineitemsmanagement/README.md#updateassessmentlineitem) - Update an Assessment Line Item
* [deleteAssessmentLineItem](docs/sdks/assessmentlineitemsmanagement/README.md#deleteassessmentlineitem) - Delete an Assessment Line Item

### [assessmentResultsManagement](docs/sdks/assessmentresultsmanagement/README.md)

* [getAllAssessmentResults](docs/sdks/assessmentresultsmanagement/README.md#getallassessmentresults) - Get all Assessment Results
* [createAssessmentResult](docs/sdks/assessmentresultsmanagement/README.md#createassessmentresult) - Create an Assessment Result
* [getAssessmentResult](docs/sdks/assessmentresultsmanagement/README.md#getassessmentresult) - Get an Assessment Result
* [updateAssessmentResult](docs/sdks/assessmentresultsmanagement/README.md#updateassessmentresult) - Update an Assessment Result
* [deleteAssessmentResult](docs/sdks/assessmentresultsmanagement/README.md#deleteassessmentresult) - Delete an Assessment Result

### [categoriesManagement](docs/sdks/categoriesmanagement/README.md)

* [getAllCategories](docs/sdks/categoriesmanagement/README.md#getallcategories) - Get all Categories
* [createCategory](docs/sdks/categoriesmanagement/README.md#createcategory) - Create a Category
* [getCategory](docs/sdks/categoriesmanagement/README.md#getcategory) - Get a Category
* [updateCategory](docs/sdks/categoriesmanagement/README.md#updatecategory) - Update a Category
* [deleteCategory](docs/sdks/categoriesmanagement/README.md#deletecategory) - Delete a Category

### [classesManagement](docs/sdks/classesmanagement/README.md)

* [postResultsForAcademicSessionForClass](docs/sdks/classesmanagement/README.md#postresultsforacademicsessionforclass) - Create Results for an Academic Session for a Class
* [getResultsForLineItemForClass](docs/sdks/classesmanagement/README.md#getresultsforlineitemforclass) - Get Results for a Line Item for a Class
* [getResultsForStudentForClass](docs/sdks/classesmanagement/README.md#getresultsforstudentforclass) - Get Results for a Student for a Class
* [getCategoriesForClass](docs/sdks/classesmanagement/README.md#getcategoriesforclass) - Get Categories for a Class
* [getLineItemsForClass](docs/sdks/classesmanagement/README.md#getlineitemsforclass) - Get Line Items for a Class
* [getResultsForClass](docs/sdks/classesmanagement/README.md#getresultsforclass) - Get Results for a Class
* [getScoreScalesForClass](docs/sdks/classesmanagement/README.md#getscorescalesforclass) - Get Score Scales for a Class
* [getAllClasses](docs/sdks/classesmanagement/README.md#getallclasses) - Get all Classes
* [createClass](docs/sdks/classesmanagement/README.md#createclass) - Create a new Class
* [getClass](docs/sdks/classesmanagement/README.md#getclass) - Get a specific class
* [updateClass](docs/sdks/classesmanagement/README.md#updateclass) - Update a Class
* [deleteClass](docs/sdks/classesmanagement/README.md#deleteclass) - Delete a Class
* [getClassesForSchool](docs/sdks/classesmanagement/README.md#getclassesforschool) - Get all Classes for a School
* [getClassesForUser](docs/sdks/classesmanagement/README.md#getclassesforuser) - Get Classes for a User
* [getClassesForTerm](docs/sdks/classesmanagement/README.md#getclassesforterm) - Get Classes for a Term
* [getTeachersForClass](docs/sdks/classesmanagement/README.md#getteachersforclass) - Get teachers for a Class
* [addTeacherToClass](docs/sdks/classesmanagement/README.md#addteachertoclass) - Add a teacher to a Class
* [getClassesForTeacher](docs/sdks/classesmanagement/README.md#getclassesforteacher) - Get Classes for a Teacher
* [getStudentsForClass](docs/sdks/classesmanagement/README.md#getstudentsforclass) - Get students for a Class
* [addStudentToClass](docs/sdks/classesmanagement/README.md#addstudenttoclass) - Add a student to a Class
* [getClassesForStudent](docs/sdks/classesmanagement/README.md#getclassesforstudent) - Get Classes for a Student

### [courseComponentResourcesManagement](docs/sdks/coursecomponentresourcesmanagement/README.md)

* [createComponentResource](docs/sdks/coursecomponentresourcesmanagement/README.md#createcomponentresource) - Create Component Resource
* [getAllComponentResources](docs/sdks/coursecomponentresourcesmanagement/README.md#getallcomponentresources) - Get all Component Resources
* [getComponentResource](docs/sdks/coursecomponentresourcesmanagement/README.md#getcomponentresource) - Get a specific Component Resource
* [putComponentResource](docs/sdks/coursecomponentresourcesmanagement/README.md#putcomponentresource) - Update a Component Resource
* [deleteComponentResource](docs/sdks/coursecomponentresourcesmanagement/README.md#deletecomponentresource) - Delete a Component Resource

### [courseComponentsManagement](docs/sdks/coursecomponentsmanagement/README.md)

* [createCourseComponent](docs/sdks/coursecomponentsmanagement/README.md#createcoursecomponent) - Create Course Component
* [getAllCourseComponents](docs/sdks/coursecomponentsmanagement/README.md#getallcoursecomponents) - Get all Course Components
* [getCourseComponent](docs/sdks/coursecomponentsmanagement/README.md#getcoursecomponent) - Get a specific Course Component
* [putCourseComponent](docs/sdks/coursecomponentsmanagement/README.md#putcoursecomponent) - Update a Course Component
* [deleteCourseComponent](docs/sdks/coursecomponentsmanagement/README.md#deletecoursecomponent) - Delete a Course Component

### [coursesManagement](docs/sdks/coursesmanagement/README.md)

* [getAllCourses](docs/sdks/coursesmanagement/README.md#getallcourses) - Get All Courses
* [createCourse](docs/sdks/coursesmanagement/README.md#createcourse) - Create a Course
* [getClassesForCourse](docs/sdks/coursesmanagement/README.md#getclassesforcourse) - Get Classes for a Course
* [getCourse](docs/sdks/coursesmanagement/README.md#getcourse) - Get a specific Course
* [putCourse](docs/sdks/coursesmanagement/README.md#putcourse) - Update a Course
* [deleteCourse](docs/sdks/coursesmanagement/README.md#deletecourse) - Delete a Course
* [createComponentResource](docs/sdks/coursesmanagement/README.md#createcomponentresource) - Create Component Resource
* [getAllComponentResources](docs/sdks/coursesmanagement/README.md#getallcomponentresources) - Get all Component Resources
* [getComponentResource](docs/sdks/coursesmanagement/README.md#getcomponentresource) - Get a specific Component Resource
* [putComponentResource](docs/sdks/coursesmanagement/README.md#putcomponentresource) - Update a Component Resource
* [deleteComponentResource](docs/sdks/coursesmanagement/README.md#deletecomponentresource) - Delete a Component Resource
* [createCourseComponent](docs/sdks/coursesmanagement/README.md#createcoursecomponent) - Create Course Component
* [getAllCourseComponents](docs/sdks/coursesmanagement/README.md#getallcoursecomponents) - Get all Course Components
* [getCourseComponent](docs/sdks/coursesmanagement/README.md#getcoursecomponent) - Get a specific Course Component
* [putCourseComponent](docs/sdks/coursesmanagement/README.md#putcoursecomponent) - Update a Course Component
* [deleteCourseComponent](docs/sdks/coursesmanagement/README.md#deletecoursecomponent) - Delete a Course Component
* [getCoursesForSchool](docs/sdks/coursesmanagement/README.md#getcoursesforschool) - Get all Courses for a School

### [demographicsManagement](docs/sdks/demographicsmanagement/README.md)

* [getAllDemographics](docs/sdks/demographicsmanagement/README.md#getalldemographics) - Get all Demographic records
* [postDemographics](docs/sdks/demographicsmanagement/README.md#postdemographics) - Create a new Demographic record
* [getDemographics](docs/sdks/demographicsmanagement/README.md#getdemographics) - Get a specific Demographic record
* [putDemographics](docs/sdks/demographicsmanagement/README.md#putdemographics) - Update a Demographic record
* [deleteDemographics](docs/sdks/demographicsmanagement/README.md#deletedemographics) - Delete a Demographic record

### [enrollmentsManagement](docs/sdks/enrollmentsmanagement/README.md)

* [getAllEnrollments](docs/sdks/enrollmentsmanagement/README.md#getallenrollments) - Get all Enrollments
* [createEnrollment](docs/sdks/enrollmentsmanagement/README.md#createenrollment) - Create a new Enrollment
* [getEnrollment](docs/sdks/enrollmentsmanagement/README.md#getenrollment) - Get a specific Enrollment
* [updateEnrollment](docs/sdks/enrollmentsmanagement/README.md#updateenrollment) - Update an Enrollment
* [deleteEnrollment](docs/sdks/enrollmentsmanagement/README.md#deleteenrollment) - Delete an Enrollment
* [getEnrollmentsForClassInSchool](docs/sdks/enrollmentsmanagement/README.md#getenrollmentsforclassinschool) - Get Enrollments for a specific Class in a School
* [getEnrollmentsForSchool](docs/sdks/enrollmentsmanagement/README.md#getenrollmentsforschool) - Get all Enrollments for a School

### [gradingPeriodsManagement](docs/sdks/gradingperiodsmanagement/README.md)

* [getAllGradingPeriods](docs/sdks/gradingperiodsmanagement/README.md#getallgradingperiods) - Get all Grading Periods
* [createGradingPeriod](docs/sdks/gradingperiodsmanagement/README.md#creategradingperiod) - Create a new Grading Period
* [getGradingPeriod](docs/sdks/gradingperiodsmanagement/README.md#getgradingperiod) - Get a specific Grading Period
* [updateGradingPeriod](docs/sdks/gradingperiodsmanagement/README.md#updategradingperiod) - Update a Grading Period
* [deleteGradingPeriod](docs/sdks/gradingperiodsmanagement/README.md#deletegradingperiod) - Delete a Grading Period
* [getGradingPeriodsForTerm](docs/sdks/gradingperiodsmanagement/README.md#getgradingperiodsforterm) - Get Grading Periods for a Term
* [createGradingPeriodForTerm](docs/sdks/gradingperiodsmanagement/README.md#creategradingperiodforterm) - Create a new Grading Period for a Term

### [lineItemsManagement](docs/sdks/lineitemsmanagement/README.md)

* [getAllLineItems](docs/sdks/lineitemsmanagement/README.md#getalllineitems) - Get all Line Items
* [createLineItem](docs/sdks/lineitemsmanagement/README.md#createlineitem) - Create a Line Item
* [getLineItem](docs/sdks/lineitemsmanagement/README.md#getlineitem) - Get a Line Item
* [updateLineItem](docs/sdks/lineitemsmanagement/README.md#updatelineitem) - Update a Line Item
* [deleteLineItem](docs/sdks/lineitemsmanagement/README.md#deletelineitem) - Delete a Line Item
* [createResultForLineItem](docs/sdks/lineitemsmanagement/README.md#createresultforlineitem) - Create a Result for a Line Item
* [getLineItemsForSchool](docs/sdks/lineitemsmanagement/README.md#getlineitemsforschool) - Get Line Items for a School
* [createLineItemsForSchool](docs/sdks/lineitemsmanagement/README.md#createlineitemsforschool) - Create Line Items for a School


### [organizationsManagement](docs/sdks/organizationsmanagement/README.md)

* [getAllOrgs](docs/sdks/organizationsmanagement/README.md#getallorgs) - Get all Organizations
* [createOrg](docs/sdks/organizationsmanagement/README.md#createorg) - Create an Organization
* [getOrg](docs/sdks/organizationsmanagement/README.md#getorg) - Get a specific Organization
* [updateOrg](docs/sdks/organizationsmanagement/README.md#updateorg) - Update an Organization
* [deleteOrg](docs/sdks/organizationsmanagement/README.md#deleteorg) - Delete an Organization

### [resourcesClassesManagement](docs/sdks/resourcesclassesmanagement/README.md)

* [getResourcesForClass](docs/sdks/resourcesclassesmanagement/README.md#getresourcesforclass) - Get resources for a class
* [assignResourceToClass](docs/sdks/resourcesclassesmanagement/README.md#assignresourcetoclass) - Assign a resource to a class
* [removeResourceFromClass](docs/sdks/resourcesclassesmanagement/README.md#removeresourcefromclass) - Remove a resource from a class

### [resourcesCoursesManagement](docs/sdks/resourcescoursesmanagement/README.md)

* [getResourcesForCourse](docs/sdks/resourcescoursesmanagement/README.md#getresourcesforcourse) - Get resources for a course
* [assignResourceToCourse](docs/sdks/resourcescoursesmanagement/README.md#assignresourcetocourse) - Assign a resource to a course
* [removeResourceFromCourse](docs/sdks/resourcescoursesmanagement/README.md#removeresourcefromcourse) - Remove a resource from a course

### [resourcesManagement](docs/sdks/resourcesmanagement/README.md)

* [getAllResources](docs/sdks/resourcesmanagement/README.md#getallresources) - Get all Resources
* [createResource](docs/sdks/resourcesmanagement/README.md#createresource) - Create a new Resource
* [getResource](docs/sdks/resourcesmanagement/README.md#getresource) - Get a specific Resource
* [updateResource](docs/sdks/resourcesmanagement/README.md#updateresource) - Update an existing Resource
* [deleteResource](docs/sdks/resourcesmanagement/README.md#deleteresource) - Delete a resource

### [resourcesUsersManagement](docs/sdks/resourcesusersmanagement/README.md)

* [getResourcesForUser](docs/sdks/resourcesusersmanagement/README.md#getresourcesforuser) - Get resources for a user
* [assignResourceToUser](docs/sdks/resourcesusersmanagement/README.md#assignresourcetouser) - Assign a resource to a user
* [removeResourceFromUser](docs/sdks/resourcesusersmanagement/README.md#removeresourcefromuser) - Remove a resource from a user

### [resultsManagement](docs/sdks/resultsmanagement/README.md)

* [getAllResults](docs/sdks/resultsmanagement/README.md#getallresults) - Get all Results
* [createResult](docs/sdks/resultsmanagement/README.md#createresult) - Create a Result
* [getResult](docs/sdks/resultsmanagement/README.md#getresult) - Get a Result
* [updateResult](docs/sdks/resultsmanagement/README.md#updateresult) - Update a Result
* [deleteResult](docs/sdks/resultsmanagement/README.md#deleteresult) - Delete a Result

### [schoolsManagement](docs/sdks/schoolsmanagement/README.md)

* [getScoreScalesForSchool](docs/sdks/schoolsmanagement/README.md#getscorescalesforschool) - Get Score Scales for a School
* [getAllSchools](docs/sdks/schoolsmanagement/README.md#getallschools) - Get all Schools
* [createSchool](docs/sdks/schoolsmanagement/README.md#createschool) - Create a new School
* [getSchool](docs/sdks/schoolsmanagement/README.md#getschool) - Get a specific School
* [updateSchool](docs/sdks/schoolsmanagement/README.md#updateschool) - Update a School
* [deleteSchool](docs/sdks/schoolsmanagement/README.md#deleteschool) - Delete a School
* [getLineItemsForSchool](docs/sdks/schoolsmanagement/README.md#getlineitemsforschool) - Get Line Items for a School
* [createLineItemsForSchool](docs/sdks/schoolsmanagement/README.md#createlineitemsforschool) - Create Line Items for a School
* [getClassesForSchool](docs/sdks/schoolsmanagement/README.md#getclassesforschool) - Get all Classes for a School
* [getTermsForSchool](docs/sdks/schoolsmanagement/README.md#gettermsforschool) - Get all Terms for a School
* [getTeachersForClassInSchool](docs/sdks/schoolsmanagement/README.md#getteachersforclassinschool) - Get Teachers for a specific Class in a School
* [getTeachersForSchool](docs/sdks/schoolsmanagement/README.md#getteachersforschool) - Get all teachers for a school
* [getStudentsForClassInSchool](docs/sdks/schoolsmanagement/README.md#getstudentsforclassinschool) - Get Students for a specific Class in a School
* [getStudentsForSchool](docs/sdks/schoolsmanagement/README.md#getstudentsforschool) - Get all Students for a School
* [getEnrollmentsForClassInSchool](docs/sdks/schoolsmanagement/README.md#getenrollmentsforclassinschool) - Get Enrollments for a specific Class in a School
* [getEnrollmentsForSchool](docs/sdks/schoolsmanagement/README.md#getenrollmentsforschool) - Get all Enrollments for a School
* [getCoursesForSchool](docs/sdks/schoolsmanagement/README.md#getcoursesforschool) - Get all Courses for a School

### [scoreScalesManagement](docs/sdks/scorescalesmanagement/README.md)

* [getAllScoreScales](docs/sdks/scorescalesmanagement/README.md#getallscorescales) - Get all Score Scales
* [createScoreScale](docs/sdks/scorescalesmanagement/README.md#createscorescale) - Create a Score Scale
* [getScoreScale](docs/sdks/scorescalesmanagement/README.md#getscorescale) - Get a Score Scale
* [updateScoreScale](docs/sdks/scorescalesmanagement/README.md#updatescorescale) - Update a Score Scale
* [deleteScoreScale](docs/sdks/scorescalesmanagement/README.md#deletescorescale) - Delete a Score Scale
* [getScoreScalesForSchool](docs/sdks/scorescalesmanagement/README.md#getscorescalesforschool) - Get Score Scales for a School

### [studentsManagement](docs/sdks/studentsmanagement/README.md)

* [getStudentsForClass](docs/sdks/studentsmanagement/README.md#getstudentsforclass) - Get students for a Class
* [addStudentToClass](docs/sdks/studentsmanagement/README.md#addstudenttoclass) - Add a student to a Class
* [getStudentsForClassInSchool](docs/sdks/studentsmanagement/README.md#getstudentsforclassinschool) - Get Students for a specific Class in a School
* [getStudentsForSchool](docs/sdks/studentsmanagement/README.md#getstudentsforschool) - Get all Students for a School
* [getAllStudents](docs/sdks/studentsmanagement/README.md#getallstudents) - Get all Students
* [getStudent](docs/sdks/studentsmanagement/README.md#getstudent) - Get a specific Student
* [getClassesForStudent](docs/sdks/studentsmanagement/README.md#getclassesforstudent) - Get Classes for a Student

### [teachersManagement](docs/sdks/teachersmanagement/README.md)

* [getTeachersForClass](docs/sdks/teachersmanagement/README.md#getteachersforclass) - Get teachers for a Class
* [addTeacherToClass](docs/sdks/teachersmanagement/README.md#addteachertoclass) - Add a teacher to a Class
* [getTeachersForClassInSchool](docs/sdks/teachersmanagement/README.md#getteachersforclassinschool) - Get Teachers for a specific Class in a School
* [getTeachersForSchool](docs/sdks/teachersmanagement/README.md#getteachersforschool) - Get all teachers for a school
* [getAllTeachers](docs/sdks/teachersmanagement/README.md#getallteachers) - Get all Teachers
* [getTeacher](docs/sdks/teachersmanagement/README.md#getteacher) - Get a specific Teacher
* [getClassesForTeacher](docs/sdks/teachersmanagement/README.md#getclassesforteacher) - Get Classes for a Teacher

### [termsManagement](docs/sdks/termsmanagement/README.md)

* [getTermsForSchool](docs/sdks/termsmanagement/README.md#gettermsforschool) - Get all Terms for a School
* [getAllTerms](docs/sdks/termsmanagement/README.md#getallterms) - Get all Terms
* [getTerm](docs/sdks/termsmanagement/README.md#getterm) - Get a specific Term
* [getClassesForTerm](docs/sdks/termsmanagement/README.md#getclassesforterm) - Get Classes for a Term
* [getGradingPeriodsForTerm](docs/sdks/termsmanagement/README.md#getgradingperiodsforterm) - Get Grading Periods for a Term
* [createGradingPeriodForTerm](docs/sdks/termsmanagement/README.md#creategradingperiodforterm) - Create a new Grading Period for a Term

### [usersManagement](docs/sdks/usersmanagement/README.md)

* [getAllUsers](docs/sdks/usersmanagement/README.md#getallusers) - Get all Users
* [createUser](docs/sdks/usersmanagement/README.md#createuser) - Create a new User
* [getUser](docs/sdks/usersmanagement/README.md#getuser) - Get a specific User
* [updateUser](docs/sdks/usersmanagement/README.md#updateuser) - Update an existing User
* [deleteUser](docs/sdks/usersmanagement/README.md#deleteuser) - Delete a User
* [getClassesForUser](docs/sdks/usersmanagement/README.md#getclassesforuser) - Get Classes for a User

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`academicSessionsManagementDeleteAcademicSession`](docs/sdks/academicsessionsmanagement/README.md#deleteacademicsession) - Delete an Academic Session
- [`academicSessionsManagementGetAcademicSession`](docs/sdks/academicsessionsmanagement/README.md#getacademicsession) - Get a specific Academic Session
- [`academicSessionsManagementGetAllAcademicSessions`](docs/sdks/academicsessionsmanagement/README.md#getallacademicsessions) - Get all Academic Sessions
- [`academicSessionsManagementPostAcademicSession`](docs/sdks/academicsessionsmanagement/README.md#postacademicsession) - Create an Academic Session
- [`academicSessionsManagementPutAcademicSession`](docs/sdks/academicsessionsmanagement/README.md#putacademicsession) - Update an Academic Session
- [`assessmentLineItemsManagementCreateAssessmentLineItem`](docs/sdks/assessmentlineitemsmanagement/README.md#createassessmentlineitem) - Create an Assessment Line Item
- [`assessmentLineItemsManagementDeleteAssessmentLineItem`](docs/sdks/assessmentlineitemsmanagement/README.md#deleteassessmentlineitem) - Delete an Assessment Line Item
- [`assessmentLineItemsManagementGetAllAssessmentLineItems`](docs/sdks/assessmentlineitemsmanagement/README.md#getallassessmentlineitems) - Get all Assessment Line Items
- [`assessmentLineItemsManagementGetAssessmentLineItem`](docs/sdks/assessmentlineitemsmanagement/README.md#getassessmentlineitem) - Get an Assessment Line Item
- [`assessmentLineItemsManagementUpdateAssessmentLineItem`](docs/sdks/assessmentlineitemsmanagement/README.md#updateassessmentlineitem) - Update an Assessment Line Item
- [`assessmentResultsManagementCreateAssessmentResult`](docs/sdks/assessmentresultsmanagement/README.md#createassessmentresult) - Create an Assessment Result
- [`assessmentResultsManagementDeleteAssessmentResult`](docs/sdks/assessmentresultsmanagement/README.md#deleteassessmentresult) - Delete an Assessment Result
- [`assessmentResultsManagementGetAllAssessmentResults`](docs/sdks/assessmentresultsmanagement/README.md#getallassessmentresults) - Get all Assessment Results
- [`assessmentResultsManagementGetAssessmentResult`](docs/sdks/assessmentresultsmanagement/README.md#getassessmentresult) - Get an Assessment Result
- [`assessmentResultsManagementUpdateAssessmentResult`](docs/sdks/assessmentresultsmanagement/README.md#updateassessmentresult) - Update an Assessment Result
- [`categoriesManagementCreateCategory`](docs/sdks/categoriesmanagement/README.md#createcategory) - Create a Category
- [`categoriesManagementDeleteCategory`](docs/sdks/categoriesmanagement/README.md#deletecategory) - Delete a Category
- [`categoriesManagementGetAllCategories`](docs/sdks/categoriesmanagement/README.md#getallcategories) - Get all Categories
- [`categoriesManagementGetCategory`](docs/sdks/categoriesmanagement/README.md#getcategory) - Get a Category
- [`categoriesManagementUpdateCategory`](docs/sdks/categoriesmanagement/README.md#updatecategory) - Update a Category
- [`classesManagementAddStudentToClass`](docs/sdks/classesmanagement/README.md#addstudenttoclass) - Add a student to a Class
- [`classesManagementAddTeacherToClass`](docs/sdks/classesmanagement/README.md#addteachertoclass) - Add a teacher to a Class
- [`classesManagementCreateClass`](docs/sdks/classesmanagement/README.md#createclass) - Create a new Class
- [`classesManagementDeleteClass`](docs/sdks/classesmanagement/README.md#deleteclass) - Delete a Class
- [`classesManagementGetAllClasses`](docs/sdks/classesmanagement/README.md#getallclasses) - Get all Classes
- [`classesManagementGetCategoriesForClass`](docs/sdks/classesmanagement/README.md#getcategoriesforclass) - Get Categories for a Class
- [`classesManagementGetClass`](docs/sdks/classesmanagement/README.md#getclass) - Get a specific class
- [`classesManagementGetClassesForSchool`](docs/sdks/classesmanagement/README.md#getclassesforschool) - Get all Classes for a School
- [`classesManagementGetClassesForStudent`](docs/sdks/classesmanagement/README.md#getclassesforstudent) - Get Classes for a Student
- [`classesManagementGetClassesForTeacher`](docs/sdks/classesmanagement/README.md#getclassesforteacher) - Get Classes for a Teacher
- [`classesManagementGetClassesForTerm`](docs/sdks/classesmanagement/README.md#getclassesforterm) - Get Classes for a Term
- [`classesManagementGetClassesForUser`](docs/sdks/classesmanagement/README.md#getclassesforuser) - Get Classes for a User
- [`classesManagementGetLineItemsForClass`](docs/sdks/classesmanagement/README.md#getlineitemsforclass) - Get Line Items for a Class
- [`classesManagementGetResultsForClass`](docs/sdks/classesmanagement/README.md#getresultsforclass) - Get Results for a Class
- [`classesManagementGetResultsForLineItemForClass`](docs/sdks/classesmanagement/README.md#getresultsforlineitemforclass) - Get Results for a Line Item for a Class
- [`classesManagementGetResultsForStudentForClass`](docs/sdks/classesmanagement/README.md#getresultsforstudentforclass) - Get Results for a Student for a Class
- [`classesManagementGetScoreScalesForClass`](docs/sdks/classesmanagement/README.md#getscorescalesforclass) - Get Score Scales for a Class
- [`classesManagementGetStudentsForClass`](docs/sdks/classesmanagement/README.md#getstudentsforclass) - Get students for a Class
- [`classesManagementGetTeachersForClass`](docs/sdks/classesmanagement/README.md#getteachersforclass) - Get teachers for a Class
- [`classesManagementPostResultsForAcademicSessionForClass`](docs/sdks/classesmanagement/README.md#postresultsforacademicsessionforclass) - Create Results for an Academic Session for a Class
- [`classesManagementUpdateClass`](docs/sdks/classesmanagement/README.md#updateclass) - Update a Class
- [`courseComponentResourcesManagementCreateComponentResource`](docs/sdks/coursecomponentresourcesmanagement/README.md#createcomponentresource) - Create Component Resource
- [`courseComponentResourcesManagementDeleteComponentResource`](docs/sdks/coursecomponentresourcesmanagement/README.md#deletecomponentresource) - Delete a Component Resource
- [`courseComponentResourcesManagementGetAllComponentResources`](docs/sdks/coursecomponentresourcesmanagement/README.md#getallcomponentresources) - Get all Component Resources
- [`courseComponentResourcesManagementGetComponentResource`](docs/sdks/coursecomponentresourcesmanagement/README.md#getcomponentresource) - Get a specific Component Resource
- [`courseComponentResourcesManagementPutComponentResource`](docs/sdks/coursecomponentresourcesmanagement/README.md#putcomponentresource) - Update a Component Resource
- [`courseComponentsManagementCreateCourseComponent`](docs/sdks/coursecomponentsmanagement/README.md#createcoursecomponent) - Create Course Component
- [`courseComponentsManagementDeleteCourseComponent`](docs/sdks/coursecomponentsmanagement/README.md#deletecoursecomponent) - Delete a Course Component
- [`courseComponentsManagementGetAllCourseComponents`](docs/sdks/coursecomponentsmanagement/README.md#getallcoursecomponents) - Get all Course Components
- [`courseComponentsManagementGetCourseComponent`](docs/sdks/coursecomponentsmanagement/README.md#getcoursecomponent) - Get a specific Course Component
- [`courseComponentsManagementPutCourseComponent`](docs/sdks/coursecomponentsmanagement/README.md#putcoursecomponent) - Update a Course Component
- [`coursesManagementCreateComponentResource`](docs/sdks/coursesmanagement/README.md#createcomponentresource) - Create Component Resource
- [`coursesManagementCreateCourse`](docs/sdks/coursesmanagement/README.md#createcourse) - Create a Course
- [`coursesManagementCreateCourseComponent`](docs/sdks/coursesmanagement/README.md#createcoursecomponent) - Create Course Component
- [`coursesManagementDeleteComponentResource`](docs/sdks/coursesmanagement/README.md#deletecomponentresource) - Delete a Component Resource
- [`coursesManagementDeleteCourse`](docs/sdks/coursesmanagement/README.md#deletecourse) - Delete a Course
- [`coursesManagementDeleteCourseComponent`](docs/sdks/coursesmanagement/README.md#deletecoursecomponent) - Delete a Course Component
- [`coursesManagementGetAllComponentResources`](docs/sdks/coursesmanagement/README.md#getallcomponentresources) - Get all Component Resources
- [`coursesManagementGetAllCourseComponents`](docs/sdks/coursesmanagement/README.md#getallcoursecomponents) - Get all Course Components
- [`coursesManagementGetAllCourses`](docs/sdks/coursesmanagement/README.md#getallcourses) - Get All Courses
- [`coursesManagementGetClassesForCourse`](docs/sdks/coursesmanagement/README.md#getclassesforcourse) - Get Classes for a Course
- [`coursesManagementGetComponentResource`](docs/sdks/coursesmanagement/README.md#getcomponentresource) - Get a specific Component Resource
- [`coursesManagementGetCourse`](docs/sdks/coursesmanagement/README.md#getcourse) - Get a specific Course
- [`coursesManagementGetCourseComponent`](docs/sdks/coursesmanagement/README.md#getcoursecomponent) - Get a specific Course Component
- [`coursesManagementGetCoursesForSchool`](docs/sdks/coursesmanagement/README.md#getcoursesforschool) - Get all Courses for a School
- [`coursesManagementPutComponentResource`](docs/sdks/coursesmanagement/README.md#putcomponentresource) - Update a Component Resource
- [`coursesManagementPutCourse`](docs/sdks/coursesmanagement/README.md#putcourse) - Update a Course
- [`coursesManagementPutCourseComponent`](docs/sdks/coursesmanagement/README.md#putcoursecomponent) - Update a Course Component
- [`demographicsManagementDeleteDemographics`](docs/sdks/demographicsmanagement/README.md#deletedemographics) - Delete a Demographic record
- [`demographicsManagementGetAllDemographics`](docs/sdks/demographicsmanagement/README.md#getalldemographics) - Get all Demographic records
- [`demographicsManagementGetDemographics`](docs/sdks/demographicsmanagement/README.md#getdemographics) - Get a specific Demographic record
- [`demographicsManagementPostDemographics`](docs/sdks/demographicsmanagement/README.md#postdemographics) - Create a new Demographic record
- [`demographicsManagementPutDemographics`](docs/sdks/demographicsmanagement/README.md#putdemographics) - Update a Demographic record
- [`enrollmentsManagementCreateEnrollment`](docs/sdks/enrollmentsmanagement/README.md#createenrollment) - Create a new Enrollment
- [`enrollmentsManagementDeleteEnrollment`](docs/sdks/enrollmentsmanagement/README.md#deleteenrollment) - Delete an Enrollment
- [`enrollmentsManagementGetAllEnrollments`](docs/sdks/enrollmentsmanagement/README.md#getallenrollments) - Get all Enrollments
- [`enrollmentsManagementGetEnrollment`](docs/sdks/enrollmentsmanagement/README.md#getenrollment) - Get a specific Enrollment
- [`enrollmentsManagementGetEnrollmentsForClassInSchool`](docs/sdks/enrollmentsmanagement/README.md#getenrollmentsforclassinschool) - Get Enrollments for a specific Class in a School
- [`enrollmentsManagementGetEnrollmentsForSchool`](docs/sdks/enrollmentsmanagement/README.md#getenrollmentsforschool) - Get all Enrollments for a School
- [`enrollmentsManagementUpdateEnrollment`](docs/sdks/enrollmentsmanagement/README.md#updateenrollment) - Update an Enrollment
- [`gradingPeriodsManagementCreateGradingPeriod`](docs/sdks/gradingperiodsmanagement/README.md#creategradingperiod) - Create a new Grading Period
- [`gradingPeriodsManagementCreateGradingPeriodForTerm`](docs/sdks/gradingperiodsmanagement/README.md#creategradingperiodforterm) - Create a new Grading Period for a Term
- [`gradingPeriodsManagementDeleteGradingPeriod`](docs/sdks/gradingperiodsmanagement/README.md#deletegradingperiod) - Delete a Grading Period
- [`gradingPeriodsManagementGetAllGradingPeriods`](docs/sdks/gradingperiodsmanagement/README.md#getallgradingperiods) - Get all Grading Periods
- [`gradingPeriodsManagementGetGradingPeriod`](docs/sdks/gradingperiodsmanagement/README.md#getgradingperiod) - Get a specific Grading Period
- [`gradingPeriodsManagementGetGradingPeriodsForTerm`](docs/sdks/gradingperiodsmanagement/README.md#getgradingperiodsforterm) - Get Grading Periods for a Term
- [`gradingPeriodsManagementUpdateGradingPeriod`](docs/sdks/gradingperiodsmanagement/README.md#updategradingperiod) - Update a Grading Period
- [`lineItemsManagementCreateLineItem`](docs/sdks/lineitemsmanagement/README.md#createlineitem) - Create a Line Item
- [`lineItemsManagementCreateLineItemsForSchool`](docs/sdks/lineitemsmanagement/README.md#createlineitemsforschool) - Create Line Items for a School
- [`lineItemsManagementCreateResultForLineItem`](docs/sdks/lineitemsmanagement/README.md#createresultforlineitem) - Create a Result for a Line Item
- [`lineItemsManagementDeleteLineItem`](docs/sdks/lineitemsmanagement/README.md#deletelineitem) - Delete a Line Item
- [`lineItemsManagementGetAllLineItems`](docs/sdks/lineitemsmanagement/README.md#getalllineitems) - Get all Line Items
- [`lineItemsManagementGetLineItem`](docs/sdks/lineitemsmanagement/README.md#getlineitem) - Get a Line Item
- [`lineItemsManagementGetLineItemsForSchool`](docs/sdks/lineitemsmanagement/README.md#getlineitemsforschool) - Get Line Items for a School
- [`lineItemsManagementUpdateLineItem`](docs/sdks/lineitemsmanagement/README.md#updatelineitem) - Update a Line Item
- [`organizationsManagementCreateOrg`](docs/sdks/organizationsmanagement/README.md#createorg) - Create an Organization
- [`organizationsManagementDeleteOrg`](docs/sdks/organizationsmanagement/README.md#deleteorg) - Delete an Organization
- [`organizationsManagementGetAllOrgs`](docs/sdks/organizationsmanagement/README.md#getallorgs) - Get all Organizations
- [`organizationsManagementGetOrg`](docs/sdks/organizationsmanagement/README.md#getorg) - Get a specific Organization
- [`organizationsManagementUpdateOrg`](docs/sdks/organizationsmanagement/README.md#updateorg) - Update an Organization
- [`resourcesClassesManagementAssignResourceToClass`](docs/sdks/resourcesclassesmanagement/README.md#assignresourcetoclass) - Assign a resource to a class
- [`resourcesClassesManagementGetResourcesForClass`](docs/sdks/resourcesclassesmanagement/README.md#getresourcesforclass) - Get resources for a class
- [`resourcesClassesManagementRemoveResourceFromClass`](docs/sdks/resourcesclassesmanagement/README.md#removeresourcefromclass) - Remove a resource from a class
- [`resourcesCoursesManagementAssignResourceToCourse`](docs/sdks/resourcescoursesmanagement/README.md#assignresourcetocourse) - Assign a resource to a course
- [`resourcesCoursesManagementGetResourcesForCourse`](docs/sdks/resourcescoursesmanagement/README.md#getresourcesforcourse) - Get resources for a course
- [`resourcesCoursesManagementRemoveResourceFromCourse`](docs/sdks/resourcescoursesmanagement/README.md#removeresourcefromcourse) - Remove a resource from a course
- [`resourcesManagementCreateResource`](docs/sdks/resourcesmanagement/README.md#createresource) - Create a new Resource
- [`resourcesManagementDeleteResource`](docs/sdks/resourcesmanagement/README.md#deleteresource) - Delete a resource
- [`resourcesManagementGetAllResources`](docs/sdks/resourcesmanagement/README.md#getallresources) - Get all Resources
- [`resourcesManagementGetResource`](docs/sdks/resourcesmanagement/README.md#getresource) - Get a specific Resource
- [`resourcesManagementUpdateResource`](docs/sdks/resourcesmanagement/README.md#updateresource) - Update an existing Resource
- [`resourcesUsersManagementAssignResourceToUser`](docs/sdks/resourcesusersmanagement/README.md#assignresourcetouser) - Assign a resource to a user
- [`resourcesUsersManagementGetResourcesForUser`](docs/sdks/resourcesusersmanagement/README.md#getresourcesforuser) - Get resources for a user
- [`resourcesUsersManagementRemoveResourceFromUser`](docs/sdks/resourcesusersmanagement/README.md#removeresourcefromuser) - Remove a resource from a user
- [`resultsManagementCreateResult`](docs/sdks/resultsmanagement/README.md#createresult) - Create a Result
- [`resultsManagementDeleteResult`](docs/sdks/resultsmanagement/README.md#deleteresult) - Delete a Result
- [`resultsManagementGetAllResults`](docs/sdks/resultsmanagement/README.md#getallresults) - Get all Results
- [`resultsManagementGetResult`](docs/sdks/resultsmanagement/README.md#getresult) - Get a Result
- [`resultsManagementUpdateResult`](docs/sdks/resultsmanagement/README.md#updateresult) - Update a Result
- [`schoolsManagementCreateLineItemsForSchool`](docs/sdks/schoolsmanagement/README.md#createlineitemsforschool) - Create Line Items for a School
- [`schoolsManagementCreateSchool`](docs/sdks/schoolsmanagement/README.md#createschool) - Create a new School
- [`schoolsManagementDeleteSchool`](docs/sdks/schoolsmanagement/README.md#deleteschool) - Delete a School
- [`schoolsManagementGetAllSchools`](docs/sdks/schoolsmanagement/README.md#getallschools) - Get all Schools
- [`schoolsManagementGetClassesForSchool`](docs/sdks/schoolsmanagement/README.md#getclassesforschool) - Get all Classes for a School
- [`schoolsManagementGetCoursesForSchool`](docs/sdks/schoolsmanagement/README.md#getcoursesforschool) - Get all Courses for a School
- [`schoolsManagementGetEnrollmentsForClassInSchool`](docs/sdks/schoolsmanagement/README.md#getenrollmentsforclassinschool) - Get Enrollments for a specific Class in a School
- [`schoolsManagementGetEnrollmentsForSchool`](docs/sdks/schoolsmanagement/README.md#getenrollmentsforschool) - Get all Enrollments for a School
- [`schoolsManagementGetLineItemsForSchool`](docs/sdks/schoolsmanagement/README.md#getlineitemsforschool) - Get Line Items for a School
- [`schoolsManagementGetSchool`](docs/sdks/schoolsmanagement/README.md#getschool) - Get a specific School
- [`schoolsManagementGetScoreScalesForSchool`](docs/sdks/schoolsmanagement/README.md#getscorescalesforschool) - Get Score Scales for a School
- [`schoolsManagementGetStudentsForClassInSchool`](docs/sdks/schoolsmanagement/README.md#getstudentsforclassinschool) - Get Students for a specific Class in a School
- [`schoolsManagementGetStudentsForSchool`](docs/sdks/schoolsmanagement/README.md#getstudentsforschool) - Get all Students for a School
- [`schoolsManagementGetTeachersForClassInSchool`](docs/sdks/schoolsmanagement/README.md#getteachersforclassinschool) - Get Teachers for a specific Class in a School
- [`schoolsManagementGetTeachersForSchool`](docs/sdks/schoolsmanagement/README.md#getteachersforschool) - Get all teachers for a school
- [`schoolsManagementGetTermsForSchool`](docs/sdks/schoolsmanagement/README.md#gettermsforschool) - Get all Terms for a School
- [`schoolsManagementUpdateSchool`](docs/sdks/schoolsmanagement/README.md#updateschool) - Update a School
- [`scoreScalesManagementCreateScoreScale`](docs/sdks/scorescalesmanagement/README.md#createscorescale) - Create a Score Scale
- [`scoreScalesManagementDeleteScoreScale`](docs/sdks/scorescalesmanagement/README.md#deletescorescale) - Delete a Score Scale
- [`scoreScalesManagementGetAllScoreScales`](docs/sdks/scorescalesmanagement/README.md#getallscorescales) - Get all Score Scales
- [`scoreScalesManagementGetScoreScale`](docs/sdks/scorescalesmanagement/README.md#getscorescale) - Get a Score Scale
- [`scoreScalesManagementGetScoreScalesForSchool`](docs/sdks/scorescalesmanagement/README.md#getscorescalesforschool) - Get Score Scales for a School
- [`scoreScalesManagementUpdateScoreScale`](docs/sdks/scorescalesmanagement/README.md#updatescorescale) - Update a Score Scale
- [`studentsManagementAddStudentToClass`](docs/sdks/studentsmanagement/README.md#addstudenttoclass) - Add a student to a Class
- [`studentsManagementGetAllStudents`](docs/sdks/studentsmanagement/README.md#getallstudents) - Get all Students
- [`studentsManagementGetClassesForStudent`](docs/sdks/studentsmanagement/README.md#getclassesforstudent) - Get Classes for a Student
- [`studentsManagementGetStudent`](docs/sdks/studentsmanagement/README.md#getstudent) - Get a specific Student
- [`studentsManagementGetStudentsForClass`](docs/sdks/studentsmanagement/README.md#getstudentsforclass) - Get students for a Class
- [`studentsManagementGetStudentsForClassInSchool`](docs/sdks/studentsmanagement/README.md#getstudentsforclassinschool) - Get Students for a specific Class in a School
- [`studentsManagementGetStudentsForSchool`](docs/sdks/studentsmanagement/README.md#getstudentsforschool) - Get all Students for a School
- [`teachersManagementAddTeacherToClass`](docs/sdks/teachersmanagement/README.md#addteachertoclass) - Add a teacher to a Class
- [`teachersManagementGetAllTeachers`](docs/sdks/teachersmanagement/README.md#getallteachers) - Get all Teachers
- [`teachersManagementGetClassesForTeacher`](docs/sdks/teachersmanagement/README.md#getclassesforteacher) - Get Classes for a Teacher
- [`teachersManagementGetTeacher`](docs/sdks/teachersmanagement/README.md#getteacher) - Get a specific Teacher
- [`teachersManagementGetTeachersForClass`](docs/sdks/teachersmanagement/README.md#getteachersforclass) - Get teachers for a Class
- [`teachersManagementGetTeachersForClassInSchool`](docs/sdks/teachersmanagement/README.md#getteachersforclassinschool) - Get Teachers for a specific Class in a School
- [`teachersManagementGetTeachersForSchool`](docs/sdks/teachersmanagement/README.md#getteachersforschool) - Get all teachers for a school
- [`termsManagementCreateGradingPeriodForTerm`](docs/sdks/termsmanagement/README.md#creategradingperiodforterm) - Create a new Grading Period for a Term
- [`termsManagementGetAllTerms`](docs/sdks/termsmanagement/README.md#getallterms) - Get all Terms
- [`termsManagementGetClassesForTerm`](docs/sdks/termsmanagement/README.md#getclassesforterm) - Get Classes for a Term
- [`termsManagementGetGradingPeriodsForTerm`](docs/sdks/termsmanagement/README.md#getgradingperiodsforterm) - Get Grading Periods for a Term
- [`termsManagementGetTerm`](docs/sdks/termsmanagement/README.md#getterm) - Get a specific Term
- [`termsManagementGetTermsForSchool`](docs/sdks/termsmanagement/README.md#gettermsforschool) - Get all Terms for a School
- [`usersManagementCreateUser`](docs/sdks/usersmanagement/README.md#createuser) - Create a new User
- [`usersManagementDeleteUser`](docs/sdks/usersmanagement/README.md#deleteuser) - Delete a User
- [`usersManagementGetAllUsers`](docs/sdks/usersmanagement/README.md#getallusers) - Get all Users
- [`usersManagementGetClassesForUser`](docs/sdks/usersmanagement/README.md#getclassesforuser) - Get Classes for a User
- [`usersManagementGetUser`](docs/sdks/usersmanagement/README.md#getuser) - Get a specific User
- [`usersManagementUpdateUser`](docs/sdks/usersmanagement/README.md#updateuser) - Update an existing User

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Pagination [pagination] -->
## Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you
make your SDK calls as usual, but the returned response object will also be an
async iterable that can be consumed using the [`for await...of`][for-await-of]
syntax.

[for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of

Here's an example of one such pagination call:

```typescript
import { OneRoster } from "@superbuilders/oneroster";

const oneRoster = new OneRoster({
  oAuth2: process.env["ONEROSTER_O_AUTH2"] ?? "",
});

async function run() {
  const result = await oneRoster.scoreScalesManagement.getAllScoreScales({
    fields: "sourcedId,name",
    filter: "status='active'",
  });

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();

```
<!-- End Pagination [pagination] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { OneRoster } from "@superbuilders/oneroster";

const oneRoster = new OneRoster({
  oAuth2: process.env["ONEROSTER_O_AUTH2"] ?? "",
});

async function run() {
  const result = await oneRoster.scoreScalesManagement.getAllScoreScales({
    fields: "sourcedId,name",
    filter: "status='active'",
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { OneRoster } from "@superbuilders/oneroster";

const oneRoster = new OneRoster({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  oAuth2: process.env["ONEROSTER_O_AUTH2"] ?? "",
});

async function run() {
  const result = await oneRoster.scoreScalesManagement.getAllScoreScales({
    fields: "sourcedId,name",
    filter: "status='active'",
  });

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Some methods specify known errors which can be thrown. All the known errors are enumerated in the `models/errors/errors.ts` module. The known errors for a method are documented under the *Errors* tables in SDK docs. For example, the `getAllScoreScales` method may throw the following errors:

| Error Type                              | Status Code | Content Type     |
| --------------------------------------- | ----------- | ---------------- |
| errors.BadRequestResponseError          | 400         | application/json |
| errors.UnauthorizedRequestResponseError | 401         | application/json |
| errors.ForbiddenResponseError           | 403         | application/json |
| errors.NotFoundResponseError            | 404         | application/json |
| errors.UnprocessableEntityResponseError | 422         | application/json |
| errors.TooManyRequestsResponseError     | 429         | application/json |
| errors.InternalServerErrorResponse      | 500         | application/json |
| errors.APIError                         | 4XX, 5XX    | \*/\*            |

If the method throws an error and it is not captured by the known errors, it will default to throwing a `APIError`.

```typescript
import { OneRoster } from "@superbuilders/oneroster";
import {
  BadRequestResponseError,
  ForbiddenResponseError,
  InternalServerErrorResponse,
  NotFoundResponseError,
  SDKValidationError,
  TooManyRequestsResponseError,
  UnauthorizedRequestResponseError,
  UnprocessableEntityResponseError,
} from "@superbuilders/oneroster/models/errors";

const oneRoster = new OneRoster({
  oAuth2: process.env["ONEROSTER_O_AUTH2"] ?? "",
});

async function run() {
  let result;
  try {
    result = await oneRoster.scoreScalesManagement.getAllScoreScales({
      fields: "sourcedId,name",
      filter: "status='active'",
    });

    for await (const page of result) {
      // Handle the page
      console.log(page);
    }
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError): {
        // Pretty-print will provide a human-readable multi-line error message
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof BadRequestResponseError): {
        // Handle err.data$: BadRequestResponseErrorData
        console.error(err);
        return;
      }
      case (err instanceof UnauthorizedRequestResponseError): {
        // Handle err.data$: UnauthorizedRequestResponseErrorData
        console.error(err);
        return;
      }
      case (err instanceof ForbiddenResponseError): {
        // Handle err.data$: ForbiddenResponseErrorData
        console.error(err);
        return;
      }
      case (err instanceof NotFoundResponseError): {
        // Handle err.data$: NotFoundResponseErrorData
        console.error(err);
        return;
      }
      case (err instanceof UnprocessableEntityResponseError): {
        // Handle err.data$: UnprocessableEntityResponseErrorData
        console.error(err);
        return;
      }
      case (err instanceof TooManyRequestsResponseError): {
        // Handle err.data$: TooManyRequestsResponseErrorData
        console.error(err);
        return;
      }
      case (err instanceof InternalServerErrorResponse): {
        // Handle err.data$: InternalServerErrorResponseData
        console.error(err);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { OneRoster } from "@superbuilders/oneroster";

const oneRoster = new OneRoster({
  serverURL: "https://api.staging.alpha-1edtech.com",
  oAuth2: process.env["ONEROSTER_O_AUTH2"] ?? "",
});

async function run() {
  const result = await oneRoster.scoreScalesManagement.getAllScoreScales({
    fields: "sourcedId,name",
    filter: "status='active'",
  });

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { OneRoster } from "@superbuilders/oneroster";
import { HTTPClient } from "@superbuilders/oneroster/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new OneRoster({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { OneRoster } from "@superbuilders/oneroster";

const sdk = new OneRoster({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `ONEROSTER_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation.
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release.

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=oneroster&utm_campaign=typescript)
