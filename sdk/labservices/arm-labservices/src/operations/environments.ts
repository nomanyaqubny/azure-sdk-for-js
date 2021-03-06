/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/environmentsMappers";
import * as Parameters from "../models/parameters";
import { ManagedLabsClientContext } from "../managedLabsClientContext";

/** Class representing a Environments. */
export class Environments {
  private readonly client: ManagedLabsClientContext;

  /**
   * Create a Environments.
   * @param {ManagedLabsClientContext} client Reference to the service client.
   */
  constructor(client: ManagedLabsClientContext) {
    this.client = client;
  }

  /**
   * List environments in a given environment setting.
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param labName The name of the lab.
   * @param environmentSettingName The name of the environment Setting.
   * @param [options] The optional parameters
   * @returns Promise<Models.EnvironmentsListResponse>
   */
  list(resourceGroupName: string, labAccountName: string, labName: string, environmentSettingName: string, options?: Models.EnvironmentsListOptionalParams): Promise<Models.EnvironmentsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param labName The name of the lab.
   * @param environmentSettingName The name of the environment Setting.
   * @param callback The callback
   */
  list(resourceGroupName: string, labAccountName: string, labName: string, environmentSettingName: string, callback: msRest.ServiceCallback<Models.ResponseWithContinuationEnvironment>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param labName The name of the lab.
   * @param environmentSettingName The name of the environment Setting.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, labAccountName: string, labName: string, environmentSettingName: string, options: Models.EnvironmentsListOptionalParams, callback: msRest.ServiceCallback<Models.ResponseWithContinuationEnvironment>): void;
  list(resourceGroupName: string, labAccountName: string, labName: string, environmentSettingName: string, options?: Models.EnvironmentsListOptionalParams | msRest.ServiceCallback<Models.ResponseWithContinuationEnvironment>, callback?: msRest.ServiceCallback<Models.ResponseWithContinuationEnvironment>): Promise<Models.EnvironmentsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labAccountName,
        labName,
        environmentSettingName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.EnvironmentsListResponse>;
  }

  /**
   * Get environment
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param labName The name of the lab.
   * @param environmentSettingName The name of the environment Setting.
   * @param environmentName The name of the environment.
   * @param [options] The optional parameters
   * @returns Promise<Models.EnvironmentsGetResponse>
   */
  get(resourceGroupName: string, labAccountName: string, labName: string, environmentSettingName: string, environmentName: string, options?: Models.EnvironmentsGetOptionalParams): Promise<Models.EnvironmentsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param labName The name of the lab.
   * @param environmentSettingName The name of the environment Setting.
   * @param environmentName The name of the environment.
   * @param callback The callback
   */
  get(resourceGroupName: string, labAccountName: string, labName: string, environmentSettingName: string, environmentName: string, callback: msRest.ServiceCallback<Models.Environment>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param labName The name of the lab.
   * @param environmentSettingName The name of the environment Setting.
   * @param environmentName The name of the environment.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, labAccountName: string, labName: string, environmentSettingName: string, environmentName: string, options: Models.EnvironmentsGetOptionalParams, callback: msRest.ServiceCallback<Models.Environment>): void;
  get(resourceGroupName: string, labAccountName: string, labName: string, environmentSettingName: string, environmentName: string, options?: Models.EnvironmentsGetOptionalParams | msRest.ServiceCallback<Models.Environment>, callback?: msRest.ServiceCallback<Models.Environment>): Promise<Models.EnvironmentsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labAccountName,
        labName,
        environmentSettingName,
        environmentName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.EnvironmentsGetResponse>;
  }

  /**
   * Create or replace an existing Environment.
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param labName The name of the lab.
   * @param environmentSettingName The name of the environment Setting.
   * @param environmentName The name of the environment.
   * @param environment Represents an environment instance
   * @param [options] The optional parameters
   * @returns Promise<Models.EnvironmentsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, labAccountName: string, labName: string, environmentSettingName: string, environmentName: string, environment: Models.Environment, options?: msRest.RequestOptionsBase): Promise<Models.EnvironmentsCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param labName The name of the lab.
   * @param environmentSettingName The name of the environment Setting.
   * @param environmentName The name of the environment.
   * @param environment Represents an environment instance
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, labAccountName: string, labName: string, environmentSettingName: string, environmentName: string, environment: Models.Environment, callback: msRest.ServiceCallback<Models.Environment>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param labName The name of the lab.
   * @param environmentSettingName The name of the environment Setting.
   * @param environmentName The name of the environment.
   * @param environment Represents an environment instance
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, labAccountName: string, labName: string, environmentSettingName: string, environmentName: string, environment: Models.Environment, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Environment>): void;
  createOrUpdate(resourceGroupName: string, labAccountName: string, labName: string, environmentSettingName: string, environmentName: string, environment: Models.Environment, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Environment>, callback?: msRest.ServiceCallback<Models.Environment>): Promise<Models.EnvironmentsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labAccountName,
        labName,
        environmentSettingName,
        environmentName,
        environment,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.EnvironmentsCreateOrUpdateResponse>;
  }

  /**
   * Delete environment. This operation can take a while to complete
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param labName The name of the lab.
   * @param environmentSettingName The name of the environment Setting.
   * @param environmentName The name of the environment.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, labAccountName: string, labName: string, environmentSettingName: string, environmentName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,labAccountName,labName,environmentSettingName,environmentName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Modify properties of environments.
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param labName The name of the lab.
   * @param environmentSettingName The name of the environment Setting.
   * @param environmentName The name of the environment.
   * @param environment Represents an environment instance
   * @param [options] The optional parameters
   * @returns Promise<Models.EnvironmentsUpdateResponse>
   */
  update(resourceGroupName: string, labAccountName: string, labName: string, environmentSettingName: string, environmentName: string, environment: Models.EnvironmentFragment, options?: msRest.RequestOptionsBase): Promise<Models.EnvironmentsUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param labName The name of the lab.
   * @param environmentSettingName The name of the environment Setting.
   * @param environmentName The name of the environment.
   * @param environment Represents an environment instance
   * @param callback The callback
   */
  update(resourceGroupName: string, labAccountName: string, labName: string, environmentSettingName: string, environmentName: string, environment: Models.EnvironmentFragment, callback: msRest.ServiceCallback<Models.Environment>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param labName The name of the lab.
   * @param environmentSettingName The name of the environment Setting.
   * @param environmentName The name of the environment.
   * @param environment Represents an environment instance
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, labAccountName: string, labName: string, environmentSettingName: string, environmentName: string, environment: Models.EnvironmentFragment, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Environment>): void;
  update(resourceGroupName: string, labAccountName: string, labName: string, environmentSettingName: string, environmentName: string, environment: Models.EnvironmentFragment, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Environment>, callback?: msRest.ServiceCallback<Models.Environment>): Promise<Models.EnvironmentsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labAccountName,
        labName,
        environmentSettingName,
        environmentName,
        environment,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.EnvironmentsUpdateResponse>;
  }

  /**
   * Claims the environment and assigns it to the user
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param labName The name of the lab.
   * @param environmentSettingName The name of the environment Setting.
   * @param environmentName The name of the environment.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  claim(resourceGroupName: string, labAccountName: string, labName: string, environmentSettingName: string, environmentName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param labName The name of the lab.
   * @param environmentSettingName The name of the environment Setting.
   * @param environmentName The name of the environment.
   * @param callback The callback
   */
  claim(resourceGroupName: string, labAccountName: string, labName: string, environmentSettingName: string, environmentName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param labName The name of the lab.
   * @param environmentSettingName The name of the environment Setting.
   * @param environmentName The name of the environment.
   * @param options The optional parameters
   * @param callback The callback
   */
  claim(resourceGroupName: string, labAccountName: string, labName: string, environmentSettingName: string, environmentName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  claim(resourceGroupName: string, labAccountName: string, labName: string, environmentSettingName: string, environmentName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labAccountName,
        labName,
        environmentSettingName,
        environmentName,
        options
      },
      claimOperationSpec,
      callback);
  }

  /**
   * Resets the user password on an environment This operation can take a while to complete
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param labName The name of the lab.
   * @param environmentSettingName The name of the environment Setting.
   * @param environmentName The name of the environment.
   * @param resetPasswordPayload Represents the payload for resetting passwords.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  resetPassword(resourceGroupName: string, labAccountName: string, labName: string, environmentSettingName: string, environmentName: string, resetPasswordPayload: Models.ResetPasswordPayload, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginResetPassword(resourceGroupName,labAccountName,labName,environmentSettingName,environmentName,resetPasswordPayload,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Starts an environment by starting all resources inside the environment. This operation can take
   * a while to complete
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param labName The name of the lab.
   * @param environmentSettingName The name of the environment Setting.
   * @param environmentName The name of the environment.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  start(resourceGroupName: string, labAccountName: string, labName: string, environmentSettingName: string, environmentName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginStart(resourceGroupName,labAccountName,labName,environmentSettingName,environmentName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Stops an environment by stopping all resources inside the environment This operation can take a
   * while to complete
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param labName The name of the lab.
   * @param environmentSettingName The name of the environment Setting.
   * @param environmentName The name of the environment.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  stop(resourceGroupName: string, labAccountName: string, labName: string, environmentSettingName: string, environmentName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginStop(resourceGroupName,labAccountName,labName,environmentSettingName,environmentName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Delete environment. This operation can take a while to complete
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param labName The name of the lab.
   * @param environmentSettingName The name of the environment Setting.
   * @param environmentName The name of the environment.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, labAccountName: string, labName: string, environmentSettingName: string, environmentName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        labAccountName,
        labName,
        environmentSettingName,
        environmentName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Resets the user password on an environment This operation can take a while to complete
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param labName The name of the lab.
   * @param environmentSettingName The name of the environment Setting.
   * @param environmentName The name of the environment.
   * @param resetPasswordPayload Represents the payload for resetting passwords.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginResetPassword(resourceGroupName: string, labAccountName: string, labName: string, environmentSettingName: string, environmentName: string, resetPasswordPayload: Models.ResetPasswordPayload, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        labAccountName,
        labName,
        environmentSettingName,
        environmentName,
        resetPasswordPayload,
        options
      },
      beginResetPasswordOperationSpec,
      options);
  }

  /**
   * Starts an environment by starting all resources inside the environment. This operation can take
   * a while to complete
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param labName The name of the lab.
   * @param environmentSettingName The name of the environment Setting.
   * @param environmentName The name of the environment.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginStart(resourceGroupName: string, labAccountName: string, labName: string, environmentSettingName: string, environmentName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        labAccountName,
        labName,
        environmentSettingName,
        environmentName,
        options
      },
      beginStartOperationSpec,
      options);
  }

  /**
   * Stops an environment by stopping all resources inside the environment This operation can take a
   * while to complete
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param labName The name of the lab.
   * @param environmentSettingName The name of the environment Setting.
   * @param environmentName The name of the environment.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginStop(resourceGroupName: string, labAccountName: string, labName: string, environmentSettingName: string, environmentName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        labAccountName,
        labName,
        environmentSettingName,
        environmentName,
        options
      },
      beginStopOperationSpec,
      options);
  }

  /**
   * List environments in a given environment setting.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.EnvironmentsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.EnvironmentsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ResponseWithContinuationEnvironment>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ResponseWithContinuationEnvironment>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ResponseWithContinuationEnvironment>, callback?: msRest.ServiceCallback<Models.ResponseWithContinuationEnvironment>): Promise<Models.EnvironmentsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.EnvironmentsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/labs/{labName}/environmentsettings/{environmentSettingName}/environments",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labAccountName,
    Parameters.labName,
    Parameters.environmentSettingName
  ],
  queryParameters: [
    Parameters.expand,
    Parameters.filter,
    Parameters.top,
    Parameters.orderby,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ResponseWithContinuationEnvironment
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/labs/{labName}/environmentsettings/{environmentSettingName}/environments/{environmentName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labAccountName,
    Parameters.labName,
    Parameters.environmentSettingName,
    Parameters.environmentName
  ],
  queryParameters: [
    Parameters.expand,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Environment
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/labs/{labName}/environmentsettings/{environmentSettingName}/environments/{environmentName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labAccountName,
    Parameters.labName,
    Parameters.environmentSettingName,
    Parameters.environmentName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "environment",
    mapper: {
      ...Mappers.Environment,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Environment
    },
    201: {
      bodyMapper: Mappers.Environment
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/labs/{labName}/environmentsettings/{environmentSettingName}/environments/{environmentName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labAccountName,
    Parameters.labName,
    Parameters.environmentSettingName,
    Parameters.environmentName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "environment",
    mapper: {
      ...Mappers.EnvironmentFragment,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Environment
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const claimOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/labs/{labName}/environmentsettings/{environmentSettingName}/environments/{environmentName}/claim",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labAccountName,
    Parameters.labName,
    Parameters.environmentSettingName,
    Parameters.environmentName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/labs/{labName}/environmentsettings/{environmentSettingName}/environments/{environmentName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labAccountName,
    Parameters.labName,
    Parameters.environmentSettingName,
    Parameters.environmentName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginResetPasswordOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/labs/{labName}/environmentsettings/{environmentSettingName}/environments/{environmentName}/resetPassword",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labAccountName,
    Parameters.labName,
    Parameters.environmentSettingName,
    Parameters.environmentName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "resetPasswordPayload",
    mapper: {
      ...Mappers.ResetPasswordPayload,
      required: true
    }
  },
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginStartOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/labs/{labName}/environmentsettings/{environmentSettingName}/environments/{environmentName}/start",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labAccountName,
    Parameters.labName,
    Parameters.environmentSettingName,
    Parameters.environmentName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginStopOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/labs/{labName}/environmentsettings/{environmentSettingName}/environments/{environmentName}/stop",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labAccountName,
    Parameters.labName,
    Parameters.environmentSettingName,
    Parameters.environmentName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ResponseWithContinuationEnvironment
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
