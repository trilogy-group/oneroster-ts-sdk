/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { schoolsManagementGetCoursesForSchool } from "../../funcs/schoolsManagementGetCoursesForSchool.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetCoursesForSchoolRequest$inboundSchema,
};

export const tool$schoolsManagementGetCoursesForSchool: ToolDefinition<
  typeof args
> = {
  name: "schools-management-get-courses-for-school",
  description: `Get all Courses for a School

To get all Courses for a School on the service provider. If the specified school cannot be identified within the service provider, the api will return a 404 error code and message 'School not found.'`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await schoolsManagementGetCoursesForSchool(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value.result;

    return formatResult(value, apiCall);
  },
};
