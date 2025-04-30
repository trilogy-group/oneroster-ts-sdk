# oneroster

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *oneroster* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=oneroster&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


<br /><br />
> [!IMPORTANT]
> This SDK is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/emu-farm/timeback). Delete this section before > publishing to a package manager.

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
        "--client-id", "...",
        "--client-secret", "...",
        "--token-url", "..."
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
        "--client-id", "...",
        "--client-secret", "...",
        "--token-url", "..."
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
  security: {
    clientID: process.env["ONEROSTER_CLIENT_ID"] ?? "",
    clientSecret: process.env["ONEROSTER_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await oneRoster.scoreScales.list({
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

| Name                          | Type   | Scheme                         | Environment Variable                                                          |
| ----------------------------- | ------ | ------------------------------ | ----------------------------------------------------------------------------- |
| `clientID`<br/>`clientSecret` | oauth2 | OAuth2 Client Credentials Flow | `ONEROSTER_CLIENT_ID`<br/>`ONEROSTER_CLIENT_SECRET`<br/>`ONEROSTER_TOKEN_URL` |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. For example:
```typescript
import { OneRoster } from "@superbuilders/oneroster";

const oneRoster = new OneRoster({
  security: {
    clientID: process.env["ONEROSTER_CLIENT_ID"] ?? "",
    clientSecret: process.env["ONEROSTER_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await oneRoster.scoreScales.list({
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

### [academicSessions](docs/sdks/academicsessions/README.md)

* [getAll](docs/sdks/academicsessions/README.md#getall) - Get all Academic Sessions
* [create](docs/sdks/academicsessions/README.md#create) - Create an Academic Session
* [get](docs/sdks/academicsessions/README.md#get) - Get a specific Academic Session
* [update](docs/sdks/academicsessions/README.md#update) - Update an Academic Session
* [delete](docs/sdks/academicsessions/README.md#delete) - Delete an Academic Session

### [assessmentLineItems](docs/sdks/assessmentlineitems/README.md)

* [getAll](docs/sdks/assessmentlineitems/README.md#getall) - Get all Assessment Line Items
* [create](docs/sdks/assessmentlineitems/README.md#create) - Create an Assessment Line Item
* [get](docs/sdks/assessmentlineitems/README.md#get) - Get an Assessment Line Item
* [update](docs/sdks/assessmentlineitems/README.md#update) - Update an Assessment Line Item
* [delete](docs/sdks/assessmentlineitems/README.md#delete) - Delete an Assessment Line Item

### [assessmentResults](docs/sdks/assessmentresults/README.md)

* [getAll](docs/sdks/assessmentresults/README.md#getall) - Get all Assessment Results
* [create](docs/sdks/assessmentresults/README.md#create) - Create an Assessment Result
* [get](docs/sdks/assessmentresults/README.md#get) - Get an Assessment Result
* [update](docs/sdks/assessmentresults/README.md#update) - Update an Assessment Result
* [delete](docs/sdks/assessmentresults/README.md#delete) - Delete an Assessment Result

### [categories](docs/sdks/categories/README.md)

* [getAll](docs/sdks/categories/README.md#getall) - Get all Categories
* [create](docs/sdks/categories/README.md#create) - Create a Category
* [get](docs/sdks/categories/README.md#get) - Get a Category
* [update](docs/sdks/categories/README.md#update) - Update a Category
* [delete](docs/sdks/categories/README.md#delete) - Delete a Category

### [classes](docs/sdks/classes/README.md)

* [createResults](docs/sdks/classes/README.md#createresults) - Create Results for an Academic Session for a Class
* [getStudentResults](docs/sdks/classes/README.md#getstudentresults) - Get Results for a Student for a Class
* [getCategories](docs/sdks/classes/README.md#getcategories) - Get Categories for a Class
* [getScoreScales](docs/sdks/classes/README.md#getscorescales) - Get Score Scales for a Class
* [getAll](docs/sdks/classes/README.md#getall) - Get all Classes
* [create](docs/sdks/classes/README.md#create) - Create a new Class
* [get](docs/sdks/classes/README.md#get) - Get a specific class
* [update](docs/sdks/classes/README.md#update) - Update a Class
* [delete](docs/sdks/classes/README.md#delete) - Delete a Class
* [listResources](docs/sdks/classes/README.md#listresources) - Get resources for a class
* [addTeacher](docs/sdks/classes/README.md#addteacher) - Add a teacher to a Class
* [getTeachers](docs/sdks/classes/README.md#getteachers) - Get Teachers for a specific Class in a School
* [getStudents](docs/sdks/classes/README.md#getstudents) - Get students for a Class
* [addStudent](docs/sdks/classes/README.md#addstudent) - Add a student to a Class

#### [classes.results](docs/sdks/classesresults/README.md)

* [getForLineItem](docs/sdks/classesresults/README.md#getforlineitem) - Get Results for a Line Item for a Class
* [get](docs/sdks/classesresults/README.md#get) - Get Results for a Class

### [classesManagement](docs/sdks/classesmanagement/README.md)

* [getLineItemsForClass](docs/sdks/classesmanagement/README.md#getlineitemsforclass) - Get Line Items for a Class

### [classResources](docs/sdks/classresources/README.md)

* [delete](docs/sdks/classresources/README.md#delete) - Remove a resource from a class

### [classTeachers](docs/sdks/classteachers/README.md)

* [getAll](docs/sdks/classteachers/README.md#getall) - Get teachers for a Class

### [componentResources](docs/sdks/componentresources/README.md)

* [getAll](docs/sdks/componentresources/README.md#getall) - Get all Component Resources

### [courseClasses](docs/sdks/courseclasses/README.md)

* [getAll](docs/sdks/courseclasses/README.md#getall) - Get Classes for a Course

### [courseComponents](docs/sdks/coursecomponents/README.md)

* [getAll](docs/sdks/coursecomponents/README.md#getall) - Get all Course Components
* [delete](docs/sdks/coursecomponents/README.md#delete) - Delete a Course Component

### [courseResources](docs/sdks/courseresources/README.md)

* [delete](docs/sdks/courseresources/README.md#delete) - Remove a resource from a course

### [courses](docs/sdks/courses/README.md)

* [getResources](docs/sdks/courses/README.md#getresources) - Get resources for a course
* [assignResource](docs/sdks/courses/README.md#assignresource) - Assign a resource to a course
* [getAll](docs/sdks/courses/README.md#getall) - Get All Courses
* [create](docs/sdks/courses/README.md#create) - Create a Course
* [get](docs/sdks/courses/README.md#get) - Get a specific Course
* [update](docs/sdks/courses/README.md#update) - Update a Course
* [delete](docs/sdks/courses/README.md#delete) - Delete a Course
* [createComponentResource](docs/sdks/courses/README.md#createcomponentresource) - Create Component Resource
* [getComponentResource](docs/sdks/courses/README.md#getcomponentresource) - Get a specific Component Resource
* [updateComponentResource](docs/sdks/courses/README.md#updatecomponentresource) - Update a Component Resource
* [deleteComponentResource](docs/sdks/courses/README.md#deletecomponentresource) - Delete a Component Resource
* [createComponent](docs/sdks/courses/README.md#createcomponent) - Create Course Component
* [getComponent](docs/sdks/courses/README.md#getcomponent) - Get a specific Course Component
* [updateComponent](docs/sdks/courses/README.md#updatecomponent) - Update a Course Component

### [demographics](docs/sdks/demographics/README.md)

* [getAll](docs/sdks/demographics/README.md#getall) - Get all Demographic records
* [create](docs/sdks/demographics/README.md#create) - Create a new Demographic record
* [get](docs/sdks/demographics/README.md#get) - Get a specific Demographic record
* [update](docs/sdks/demographics/README.md#update) - Update a Demographic record
* [delete](docs/sdks/demographics/README.md#delete) - Delete a Demographic record

### [enrollments](docs/sdks/enrollments/README.md)

* [getAll](docs/sdks/enrollments/README.md#getall) - Get all Enrollments
* [create](docs/sdks/enrollments/README.md#create) - Create a new Enrollment
* [get](docs/sdks/enrollments/README.md#get) - Get a specific Enrollment
* [update](docs/sdks/enrollments/README.md#update) - Update an Enrollment
* [delete](docs/sdks/enrollments/README.md#delete) - Delete an Enrollment
* [getForClass](docs/sdks/enrollments/README.md#getforclass) - Get Enrollments for a specific Class in a School

### [gradingPeriods](docs/sdks/gradingperiods/README.md)

* [getAll](docs/sdks/gradingperiods/README.md#getall) - Get all Grading Periods
* [create](docs/sdks/gradingperiods/README.md#create) - Create a new Grading Period
* [get](docs/sdks/gradingperiods/README.md#get) - Get a specific Grading Period
* [update](docs/sdks/gradingperiods/README.md#update) - Update a Grading Period
* [delete](docs/sdks/gradingperiods/README.md#delete) - Delete a Grading Period
* [createForTerm](docs/sdks/gradingperiods/README.md#createforterm) - Create a new Grading Period for a Term

### [lineItems](docs/sdks/lineitems/README.md)

* [list](docs/sdks/lineitems/README.md#list) - Get all Line Items
* [create](docs/sdks/lineitems/README.md#create) - Create a Line Item
* [get](docs/sdks/lineitems/README.md#get) - Get a Line Item
* [update](docs/sdks/lineitems/README.md#update) - Update a Line Item
* [delete](docs/sdks/lineitems/README.md#delete) - Delete a Line Item


### [organizations](docs/sdks/organizations/README.md)

* [getAll](docs/sdks/organizations/README.md#getall) - Get all Organizations
* [create](docs/sdks/organizations/README.md#create) - Create an Organization
* [get](docs/sdks/organizations/README.md#get) - Get a specific Organization
* [update](docs/sdks/organizations/README.md#update) - Update an Organization
* [delete](docs/sdks/organizations/README.md#delete) - Delete an Organization

### [resources](docs/sdks/resources/README.md)

* [getAll](docs/sdks/resources/README.md#getall) - Get all Resources
* [create](docs/sdks/resources/README.md#create) - Create a new Resource
* [get](docs/sdks/resources/README.md#get) - Get a specific Resource
* [update](docs/sdks/resources/README.md#update) - Update an existing Resource
* [delete](docs/sdks/resources/README.md#delete) - Delete a resource

#### [resources.classes](docs/sdks/resourcesclasses/README.md)

* [assign](docs/sdks/resourcesclasses/README.md#assign) - Assign a resource to a class

### [results](docs/sdks/results/README.md)

* [getAll](docs/sdks/results/README.md#getall) - Get all Results
* [create](docs/sdks/results/README.md#create) - Create a Result
* [get](docs/sdks/results/README.md#get) - Get a Result
* [update](docs/sdks/results/README.md#update) - Update a Result
* [delete](docs/sdks/results/README.md#delete) - Delete a Result
* [createForLineItem](docs/sdks/results/README.md#createforlineitem) - Create a Result for a Line Item

### [schoolLineItems](docs/sdks/schoollineitems/README.md)

* [get](docs/sdks/schoollineitems/README.md#get) - Get Line Items for a School

### [schools](docs/sdks/schools/README.md)

* [getAll](docs/sdks/schools/README.md#getall) - Get all Schools
* [create](docs/sdks/schools/README.md#create) - Create a new School
* [get](docs/sdks/schools/README.md#get) - Get a specific School
* [update](docs/sdks/schools/README.md#update) - Update a School
* [delete](docs/sdks/schools/README.md#delete) - Delete a School
* [getClasses](docs/sdks/schools/README.md#getclasses) - Get all Classes for a School
* [getTerms](docs/sdks/schools/README.md#getterms) - Get all Terms for a School
* [getTeachers](docs/sdks/schools/README.md#getteachers) - Get all teachers for a school
* [getStudents](docs/sdks/schools/README.md#getstudents) - Get all Students for a School
* [getEnrollments](docs/sdks/schools/README.md#getenrollments) - Get all Enrollments for a School

#### [schools.courses](docs/sdks/schoolscourses/README.md)

* [getAll](docs/sdks/schoolscourses/README.md#getall) - Get all Courses for a School

#### [schools.lineItems](docs/sdks/schoolslineitems/README.md)

* [create](docs/sdks/schoolslineitems/README.md#create) - Create Line Items for a School

### [schoolsScoreScales](docs/sdks/schoolsscorescales/README.md)

* [get](docs/sdks/schoolsscorescales/README.md#get) - Get Score Scales for a School

### [scoreScales](docs/sdks/scorescales/README.md)

* [list](docs/sdks/scorescales/README.md#list) - Get all Score Scales
* [create](docs/sdks/scorescales/README.md#create) - Create a Score Scale
* [get](docs/sdks/scorescales/README.md#get) - Get a Score Scale
* [update](docs/sdks/scorescales/README.md#update) - Update a Score Scale
* [delete](docs/sdks/scorescales/README.md#delete) - Delete a Score Scale

### [students](docs/sdks/students/README.md)

* [getForClass](docs/sdks/students/README.md#getforclass) - Get Students for a specific Class in a School
* [getAll](docs/sdks/students/README.md#getall) - Get all Students
* [get](docs/sdks/students/README.md#get) - Get a specific Student

#### [students.classes](docs/sdks/studentsclasses/README.md)

* [get](docs/sdks/studentsclasses/README.md#get) - Get Classes for a Student

### [teachers](docs/sdks/teachers/README.md)

* [getAll](docs/sdks/teachers/README.md#getall) - Get all Teachers
* [get](docs/sdks/teachers/README.md#get) - Get a specific Teacher
* [getClasses](docs/sdks/teachers/README.md#getclasses) - Get Classes for a Teacher

### [terms](docs/sdks/terms/README.md)

* [list](docs/sdks/terms/README.md#list) - Get all Terms
* [get](docs/sdks/terms/README.md#get) - Get a specific Term
* [getClasses](docs/sdks/terms/README.md#getclasses) - Get Classes for a Term
* [getGradingPeriods](docs/sdks/terms/README.md#getgradingperiods) - Get Grading Periods for a Term

### [userResources](docs/sdks/userresources/README.md)

* [remove](docs/sdks/userresources/README.md#remove) - Remove a resource from a user

### [users](docs/sdks/users/README.md)

* [getResources](docs/sdks/users/README.md#getresources) - Get resources for a user
* [assignResource](docs/sdks/users/README.md#assignresource) - Assign a resource to a user
* [getAll](docs/sdks/users/README.md#getall) - Get all Users
* [create](docs/sdks/users/README.md#create) - Create a new User
* [get](docs/sdks/users/README.md#get) - Get a specific User
* [update](docs/sdks/users/README.md#update) - Update an existing User
* [delete](docs/sdks/users/README.md#delete) - Delete a User
* [getClasses](docs/sdks/users/README.md#getclasses) - Get Classes for a User

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

- [`academicSessionsCreate`](docs/sdks/academicsessions/README.md#create) - Create an Academic Session
- [`academicSessionsDelete`](docs/sdks/academicsessions/README.md#delete) - Delete an Academic Session
- [`academicSessionsGet`](docs/sdks/academicsessions/README.md#get) - Get a specific Academic Session
- [`academicSessionsGetAll`](docs/sdks/academicsessions/README.md#getall) - Get all Academic Sessions
- [`academicSessionsUpdate`](docs/sdks/academicsessions/README.md#update) - Update an Academic Session
- [`assessmentLineItemsCreate`](docs/sdks/assessmentlineitems/README.md#create) - Create an Assessment Line Item
- [`assessmentLineItemsDelete`](docs/sdks/assessmentlineitems/README.md#delete) - Delete an Assessment Line Item
- [`assessmentLineItemsGet`](docs/sdks/assessmentlineitems/README.md#get) - Get an Assessment Line Item
- [`assessmentLineItemsGetAll`](docs/sdks/assessmentlineitems/README.md#getall) - Get all Assessment Line Items
- [`assessmentLineItemsUpdate`](docs/sdks/assessmentlineitems/README.md#update) - Update an Assessment Line Item
- [`assessmentResultsCreate`](docs/sdks/assessmentresults/README.md#create) - Create an Assessment Result
- [`assessmentResultsDelete`](docs/sdks/assessmentresults/README.md#delete) - Delete an Assessment Result
- [`assessmentResultsGet`](docs/sdks/assessmentresults/README.md#get) - Get an Assessment Result
- [`assessmentResultsGetAll`](docs/sdks/assessmentresults/README.md#getall) - Get all Assessment Results
- [`assessmentResultsUpdate`](docs/sdks/assessmentresults/README.md#update) - Update an Assessment Result
- [`categoriesCreate`](docs/sdks/categories/README.md#create) - Create a Category
- [`categoriesDelete`](docs/sdks/categories/README.md#delete) - Delete a Category
- [`categoriesGet`](docs/sdks/categories/README.md#get) - Get a Category
- [`categoriesGetAll`](docs/sdks/categories/README.md#getall) - Get all Categories
- [`categoriesUpdate`](docs/sdks/categories/README.md#update) - Update a Category
- [`classesAddStudent`](docs/sdks/classes/README.md#addstudent) - Add a student to a Class
- [`classesAddTeacher`](docs/sdks/classes/README.md#addteacher) - Add a teacher to a Class
- [`classesCreate`](docs/sdks/classes/README.md#create) - Create a new Class
- [`classesCreateResults`](docs/sdks/classes/README.md#createresults) - Create Results for an Academic Session for a Class
- [`classesDelete`](docs/sdks/classes/README.md#delete) - Delete a Class
- [`classesGet`](docs/sdks/classes/README.md#get) - Get a specific class
- [`classesGetAll`](docs/sdks/classes/README.md#getall) - Get all Classes
- [`classesGetCategories`](docs/sdks/classes/README.md#getcategories) - Get Categories for a Class
- [`classesGetScoreScales`](docs/sdks/classes/README.md#getscorescales) - Get Score Scales for a Class
- [`classesGetStudentResults`](docs/sdks/classes/README.md#getstudentresults) - Get Results for a Student for a Class
- [`classesGetStudents`](docs/sdks/classes/README.md#getstudents) - Get students for a Class
- [`classesGetTeachers`](docs/sdks/classes/README.md#getteachers) - Get Teachers for a specific Class in a School
- [`classesListResources`](docs/sdks/classes/README.md#listresources) - Get resources for a class
- [`classesManagementGetLineItemsForClass`](docs/sdks/classesmanagement/README.md#getlineitemsforclass) - Get Line Items for a Class
- [`classesResultsGet`](docs/sdks/classesresults/README.md#get) - Get Results for a Class
- [`classesResultsGetForLineItem`](docs/sdks/classesresults/README.md#getforlineitem) - Get Results for a Line Item for a Class
- [`classesUpdate`](docs/sdks/classes/README.md#update) - Update a Class
- [`classResourcesDelete`](docs/sdks/classresources/README.md#delete) - Remove a resource from a class
- [`classTeachersGetAll`](docs/sdks/classteachers/README.md#getall) - Get teachers for a Class
- [`componentResourcesGetAll`](docs/sdks/componentresources/README.md#getall) - Get all Component Resources
- [`courseClassesGetAll`](docs/sdks/courseclasses/README.md#getall) - Get Classes for a Course
- [`courseComponentsDelete`](docs/sdks/coursecomponents/README.md#delete) - Delete a Course Component
- [`courseComponentsGetAll`](docs/sdks/coursecomponents/README.md#getall) - Get all Course Components
- [`courseResourcesDelete`](docs/sdks/courseresources/README.md#delete) - Remove a resource from a course
- [`coursesAssignResource`](docs/sdks/courses/README.md#assignresource) - Assign a resource to a course
- [`coursesCreate`](docs/sdks/courses/README.md#create) - Create a Course
- [`coursesCreateComponent`](docs/sdks/courses/README.md#createcomponent) - Create Course Component
- [`coursesCreateComponentResource`](docs/sdks/courses/README.md#createcomponentresource) - Create Component Resource
- [`coursesDelete`](docs/sdks/courses/README.md#delete) - Delete a Course
- [`coursesDeleteComponentResource`](docs/sdks/courses/README.md#deletecomponentresource) - Delete a Component Resource
- [`coursesGet`](docs/sdks/courses/README.md#get) - Get a specific Course
- [`coursesGetAll`](docs/sdks/courses/README.md#getall) - Get All Courses
- [`coursesGetComponent`](docs/sdks/courses/README.md#getcomponent) - Get a specific Course Component
- [`coursesGetComponentResource`](docs/sdks/courses/README.md#getcomponentresource) - Get a specific Component Resource
- [`coursesGetResources`](docs/sdks/courses/README.md#getresources) - Get resources for a course
- [`coursesUpdate`](docs/sdks/courses/README.md#update) - Update a Course
- [`coursesUpdateComponent`](docs/sdks/courses/README.md#updatecomponent) - Update a Course Component
- [`coursesUpdateComponentResource`](docs/sdks/courses/README.md#updatecomponentresource) - Update a Component Resource
- [`demographicsCreate`](docs/sdks/demographics/README.md#create) - Create a new Demographic record
- [`demographicsDelete`](docs/sdks/demographics/README.md#delete) - Delete a Demographic record
- [`demographicsGet`](docs/sdks/demographics/README.md#get) - Get a specific Demographic record
- [`demographicsGetAll`](docs/sdks/demographics/README.md#getall) - Get all Demographic records
- [`demographicsUpdate`](docs/sdks/demographics/README.md#update) - Update a Demographic record
- [`enrollmentsCreate`](docs/sdks/enrollments/README.md#create) - Create a new Enrollment
- [`enrollmentsDelete`](docs/sdks/enrollments/README.md#delete) - Delete an Enrollment
- [`enrollmentsGet`](docs/sdks/enrollments/README.md#get) - Get a specific Enrollment
- [`enrollmentsGetAll`](docs/sdks/enrollments/README.md#getall) - Get all Enrollments
- [`enrollmentsGetForClass`](docs/sdks/enrollments/README.md#getforclass) - Get Enrollments for a specific Class in a School
- [`enrollmentsUpdate`](docs/sdks/enrollments/README.md#update) - Update an Enrollment
- [`gradingPeriodsCreate`](docs/sdks/gradingperiods/README.md#create) - Create a new Grading Period
- [`gradingPeriodsCreateForTerm`](docs/sdks/gradingperiods/README.md#createforterm) - Create a new Grading Period for a Term
- [`gradingPeriodsDelete`](docs/sdks/gradingperiods/README.md#delete) - Delete a Grading Period
- [`gradingPeriodsGet`](docs/sdks/gradingperiods/README.md#get) - Get a specific Grading Period
- [`gradingPeriodsGetAll`](docs/sdks/gradingperiods/README.md#getall) - Get all Grading Periods
- [`gradingPeriodsUpdate`](docs/sdks/gradingperiods/README.md#update) - Update a Grading Period
- [`lineItemsCreate`](docs/sdks/lineitems/README.md#create) - Create a Line Item
- [`lineItemsDelete`](docs/sdks/lineitems/README.md#delete) - Delete a Line Item
- [`lineItemsGet`](docs/sdks/lineitems/README.md#get) - Get a Line Item
- [`lineItemsList`](docs/sdks/lineitems/README.md#list) - Get all Line Items
- [`lineItemsUpdate`](docs/sdks/lineitems/README.md#update) - Update a Line Item
- [`organizationsCreate`](docs/sdks/organizations/README.md#create) - Create an Organization
- [`organizationsDelete`](docs/sdks/organizations/README.md#delete) - Delete an Organization
- [`organizationsGet`](docs/sdks/organizations/README.md#get) - Get a specific Organization
- [`organizationsGetAll`](docs/sdks/organizations/README.md#getall) - Get all Organizations
- [`organizationsUpdate`](docs/sdks/organizations/README.md#update) - Update an Organization
- [`resourcesClassesAssign`](docs/sdks/resourcesclasses/README.md#assign) - Assign a resource to a class
- [`resourcesCreate`](docs/sdks/resources/README.md#create) - Create a new Resource
- [`resourcesDelete`](docs/sdks/resources/README.md#delete) - Delete a resource
- [`resourcesGet`](docs/sdks/resources/README.md#get) - Get a specific Resource
- [`resourcesGetAll`](docs/sdks/resources/README.md#getall) - Get all Resources
- [`resourcesUpdate`](docs/sdks/resources/README.md#update) - Update an existing Resource
- [`resultsCreate`](docs/sdks/results/README.md#create) - Create a Result
- [`resultsCreateForLineItem`](docs/sdks/results/README.md#createforlineitem) - Create a Result for a Line Item
- [`resultsDelete`](docs/sdks/results/README.md#delete) - Delete a Result
- [`resultsGet`](docs/sdks/results/README.md#get) - Get a Result
- [`resultsGetAll`](docs/sdks/results/README.md#getall) - Get all Results
- [`resultsUpdate`](docs/sdks/results/README.md#update) - Update a Result
- [`schoolLineItemsGet`](docs/sdks/schoollineitems/README.md#get) - Get Line Items for a School
- [`schoolsCoursesGetAll`](docs/sdks/schoolscourses/README.md#getall) - Get all Courses for a School
- [`schoolsCreate`](docs/sdks/schools/README.md#create) - Create a new School
- [`schoolsDelete`](docs/sdks/schools/README.md#delete) - Delete a School
- [`schoolsGet`](docs/sdks/schools/README.md#get) - Get a specific School
- [`schoolsGetAll`](docs/sdks/schools/README.md#getall) - Get all Schools
- [`schoolsGetClasses`](docs/sdks/schools/README.md#getclasses) - Get all Classes for a School
- [`schoolsGetEnrollments`](docs/sdks/schools/README.md#getenrollments) - Get all Enrollments for a School
- [`schoolsGetStudents`](docs/sdks/schools/README.md#getstudents) - Get all Students for a School
- [`schoolsGetTeachers`](docs/sdks/schools/README.md#getteachers) - Get all teachers for a school
- [`schoolsGetTerms`](docs/sdks/schools/README.md#getterms) - Get all Terms for a School
- [`schoolsLineItemsCreate`](docs/sdks/schoolslineitems/README.md#create) - Create Line Items for a School
- [`schoolsScoreScalesGet`](docs/sdks/schoolsscorescales/README.md#get) - Get Score Scales for a School
- [`schoolsUpdate`](docs/sdks/schools/README.md#update) - Update a School
- [`scoreScalesCreate`](docs/sdks/scorescales/README.md#create) - Create a Score Scale
- [`scoreScalesDelete`](docs/sdks/scorescales/README.md#delete) - Delete a Score Scale
- [`scoreScalesGet`](docs/sdks/scorescales/README.md#get) - Get a Score Scale
- [`scoreScalesList`](docs/sdks/scorescales/README.md#list) - Get all Score Scales
- [`scoreScalesUpdate`](docs/sdks/scorescales/README.md#update) - Update a Score Scale
- [`studentsClassesGet`](docs/sdks/studentsclasses/README.md#get) - Get Classes for a Student
- [`studentsGet`](docs/sdks/students/README.md#get) - Get a specific Student
- [`studentsGetAll`](docs/sdks/students/README.md#getall) - Get all Students
- [`studentsGetForClass`](docs/sdks/students/README.md#getforclass) - Get Students for a specific Class in a School
- [`teachersGet`](docs/sdks/teachers/README.md#get) - Get a specific Teacher
- [`teachersGetAll`](docs/sdks/teachers/README.md#getall) - Get all Teachers
- [`teachersGetClasses`](docs/sdks/teachers/README.md#getclasses) - Get Classes for a Teacher
- [`termsGet`](docs/sdks/terms/README.md#get) - Get a specific Term
- [`termsGetClasses`](docs/sdks/terms/README.md#getclasses) - Get Classes for a Term
- [`termsGetGradingPeriods`](docs/sdks/terms/README.md#getgradingperiods) - Get Grading Periods for a Term
- [`termsList`](docs/sdks/terms/README.md#list) - Get all Terms
- [`userResourcesRemove`](docs/sdks/userresources/README.md#remove) - Remove a resource from a user
- [`usersAssignResource`](docs/sdks/users/README.md#assignresource) - Assign a resource to a user
- [`usersCreate`](docs/sdks/users/README.md#create) - Create a new User
- [`usersDelete`](docs/sdks/users/README.md#delete) - Delete a User
- [`usersGet`](docs/sdks/users/README.md#get) - Get a specific User
- [`usersGetAll`](docs/sdks/users/README.md#getall) - Get all Users
- [`usersGetClasses`](docs/sdks/users/README.md#getclasses) - Get Classes for a User
- [`usersGetResources`](docs/sdks/users/README.md#getresources) - Get resources for a user
- [`usersUpdate`](docs/sdks/users/README.md#update) - Update an existing User

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
  security: {
    clientID: process.env["ONEROSTER_CLIENT_ID"] ?? "",
    clientSecret: process.env["ONEROSTER_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await oneRoster.scoreScales.list({
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
  security: {
    clientID: process.env["ONEROSTER_CLIENT_ID"] ?? "",
    clientSecret: process.env["ONEROSTER_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await oneRoster.scoreScales.list({
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
  security: {
    clientID: process.env["ONEROSTER_CLIENT_ID"] ?? "",
    clientSecret: process.env["ONEROSTER_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await oneRoster.scoreScales.list({
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

Some methods specify known errors which can be thrown. All the known errors are enumerated in the `models/errors/errors.ts` module. The known errors for a method are documented under the *Errors* tables in SDK docs. For example, the `list` method may throw the following errors:

| Error Type                               | Status Code | Content Type     |
| ---------------------------------------- | ----------- | ---------------- |
| errors.BadRequestResponseError1          | 400         | application/json |
| errors.UnauthorizedRequestResponseError1 | 401         | application/json |
| errors.ForbiddenResponseError1           | 403         | application/json |
| errors.NotFoundResponseError1            | 404         | application/json |
| errors.UnprocessableEntityResponseError1 | 422         | application/json |
| errors.TooManyRequestsResponseError1     | 429         | application/json |
| errors.InternalServerErrorResponse1      | 500         | application/json |
| errors.APIError                          | 4XX, 5XX    | \*/\*            |

If the method throws an error and it is not captured by the known errors, it will default to throwing a `APIError`.

```typescript
import { OneRoster } from "@superbuilders/oneroster";
import {
  BadRequestResponseError1,
  ForbiddenResponseError1,
  InternalServerErrorResponse1,
  NotFoundResponseError1,
  SDKValidationError,
  TooManyRequestsResponseError1,
  UnauthorizedRequestResponseError1,
  UnprocessableEntityResponseError1,
} from "@superbuilders/oneroster/models/errors";

const oneRoster = new OneRoster({
  security: {
    clientID: process.env["ONEROSTER_CLIENT_ID"] ?? "",
    clientSecret: process.env["ONEROSTER_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  let result;
  try {
    result = await oneRoster.scoreScales.list({
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
      case (err instanceof BadRequestResponseError1): {
        // Handle err.data$: BadRequestResponseError1Data
        console.error(err);
        return;
      }
      case (err instanceof UnauthorizedRequestResponseError1): {
        // Handle err.data$: UnauthorizedRequestResponseError1Data
        console.error(err);
        return;
      }
      case (err instanceof ForbiddenResponseError1): {
        // Handle err.data$: ForbiddenResponseError1Data
        console.error(err);
        return;
      }
      case (err instanceof NotFoundResponseError1): {
        // Handle err.data$: NotFoundResponseError1Data
        console.error(err);
        return;
      }
      case (err instanceof UnprocessableEntityResponseError1): {
        // Handle err.data$: UnprocessableEntityResponseError1Data
        console.error(err);
        return;
      }
      case (err instanceof TooManyRequestsResponseError1): {
        // Handle err.data$: TooManyRequestsResponseError1Data
        console.error(err);
        return;
      }
      case (err instanceof InternalServerErrorResponse1): {
        // Handle err.data$: InternalServerErrorResponse1Data
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
  security: {
    clientID: process.env["ONEROSTER_CLIENT_ID"] ?? "",
    clientSecret: process.env["ONEROSTER_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await oneRoster.scoreScales.list({
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
