/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { coursesManagementDeleteCourse } from "../../funcs/coursesManagementDeleteCourse.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.DeleteCourseRequest$inboundSchema,
};

export const tool$coursesManagementDeleteCourse: ToolDefinition<typeof args> = {
  name: "courses-management-delete-course",
  description: `Delete a Course

Perform a soft delete on a specific Course on the service provider. The operation changes the status of the Course to 'tobedeleted'.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await coursesManagementDeleteCourse(
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

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
