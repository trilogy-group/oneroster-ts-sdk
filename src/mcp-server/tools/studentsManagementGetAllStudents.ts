/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { studentsManagementGetAllStudents } from "../../funcs/studentsManagementGetAllStudents.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetAllStudentsRequest$inboundSchema,
};

export const tool$studentsManagementGetAllStudents: ToolDefinition<
  typeof args
> = {
  name: "students-management-get-all-students",
  description: `Get all Students

To get all Students on the service provider.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await studentsManagementGetAllStudents(
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
