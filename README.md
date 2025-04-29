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
curl -X POST https://alpha-auth-production-idp.auth.us-west-2.amazoncognito.com/oauth2/token \
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
  const result = await oneRoster.scoreScales.list();

  // Handle the result
  console.log(result);
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
  const result = await oneRoster.scoreScales.list();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [academicSessions](docs/sdks/academicsessions/README.md)

* [getAll](docs/sdks/academicsessions/README.md#getall) - Get all academic sessions
* [create](docs/sdks/academicsessions/README.md#create) - Create an academic session
* [get](docs/sdks/academicsessions/README.md#get) - Get an academic session
* [update](docs/sdks/academicsessions/README.md#update) - Update an academic session
* [delete](docs/sdks/academicsessions/README.md#delete) - Delete an academic session

### [assessmentLineItems](docs/sdks/assessmentlineitems/README.md)

* [getAll](docs/sdks/assessmentlineitems/README.md#getall) - The REST read request message for the getAllAssessmentLineItems() API call.
* [create](docs/sdks/assessmentlineitems/README.md#create) - The REST create request message for the createAssessmentLineItem() API call.
* [get](docs/sdks/assessmentlineitems/README.md#get) - The REST read request message for the getAssessmentLineItem() API call.
* [update](docs/sdks/assessmentlineitems/README.md#update) - The REST update request message for the updateAssessmentLineItem() API call.
* [delete](docs/sdks/assessmentlineitems/README.md#delete) - The REST delete request message for the deleteAssessmentLineItem() API call.

### [assessmentResults](docs/sdks/assessmentresults/README.md)

* [getAll](docs/sdks/assessmentresults/README.md#getall) - The REST read request message for the getAllAssessmentResults() API call.
* [create](docs/sdks/assessmentresults/README.md#create) - The REST create request message for the createAssessmentResult() API call.
* [get](docs/sdks/assessmentresults/README.md#get) - The REST read request message for the getAssessmentResult() API call.
* [update](docs/sdks/assessmentresults/README.md#update) - The REST update request message for the updateAssessmentResult() API call.
* [delete](docs/sdks/assessmentresults/README.md#delete) - The REST delete request message for the deleteAssessmentResult() API call.

### [categories](docs/sdks/categories/README.md)

* [getAll](docs/sdks/categories/README.md#getall) - The REST read request message for the getAllCategories() API call.
* [create](docs/sdks/categories/README.md#create) - The REST create request message for the createCategory() API call.
* [get](docs/sdks/categories/README.md#get) - The REST read request message for the getCategory() API call.
* [update](docs/sdks/categories/README.md#update) - The REST update request message for the updateCategory() API call.
* [delete](docs/sdks/categories/README.md#delete) - The REST delete request message for the deleteCategory() API call.

### [classes](docs/sdks/classes/README.md)

* [createResults](docs/sdks/classes/README.md#createresults) - Create results for an academic session in a class
* [listLineItems](docs/sdks/classes/README.md#listlineitems) - Get line items for a class
* [createLineItem](docs/sdks/classes/README.md#createlineitem) - Create a line item for a class
* [getStudentResults](docs/sdks/classes/README.md#getstudentresults) - Get results for a specific student in a class
* [getCategories](docs/sdks/classes/README.md#getcategories) - Get categories for a class
* [getScoreScales](docs/sdks/classes/README.md#getscorescales) - Get score scales for a class
* [listResources](docs/sdks/classes/README.md#listresources) - Get resources for a class
* [getTeachers](docs/sdks/classes/README.md#getteachers) - Get teachers for a specific class in a school
* [getAll](docs/sdks/classes/README.md#getall) - Get all classes
* [create](docs/sdks/classes/README.md#create) - Create a new class
* [getStudents](docs/sdks/classes/README.md#getstudents) - Get students for a class
* [addStudent](docs/sdks/classes/README.md#addstudent) - Add a student to a class
* [addTeacher](docs/sdks/classes/README.md#addteacher) - Add a teacher to a class
* [get](docs/sdks/classes/README.md#get) - Get a specific class
* [update](docs/sdks/classes/README.md#update) - Update a class
* [delete](docs/sdks/classes/README.md#delete) - Delete a class

#### [classes.results](docs/sdks/classesresults/README.md)

* [getForLineItem](docs/sdks/classesresults/README.md#getforlineitem) - Get results for a specific line item in a class
* [get](docs/sdks/classesresults/README.md#get) - Get results for a class

### [classResources](docs/sdks/classresources/README.md)

* [delete](docs/sdks/classresources/README.md#delete) - Remove a resource from a class

### [classTeachers](docs/sdks/classteachers/README.md)

* [getAll](docs/sdks/classteachers/README.md#getall) - Get teachers for a class

### [componentResources](docs/sdks/componentresources/README.md)

* [getAll](docs/sdks/componentresources/README.md#getall) - Get All Component Resources

### [courseClasses](docs/sdks/courseclasses/README.md)

* [getAll](docs/sdks/courseclasses/README.md#getall) - Get Classes For Course

### [courseComponents](docs/sdks/coursecomponents/README.md)

* [getAll](docs/sdks/coursecomponents/README.md#getall) - Get All Course Components
* [delete](docs/sdks/coursecomponents/README.md#delete) - Delete Course Component

### [courseResources](docs/sdks/courseresources/README.md)

* [delete](docs/sdks/courseresources/README.md#delete) - Remove a resource from a course

### [courses](docs/sdks/courses/README.md)

* [getResources](docs/sdks/courses/README.md#getresources) - Get resources for a course
* [assignResource](docs/sdks/courses/README.md#assignresource) - Assign a resource to a course
* [getAll](docs/sdks/courses/README.md#getall) - Get All Courses
* [create](docs/sdks/courses/README.md#create) - Create Course
* [get](docs/sdks/courses/README.md#get) - Get Course
* [update](docs/sdks/courses/README.md#update) - Update Course
* [delete](docs/sdks/courses/README.md#delete) - Delete Course
* [createComponentResource](docs/sdks/courses/README.md#createcomponentresource) - Create Component Resource
* [getComponentResource](docs/sdks/courses/README.md#getcomponentresource) - Get Component Resource
* [updateComponentResource](docs/sdks/courses/README.md#updatecomponentresource) - Update Component Resource
* [deleteComponentResource](docs/sdks/courses/README.md#deletecomponentresource) - Delete Component Resource
* [createComponent](docs/sdks/courses/README.md#createcomponent) - Create Course Component
* [getComponent](docs/sdks/courses/README.md#getcomponent) - Get Course Component
* [updateComponent](docs/sdks/courses/README.md#updatecomponent) - Update Course Component

### [demographics](docs/sdks/demographics/README.md)

* [getAll](docs/sdks/demographics/README.md#getall) - Get all demographics records
* [create](docs/sdks/demographics/README.md#create) - Create a new demographics record
* [get](docs/sdks/demographics/README.md#get) - Get a specific demographics record
* [update](docs/sdks/demographics/README.md#update) - Update a demographics record
* [delete](docs/sdks/demographics/README.md#delete) - Delete a demographics record

### [enrollments](docs/sdks/enrollments/README.md)

* [getAll](docs/sdks/enrollments/README.md#getall) - Get all enrollments
* [create](docs/sdks/enrollments/README.md#create) - Create a new enrollment
* [get](docs/sdks/enrollments/README.md#get) - Get a specific enrollment
* [update](docs/sdks/enrollments/README.md#update) - Update an enrollment
* [delete](docs/sdks/enrollments/README.md#delete) - Delete an enrollment
* [getForClass](docs/sdks/enrollments/README.md#getforclass) - Get enrollments for a specific class in a school

### [gradingPeriods](docs/sdks/gradingperiods/README.md)

* [getAll](docs/sdks/gradingperiods/README.md#getall) - Get all grading periods
* [create](docs/sdks/gradingperiods/README.md#create) - Create a new grading period
* [get](docs/sdks/gradingperiods/README.md#get) - Get a specific grading period
* [update](docs/sdks/gradingperiods/README.md#update) - Update a grading period
* [delete](docs/sdks/gradingperiods/README.md#delete) - Delete a grading period
* [createForTerm](docs/sdks/gradingperiods/README.md#createforterm) - Create a new grading period for a term

### [lineItems](docs/sdks/lineitems/README.md)

* [list](docs/sdks/lineitems/README.md#list) - Get all line items
* [create](docs/sdks/lineitems/README.md#create) - Create a new line item
* [get](docs/sdks/lineitems/README.md#get) - Get a specific line item
* [update](docs/sdks/lineitems/README.md#update) - Update an existing line item
* [delete](docs/sdks/lineitems/README.md#delete) - Delete a line item


### [organizations](docs/sdks/organizations/README.md)

* [getAll](docs/sdks/organizations/README.md#getall) - Get all organizations
* [create](docs/sdks/organizations/README.md#create) - Create an organization
* [get](docs/sdks/organizations/README.md#get) - Get a specific organization
* [update](docs/sdks/organizations/README.md#update) - Update an organization
* [delete](docs/sdks/organizations/README.md#delete) - Delete an organization

### [resources](docs/sdks/resources/README.md)

* [getAll](docs/sdks/resources/README.md#getall) - Get all resources
* [create](docs/sdks/resources/README.md#create) - Create a new resource
* [get](docs/sdks/resources/README.md#get) - Get a specific resource
* [update](docs/sdks/resources/README.md#update) - Update an existing resource
* [delete](docs/sdks/resources/README.md#delete) - Delete a resource

#### [resources.classes](docs/sdks/resourcesclasses/README.md)

* [assign](docs/sdks/resourcesclasses/README.md#assign) - Assign a resource to a class

### [results](docs/sdks/results/README.md)

* [getAll](docs/sdks/results/README.md#getall) - Get all results
* [create](docs/sdks/results/README.md#create) - Create a new result
* [get](docs/sdks/results/README.md#get) - Get a specific result
* [update](docs/sdks/results/README.md#update) - Update an existing result
* [delete](docs/sdks/results/README.md#delete) - Delete a result
* [createForLineItem](docs/sdks/results/README.md#createforlineitem) - Create a new result for a line item

### [schoolLineItems](docs/sdks/schoollineitems/README.md)

* [get](docs/sdks/schoollineitems/README.md#get) - Get line items for a school

### [schools](docs/sdks/schools/README.md)

* [getAll](docs/sdks/schools/README.md#getall) - Get all schools
* [create](docs/sdks/schools/README.md#create) - Create a new school
* [getStudents](docs/sdks/schools/README.md#getstudents) - Get all students for a school
* [getTeachers](docs/sdks/schools/README.md#getteachers) - Get all teachers for a school
* [getTerms](docs/sdks/schools/README.md#getterms) - Get all terms for a school
* [get](docs/sdks/schools/README.md#get) - Get a single school
* [update](docs/sdks/schools/README.md#update) - Update a school
* [delete](docs/sdks/schools/README.md#delete) - Delete a school
* [getEnrollments](docs/sdks/schools/README.md#getenrollments) - Get all enrollments for a school
* [getClasses](docs/sdks/schools/README.md#getclasses) - Get all classes for a school

#### [schools.courses](docs/sdks/schoolscourses/README.md)

* [getAll](docs/sdks/schoolscourses/README.md#getall) - Get all courses for a school

#### [schools.lineItems](docs/sdks/schoolslineitems/README.md)

* [create](docs/sdks/schoolslineitems/README.md#create) - Create line items for a school

### [schoolsScoreScales](docs/sdks/schoolsscorescales/README.md)

* [get](docs/sdks/schoolsscorescales/README.md#get) - Get score scales for a school

### [scoreScales](docs/sdks/scorescales/README.md)

* [list](docs/sdks/scorescales/README.md#list) - Get all score scales
* [create](docs/sdks/scorescales/README.md#create) - Create a new score scale
* [get](docs/sdks/scorescales/README.md#get) - Get a specific score scale
* [update](docs/sdks/scorescales/README.md#update) - Update an existing score scale
* [delete](docs/sdks/scorescales/README.md#delete) - Delete a score scale

### [students](docs/sdks/students/README.md)

* [getAll](docs/sdks/students/README.md#getall) - Get all students
* [get](docs/sdks/students/README.md#get) - Get a specific student
* [getForClass](docs/sdks/students/README.md#getforclass) - Get students for a specific class in a school

#### [students.classes](docs/sdks/studentsclasses/README.md)

* [get](docs/sdks/studentsclasses/README.md#get) - Get classes for a student

### [teachers](docs/sdks/teachers/README.md)

* [getAll](docs/sdks/teachers/README.md#getall) - Get all teachers
* [get](docs/sdks/teachers/README.md#get) - Get a specific teacher
* [getClasses](docs/sdks/teachers/README.md#getclasses) - Get classes for a teacher

### [terms](docs/sdks/terms/README.md)

* [list](docs/sdks/terms/README.md#list) - Get all terms
* [get](docs/sdks/terms/README.md#get) - Get a specific term
* [getGradingPeriods](docs/sdks/terms/README.md#getgradingperiods) - Get grading periods for a term
* [getClasses](docs/sdks/terms/README.md#getclasses) - Get classes for a term

### [userResources](docs/sdks/userresources/README.md)

* [remove](docs/sdks/userresources/README.md#remove) - Remove a resource from a user

### [users](docs/sdks/users/README.md)

* [getResources](docs/sdks/users/README.md#getresources) - Get resources for a user
* [assignResource](docs/sdks/users/README.md#assignresource) - Assign a resource to a user
* [getAll](docs/sdks/users/README.md#getall) - Get all users
* [create](docs/sdks/users/README.md#create) - Create a new user
* [get](docs/sdks/users/README.md#get) - Get a specific user
* [update](docs/sdks/users/README.md#update) - Update an existing user
* [delete](docs/sdks/users/README.md#delete) - Delete a user
* [getClasses](docs/sdks/users/README.md#getclasses) - Get classes for a user

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

- [`academicSessionsCreate`](docs/sdks/academicsessions/README.md#create) - Create an academic session
- [`academicSessionsDelete`](docs/sdks/academicsessions/README.md#delete) - Delete an academic session
- [`academicSessionsGet`](docs/sdks/academicsessions/README.md#get) - Get an academic session
- [`academicSessionsGetAll`](docs/sdks/academicsessions/README.md#getall) - Get all academic sessions
- [`academicSessionsUpdate`](docs/sdks/academicsessions/README.md#update) - Update an academic session
- [`assessmentLineItemsCreate`](docs/sdks/assessmentlineitems/README.md#create) - The REST create request message for the createAssessmentLineItem() API call.
- [`assessmentLineItemsDelete`](docs/sdks/assessmentlineitems/README.md#delete) - The REST delete request message for the deleteAssessmentLineItem() API call.
- [`assessmentLineItemsGet`](docs/sdks/assessmentlineitems/README.md#get) - The REST read request message for the getAssessmentLineItem() API call.
- [`assessmentLineItemsGetAll`](docs/sdks/assessmentlineitems/README.md#getall) - The REST read request message for the getAllAssessmentLineItems() API call.
- [`assessmentLineItemsUpdate`](docs/sdks/assessmentlineitems/README.md#update) - The REST update request message for the updateAssessmentLineItem() API call.
- [`assessmentResultsCreate`](docs/sdks/assessmentresults/README.md#create) - The REST create request message for the createAssessmentResult() API call.
- [`assessmentResultsDelete`](docs/sdks/assessmentresults/README.md#delete) - The REST delete request message for the deleteAssessmentResult() API call.
- [`assessmentResultsGet`](docs/sdks/assessmentresults/README.md#get) - The REST read request message for the getAssessmentResult() API call.
- [`assessmentResultsGetAll`](docs/sdks/assessmentresults/README.md#getall) - The REST read request message for the getAllAssessmentResults() API call.
- [`assessmentResultsUpdate`](docs/sdks/assessmentresults/README.md#update) - The REST update request message for the updateAssessmentResult() API call.
- [`categoriesCreate`](docs/sdks/categories/README.md#create) - The REST create request message for the createCategory() API call.
- [`categoriesDelete`](docs/sdks/categories/README.md#delete) - The REST delete request message for the deleteCategory() API call.
- [`categoriesGet`](docs/sdks/categories/README.md#get) - The REST read request message for the getCategory() API call.
- [`categoriesGetAll`](docs/sdks/categories/README.md#getall) - The REST read request message for the getAllCategories() API call.
- [`categoriesUpdate`](docs/sdks/categories/README.md#update) - The REST update request message for the updateCategory() API call.
- [`classesAddStudent`](docs/sdks/classes/README.md#addstudent) - Add a student to a class
- [`classesAddTeacher`](docs/sdks/classes/README.md#addteacher) - Add a teacher to a class
- [`classesCreate`](docs/sdks/classes/README.md#create) - Create a new class
- [`classesCreateLineItem`](docs/sdks/classes/README.md#createlineitem) - Create a line item for a class
- [`classesCreateResults`](docs/sdks/classes/README.md#createresults) - Create results for an academic session in a class
- [`classesDelete`](docs/sdks/classes/README.md#delete) - Delete a class
- [`classesGet`](docs/sdks/classes/README.md#get) - Get a specific class
- [`classesGetAll`](docs/sdks/classes/README.md#getall) - Get all classes
- [`classesGetCategories`](docs/sdks/classes/README.md#getcategories) - Get categories for a class
- [`classesGetScoreScales`](docs/sdks/classes/README.md#getscorescales) - Get score scales for a class
- [`classesGetStudentResults`](docs/sdks/classes/README.md#getstudentresults) - Get results for a specific student in a class
- [`classesGetStudents`](docs/sdks/classes/README.md#getstudents) - Get students for a class
- [`classesGetTeachers`](docs/sdks/classes/README.md#getteachers) - Get teachers for a specific class in a school
- [`classesListLineItems`](docs/sdks/classes/README.md#listlineitems) - Get line items for a class
- [`classesListResources`](docs/sdks/classes/README.md#listresources) - Get resources for a class
- [`classesResultsGet`](docs/sdks/classesresults/README.md#get) - Get results for a class
- [`classesResultsGetForLineItem`](docs/sdks/classesresults/README.md#getforlineitem) - Get results for a specific line item in a class
- [`classesUpdate`](docs/sdks/classes/README.md#update) - Update a class
- [`classResourcesDelete`](docs/sdks/classresources/README.md#delete) - Remove a resource from a class
- [`classTeachersGetAll`](docs/sdks/classteachers/README.md#getall) - Get teachers for a class
- [`componentResourcesGetAll`](docs/sdks/componentresources/README.md#getall) - Get All Component Resources
- [`courseClassesGetAll`](docs/sdks/courseclasses/README.md#getall) - Get Classes For Course
- [`courseComponentsDelete`](docs/sdks/coursecomponents/README.md#delete) - Delete Course Component
- [`courseComponentsGetAll`](docs/sdks/coursecomponents/README.md#getall) - Get All Course Components
- [`courseResourcesDelete`](docs/sdks/courseresources/README.md#delete) - Remove a resource from a course
- [`coursesAssignResource`](docs/sdks/courses/README.md#assignresource) - Assign a resource to a course
- [`coursesCreate`](docs/sdks/courses/README.md#create) - Create Course
- [`coursesCreateComponent`](docs/sdks/courses/README.md#createcomponent) - Create Course Component
- [`coursesCreateComponentResource`](docs/sdks/courses/README.md#createcomponentresource) - Create Component Resource
- [`coursesDelete`](docs/sdks/courses/README.md#delete) - Delete Course
- [`coursesDeleteComponentResource`](docs/sdks/courses/README.md#deletecomponentresource) - Delete Component Resource
- [`coursesGet`](docs/sdks/courses/README.md#get) - Get Course
- [`coursesGetAll`](docs/sdks/courses/README.md#getall) - Get All Courses
- [`coursesGetComponent`](docs/sdks/courses/README.md#getcomponent) - Get Course Component
- [`coursesGetComponentResource`](docs/sdks/courses/README.md#getcomponentresource) - Get Component Resource
- [`coursesGetResources`](docs/sdks/courses/README.md#getresources) - Get resources for a course
- [`coursesUpdate`](docs/sdks/courses/README.md#update) - Update Course
- [`coursesUpdateComponent`](docs/sdks/courses/README.md#updatecomponent) - Update Course Component
- [`coursesUpdateComponentResource`](docs/sdks/courses/README.md#updatecomponentresource) - Update Component Resource
- [`demographicsCreate`](docs/sdks/demographics/README.md#create) - Create a new demographics record
- [`demographicsDelete`](docs/sdks/demographics/README.md#delete) - Delete a demographics record
- [`demographicsGet`](docs/sdks/demographics/README.md#get) - Get a specific demographics record
- [`demographicsGetAll`](docs/sdks/demographics/README.md#getall) - Get all demographics records
- [`demographicsUpdate`](docs/sdks/demographics/README.md#update) - Update a demographics record
- [`enrollmentsCreate`](docs/sdks/enrollments/README.md#create) - Create a new enrollment
- [`enrollmentsDelete`](docs/sdks/enrollments/README.md#delete) - Delete an enrollment
- [`enrollmentsGet`](docs/sdks/enrollments/README.md#get) - Get a specific enrollment
- [`enrollmentsGetAll`](docs/sdks/enrollments/README.md#getall) - Get all enrollments
- [`enrollmentsGetForClass`](docs/sdks/enrollments/README.md#getforclass) - Get enrollments for a specific class in a school
- [`enrollmentsUpdate`](docs/sdks/enrollments/README.md#update) - Update an enrollment
- [`gradingPeriodsCreate`](docs/sdks/gradingperiods/README.md#create) - Create a new grading period
- [`gradingPeriodsCreateForTerm`](docs/sdks/gradingperiods/README.md#createforterm) - Create a new grading period for a term
- [`gradingPeriodsDelete`](docs/sdks/gradingperiods/README.md#delete) - Delete a grading period
- [`gradingPeriodsGet`](docs/sdks/gradingperiods/README.md#get) - Get a specific grading period
- [`gradingPeriodsGetAll`](docs/sdks/gradingperiods/README.md#getall) - Get all grading periods
- [`gradingPeriodsUpdate`](docs/sdks/gradingperiods/README.md#update) - Update a grading period
- [`lineItemsCreate`](docs/sdks/lineitems/README.md#create) - Create a new line item
- [`lineItemsDelete`](docs/sdks/lineitems/README.md#delete) - Delete a line item
- [`lineItemsGet`](docs/sdks/lineitems/README.md#get) - Get a specific line item
- [`lineItemsList`](docs/sdks/lineitems/README.md#list) - Get all line items
- [`lineItemsUpdate`](docs/sdks/lineitems/README.md#update) - Update an existing line item
- [`organizationsCreate`](docs/sdks/organizations/README.md#create) - Create an organization
- [`organizationsDelete`](docs/sdks/organizations/README.md#delete) - Delete an organization
- [`organizationsGet`](docs/sdks/organizations/README.md#get) - Get a specific organization
- [`organizationsGetAll`](docs/sdks/organizations/README.md#getall) - Get all organizations
- [`organizationsUpdate`](docs/sdks/organizations/README.md#update) - Update an organization
- [`resourcesClassesAssign`](docs/sdks/resourcesclasses/README.md#assign) - Assign a resource to a class
- [`resourcesCreate`](docs/sdks/resources/README.md#create) - Create a new resource
- [`resourcesDelete`](docs/sdks/resources/README.md#delete) - Delete a resource
- [`resourcesGet`](docs/sdks/resources/README.md#get) - Get a specific resource
- [`resourcesGetAll`](docs/sdks/resources/README.md#getall) - Get all resources
- [`resourcesUpdate`](docs/sdks/resources/README.md#update) - Update an existing resource
- [`resultsCreate`](docs/sdks/results/README.md#create) - Create a new result
- [`resultsCreateForLineItem`](docs/sdks/results/README.md#createforlineitem) - Create a new result for a line item
- [`resultsDelete`](docs/sdks/results/README.md#delete) - Delete a result
- [`resultsGet`](docs/sdks/results/README.md#get) - Get a specific result
- [`resultsGetAll`](docs/sdks/results/README.md#getall) - Get all results
- [`resultsUpdate`](docs/sdks/results/README.md#update) - Update an existing result
- [`schoolLineItemsGet`](docs/sdks/schoollineitems/README.md#get) - Get line items for a school
- [`schoolsCoursesGetAll`](docs/sdks/schoolscourses/README.md#getall) - Get all courses for a school
- [`schoolsCreate`](docs/sdks/schools/README.md#create) - Create a new school
- [`schoolsDelete`](docs/sdks/schools/README.md#delete) - Delete a school
- [`schoolsGet`](docs/sdks/schools/README.md#get) - Get a single school
- [`schoolsGetAll`](docs/sdks/schools/README.md#getall) - Get all schools
- [`schoolsGetClasses`](docs/sdks/schools/README.md#getclasses) - Get all classes for a school
- [`schoolsGetEnrollments`](docs/sdks/schools/README.md#getenrollments) - Get all enrollments for a school
- [`schoolsGetStudents`](docs/sdks/schools/README.md#getstudents) - Get all students for a school
- [`schoolsGetTeachers`](docs/sdks/schools/README.md#getteachers) - Get all teachers for a school
- [`schoolsGetTerms`](docs/sdks/schools/README.md#getterms) - Get all terms for a school
- [`schoolsLineItemsCreate`](docs/sdks/schoolslineitems/README.md#create) - Create line items for a school
- [`schoolsScoreScalesGet`](docs/sdks/schoolsscorescales/README.md#get) - Get score scales for a school
- [`schoolsUpdate`](docs/sdks/schools/README.md#update) - Update a school
- [`scoreScalesCreate`](docs/sdks/scorescales/README.md#create) - Create a new score scale
- [`scoreScalesDelete`](docs/sdks/scorescales/README.md#delete) - Delete a score scale
- [`scoreScalesGet`](docs/sdks/scorescales/README.md#get) - Get a specific score scale
- [`scoreScalesList`](docs/sdks/scorescales/README.md#list) - Get all score scales
- [`scoreScalesUpdate`](docs/sdks/scorescales/README.md#update) - Update an existing score scale
- [`studentsClassesGet`](docs/sdks/studentsclasses/README.md#get) - Get classes for a student
- [`studentsGet`](docs/sdks/students/README.md#get) - Get a specific student
- [`studentsGetAll`](docs/sdks/students/README.md#getall) - Get all students
- [`studentsGetForClass`](docs/sdks/students/README.md#getforclass) - Get students for a specific class in a school
- [`teachersGet`](docs/sdks/teachers/README.md#get) - Get a specific teacher
- [`teachersGetAll`](docs/sdks/teachers/README.md#getall) - Get all teachers
- [`teachersGetClasses`](docs/sdks/teachers/README.md#getclasses) - Get classes for a teacher
- [`termsGet`](docs/sdks/terms/README.md#get) - Get a specific term
- [`termsGetClasses`](docs/sdks/terms/README.md#getclasses) - Get classes for a term
- [`termsGetGradingPeriods`](docs/sdks/terms/README.md#getgradingperiods) - Get grading periods for a term
- [`termsList`](docs/sdks/terms/README.md#list) - Get all terms
- [`userResourcesRemove`](docs/sdks/userresources/README.md#remove) - Remove a resource from a user
- [`usersAssignResource`](docs/sdks/users/README.md#assignresource) - Assign a resource to a user
- [`usersCreate`](docs/sdks/users/README.md#create) - Create a new user
- [`usersDelete`](docs/sdks/users/README.md#delete) - Delete a user
- [`usersGet`](docs/sdks/users/README.md#get) - Get a specific user
- [`usersGetAll`](docs/sdks/users/README.md#getall) - Get all users
- [`usersGetClasses`](docs/sdks/users/README.md#getclasses) - Get classes for a user
- [`usersGetResources`](docs/sdks/users/README.md#getresources) - Get resources for a user
- [`usersUpdate`](docs/sdks/users/README.md#update) - Update an existing user

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
  const result = await oneRoster.assessmentResults.getAll({
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

  // Handle the result
  console.log(result);
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
  const result = await oneRoster.scoreScales.list();

  // Handle the result
  console.log(result);
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
    result = await oneRoster.scoreScales.list();

    // Handle the result
    console.log(result);
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

### Select Server by Name

You can override the default server globally by passing a server name to the `server: keyof typeof ServerList` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the names associated with the available servers:

| Name      | Server                                  | Description                   |
| --------- | --------------------------------------- | ----------------------------- |
| `staging` | `https://api.staging.alpha-1edtech.com` | OneRoster staging environment |

#### Example

```typescript
import { OneRoster } from "@superbuilders/oneroster";

const oneRoster = new OneRoster({
  server: "staging",
  security: {
    clientID: process.env["ONEROSTER_CLIENT_ID"] ?? "",
    clientSecret: process.env["ONEROSTER_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await oneRoster.scoreScales.list();

  // Handle the result
  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
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
  const result = await oneRoster.scoreScales.list();

  // Handle the result
  console.log(result);
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
