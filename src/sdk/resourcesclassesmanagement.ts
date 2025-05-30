/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { resourcesClassesManagementAssignResourceToClass } from "../funcs/resourcesClassesManagementAssignResourceToClass.js";
import { resourcesClassesManagementGetResourcesForClass } from "../funcs/resourcesClassesManagementGetResourcesForClass.js";
import { resourcesClassesManagementRemoveResourceFromClass } from "../funcs/resourcesClassesManagementRemoveResourceFromClass.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class ResourcesClassesManagement extends ClientSDK {
  /**
   * Get resources for a class
   *
   * @remarks
   * To get the collection of resources available to a specific class. If the corresponding record cannot be located, the api will return a 404 error code and message 'Class not found.'
   */
  async getResourcesForClass(
    request: operations.GetResourcesForClassRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.GetResourcesForClassResponse, { offset: number }>
  > {
    return unwrapResultIterator(resourcesClassesManagementGetResourcesForClass(
      this,
      request,
      options,
    ));
  }

  /**
   * Assign a resource to a class
   *
   * @remarks
   * To assign an existing resource to the specified class. The responding system must return the set of sourcedIds that have been allocated to the newly created resource records.
   */
  async assignResourceToClass(
    request: operations.AssignResourceToClassRequest,
    options?: RequestOptions,
  ): Promise<operations.AssignResourceToClassResponse> {
    return unwrapAsync(resourcesClassesManagementAssignResourceToClass(
      this,
      request,
      options,
    ));
  }

  /**
   * Remove a resource from a class
   *
   * @remarks
   * To unassign an existing resource from the specified class. If the corresponding record cannot be located, the api will return a 404 error code and message 'Class or resource relationship not found.'
   */
  async removeResourceFromClass(
    request: operations.RemoveResourceFromClassRequest,
    options?: RequestOptions,
  ): Promise<{ [k: string]: any }> {
    return unwrapAsync(resourcesClassesManagementRemoveResourceFromClass(
      this,
      request,
      options,
    ));
  }
}
