import { OneRoster } from "@superbuilders/oneroster"

async function main() {
  const oneRoster = new OneRoster({
    security: {
      clientID: process.env["ONEROSTER_STAGING_CLIENT_ID"],
      clientSecret: process.env["ONEROSTER_STAGING_CLIENT_SECRET"],
    },
  });

  // Test getAllAcademicSessions
  try {
    console.log("Testing getAllAcademicSessions");
    const academicSessions = await oneRoster.academicSessionsManagement.getAllAcademicSessions({});
    for await (const page of academicSessions) {
      console.log("Academic Sessions Page:", page.result);
    }
  } catch (error) {
    console.error("Error in getAllAcademicSessions:", error);
  }

  // Test getAllAssessmentLineItems
  try {
    console.log("Testing getAllAssessmentLineItems");
    const assessmentLineItems = await oneRoster.assessmentLineItemsManagement.getAllAssessmentLineItems({});
    for await (const page of assessmentLineItems) {
      console.log("Assessment Line Items Page:", page.result);
    }
  } catch (error) {
    console.error("Error in getAllAssessmentLineItems:", error);
  }

  // Test getAllAssessmentResults
  try {
    console.log("Testing getAllAssessmentResults");
    const assessmentResults = await oneRoster.assessmentResultsManagement.getAllAssessmentResults({});
    for await (const page of assessmentResults) {
      console.log("Assessment Results Page:", page.result);
    }
  } catch (error) {
    console.error("Error in getAllAssessmentResults:", error);
  }

  // Test getAllCategories
  try {
    console.log("Testing getAllCategories");
    const categories = await oneRoster.categoriesManagement.getAllCategories({});
    for await (const page of categories) {
      console.log("Categories Page:", page.result);
    }
  } catch (error) {
    console.error("Error in getAllCategories:", error);
  }

  // Test getAllClasses
  try {
    console.log("Testing getAllClasses");
    const classes = await oneRoster.classesManagement.getAllClasses({});
    for await (const page of classes) {
      console.log("Classes Page:", page.result);
    }
  } catch (error) {
    console.error("Error in getAllClasses:", error);
  }

  // Test getAllCourses
  try {
    console.log("Testing getAllCourses");
    const courses = await oneRoster.coursesManagement.getAllCourses({});
    for await (const page of courses) {
      console.log("Courses Page:", page.result);
    }
  } catch (error) {
    console.error("Error in getAllCourses:", error);
  }

  // Test getAllDemographics
  try {
    console.log("Testing getAllDemographics");
    const demographics = await oneRoster.demographicsManagement.getAllDemographics({});
    for await (const page of demographics) {
      console.log("Demographics Page:", page.result);
    }
  } catch (error) {
    console.error("Error in getAllDemographics:", error);
  }

  // Test getAllEnrollments
  try {
    console.log("Testing getAllEnrollments");
    const enrollments = await oneRoster.enrollmentsManagement.getAllEnrollments({});
    for await (const page of enrollments) {
      console.log("Enrollments Page:", page.result);
    }
  } catch (error) {
    console.error("Error in getAllEnrollments:", error);
  }

  // Test getAllGradingPeriods
  try {
    console.log("Testing getAllGradingPeriods");
    const gradingPeriods = await oneRoster.gradingPeriodsManagement.getAllGradingPeriods({});
    for await (const page of gradingPeriods) {
      console.log("Grading Periods Page:", page.result);
    }
  } catch (error) {
    console.error("Error in getAllGradingPeriods:", error);
  }

  // Test getAllLineItems
  try {
    console.log("Testing getAllLineItems");
    const lineItems = await oneRoster.lineItemsManagement.getAllLineItems({});
    for await (const page of lineItems) {
      console.log("Line Items Page:", page.result);
    }
  } catch (error) {
    console.error("Error in getAllLineItems:", error);
  }

  // Test getAllOrgs
  try {
    console.log("Testing getAllOrgs");
    const orgs = await oneRoster.organizationsManagement.getAllOrgs({});
    for await (const page of orgs) {
      console.log("Organizations Page:", page.result);
    }
  } catch (error) {
    console.error("Error in getAllOrgs:", error);
  }

  // Test getAllResources
  try {
    console.log("Testing getAllResources");
    const resources = await oneRoster.resourcesManagement.getAllResources({});
    for await (const page of resources) {
      console.log("Resources Page:", page.result);
    }
  } catch (error) {
    console.error("Error in getAllResources:", error);
  }

  // Test getAllResults
  try {
    console.log("Testing getAllResults");
    const results = await oneRoster.resultsManagement.getAllResults({});
    for await (const page of results) {
      console.log("Results Page:", page.result);
    }
  } catch (error) {
    console.error("Error in getAllResults:", error);
  }

  // Test getAllSchools
  try {
    console.log("Testing getAllSchools");
    const schools = await oneRoster.schoolsManagement.getAllSchools({});
    let schoolId: string | undefined;
    for await (const page of schools) {
      console.log("Schools Page:", page.result);
      if (page.result.orgs.length > 0 && page.result.orgs[0] != null) {
        schoolId = page.result.orgs[0].sourcedId; // Store a school ID for later use
      }
    }

    // Test getClassesForSchool if we have a schoolId
    if (schoolId) {
      try {
        console.log(`Testing getClassesForSchool with schoolId: ${schoolId}`);
        const classesForSchool = await oneRoster.classesManagement.getClassesForSchool({
          schoolSourcedId: schoolId,
        });
        for await (const page of classesForSchool) {
          console.log("Classes for School Page:", page.result);
        }
      } catch (error) {
        console.error("Error in getClassesForSchool:", error);
      }
    } else {
      console.log("No schools found, skipping getClassesForSchool");
    }
  } catch (error) {
    console.error("Error in getAllSchools:", error);
  }

  // Test getAllScoreScales
  try {
    console.log("Testing getAllScoreScales");
    const scoreScales = await oneRoster.scoreScalesManagement.getAllScoreScales({});
    for await (const page of scoreScales) {
      console.log("Score Scales Page:", page.result);
    }
  } catch (error) {
    console.error("Error in getAllScoreScales:", error);
  }

  // Test getAllStudents
  try {
    console.log("Testing getAllStudents");
    const students = await oneRoster.studentsManagement.getAllStudents({});
    for await (const page of students) {
      console.log("Students Page:", page.result);
    }
  } catch (error) {
    console.error("Error in getAllStudents:", error);
  }

  // Test getAllTeachers
  try {
    console.log("Testing getAllTeachers");
    const teachers = await oneRoster.teachersManagement.getAllTeachers({});
    for await (const page of teachers) {
      console.log("Teachers Page:", page.result);
    }
  } catch (error) {
    console.error("Error in getAllTeachers:", error);
  }

  // Test getAllTerms
  try {
    console.log("Testing getAllTerms");
    const terms = await oneRoster.termsManagement.getAllTerms({});
    for await (const page of terms) {
      console.log("Terms Page:", page.result);
    }
  } catch (error) {
    console.error("Error in getAllTerms:", error);
  }

  // Test getAllUsers
  try {
    console.log("Testing getAllUsers");
    const users = await oneRoster.usersManagement.getAllUsers({});
    let userId: string | undefined;
    for await (const page of users) {
      console.log("Users Page:", page.result);
      if (page.result.users.length > 0 && page.result.users[0] != null) {
        userId = page.result.users[0].sourcedId; // Store a user ID for later use
      }
    }

    // Test getClassesForUser if we have a userId
    if (userId) {
      try {
        console.log(`Testing getClassesForUser with userId: ${userId}`);
        const classesForUser = await oneRoster.classesManagement.getClassesForUser({
          userSourcedId: userId,
        });
        for await (const page of classesForUser) {
          console.log("Classes for User Page:", page.result);
        }
      } catch (error) {
        console.error("Error in getClassesForUser:", error);
      }
    } else {
      console.log("No users found, skipping getClassesForUser");
    }
  } catch (error) {
    console.error("Error in getAllUsers:", error);
  }
}

main().catch(console.error);
