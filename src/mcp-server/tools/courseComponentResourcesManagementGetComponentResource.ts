/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { courseComponentResourcesManagementGetComponentResource } from "../../funcs/courseComponentResourcesManagementGetComponentResource.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetComponentResourceRequest$inboundSchema,
};

export const tool$courseComponentResourcesManagementGetComponentResource:
  ToolDefinition<typeof args> = {
    name: "course-component-resources-management-get-component-resource",
    description: `Get a specific Component Resource

Get a specific Component Resource on the service provider. If the corresponding record cannot be located, the api will return a 404 error code and message 'Component Resource not found.'`,
    args,
    tool: async (client, args, ctx) => {
      const [result, apiCall] =
        await courseComponentResourcesManagementGetComponentResource(
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
