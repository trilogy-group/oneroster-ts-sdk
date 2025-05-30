/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { studentsManagementGetStudentsForClassInSchool } from "../../funcs/studentsManagementGetStudentsForClassInSchool.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetStudentsForClassInSchoolRequest$inboundSchema,
};

export const tool$studentsManagementGetStudentsForClassInSchool: ToolDefinition<
  typeof args
> = {
  name: "students-management-get-students-for-class-in-school",
  description: `Get Students for a specific Class in a School

To get all Students for a Class in a School on the service provider. If the specified school and/or class cannot be identified within the service provider, the api will return a 404 error code and message 'School or class not found.'`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] =
      await studentsManagementGetStudentsForClassInSchool(
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
