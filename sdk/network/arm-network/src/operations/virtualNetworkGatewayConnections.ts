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
import * as Mappers from "../models/virtualNetworkGatewayConnectionsMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a VirtualNetworkGatewayConnections. */
export class VirtualNetworkGatewayConnections {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a VirtualNetworkGatewayConnections.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Creates or updates a virtual network gateway connection in the specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkGatewayConnectionName The name of the virtual network gateway connection.
   * @param parameters Parameters supplied to the create or update virtual network gateway connection
   * operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualNetworkGatewayConnectionsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.VirtualNetworkGatewayConnection, options?: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkGatewayConnectionsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,virtualNetworkGatewayConnectionName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.VirtualNetworkGatewayConnectionsCreateOrUpdateResponse>;
  }

  /**
   * Gets the specified virtual network gateway connection by resource group.
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkGatewayConnectionName The name of the virtual network gateway connection.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualNetworkGatewayConnectionsGetResponse>
   */
  get(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkGatewayConnectionsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkGatewayConnectionName The name of the virtual network gateway connection.
   * @param callback The callback
   */
  get(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, callback: msRest.ServiceCallback<Models.VirtualNetworkGatewayConnection>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkGatewayConnectionName The name of the virtual network gateway connection.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetworkGatewayConnection>): void;
  get(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.VirtualNetworkGatewayConnection>, callback?: msRest.ServiceCallback<Models.VirtualNetworkGatewayConnection>): Promise<Models.VirtualNetworkGatewayConnectionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        virtualNetworkGatewayConnectionName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.VirtualNetworkGatewayConnectionsGetResponse>;
  }

  /**
   * Deletes the specified virtual network Gateway connection.
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkGatewayConnectionName The name of the virtual network gateway connection.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,virtualNetworkGatewayConnectionName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Updates a virtual network gateway connection tags.
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkGatewayConnectionName The name of the virtual network gateway connection.
   * @param parameters Parameters supplied to update virtual network gateway connection tags.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualNetworkGatewayConnectionsUpdateTagsResponse>
   */
  updateTags(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.TagsObject, options?: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkGatewayConnectionsUpdateTagsResponse> {
    return this.beginUpdateTags(resourceGroupName,virtualNetworkGatewayConnectionName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.VirtualNetworkGatewayConnectionsUpdateTagsResponse>;
  }

  /**
   * The Put VirtualNetworkGatewayConnectionSharedKey operation sets the virtual network gateway
   * connection shared key for passed virtual network gateway connection in the specified resource
   * group through Network resource provider.
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkGatewayConnectionName The virtual network gateway connection name.
   * @param parameters Parameters supplied to the Begin Set Virtual Network Gateway connection Shared
   * key operation throughNetwork resource provider.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualNetworkGatewayConnectionsSetSharedKeyResponse>
   */
  setSharedKey(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.ConnectionSharedKey, options?: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkGatewayConnectionsSetSharedKeyResponse> {
    return this.beginSetSharedKey(resourceGroupName,virtualNetworkGatewayConnectionName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.VirtualNetworkGatewayConnectionsSetSharedKeyResponse>;
  }

  /**
   * The Get VirtualNetworkGatewayConnectionSharedKey operation retrieves information about the
   * specified virtual network gateway connection shared key through Network resource provider.
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkGatewayConnectionName The virtual network gateway connection shared key
   * name.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualNetworkGatewayConnectionsGetSharedKeyResponse>
   */
  getSharedKey(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkGatewayConnectionsGetSharedKeyResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkGatewayConnectionName The virtual network gateway connection shared key
   * name.
   * @param callback The callback
   */
  getSharedKey(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, callback: msRest.ServiceCallback<Models.ConnectionSharedKey>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkGatewayConnectionName The virtual network gateway connection shared key
   * name.
   * @param options The optional parameters
   * @param callback The callback
   */
  getSharedKey(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ConnectionSharedKey>): void;
  getSharedKey(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ConnectionSharedKey>, callback?: msRest.ServiceCallback<Models.ConnectionSharedKey>): Promise<Models.VirtualNetworkGatewayConnectionsGetSharedKeyResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        virtualNetworkGatewayConnectionName,
        options
      },
      getSharedKeyOperationSpec,
      callback) as Promise<Models.VirtualNetworkGatewayConnectionsGetSharedKeyResponse>;
  }

  /**
   * The List VirtualNetworkGatewayConnections operation retrieves all the virtual network gateways
   * connections created.
   * @param resourceGroupName The name of the resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualNetworkGatewayConnectionsListResponse>
   */
  list(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkGatewayConnectionsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param callback The callback
   */
  list(resourceGroupName: string, callback: msRest.ServiceCallback<Models.VirtualNetworkGatewayConnectionListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetworkGatewayConnectionListResult>): void;
  list(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.VirtualNetworkGatewayConnectionListResult>, callback?: msRest.ServiceCallback<Models.VirtualNetworkGatewayConnectionListResult>): Promise<Models.VirtualNetworkGatewayConnectionsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.VirtualNetworkGatewayConnectionsListResponse>;
  }

  /**
   * The VirtualNetworkGatewayConnectionResetSharedKey operation resets the virtual network gateway
   * connection shared key for passed virtual network gateway connection in the specified resource
   * group through Network resource provider.
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkGatewayConnectionName The virtual network gateway connection reset shared
   * key Name.
   * @param parameters Parameters supplied to the begin reset virtual network gateway connection
   * shared key operation through network resource provider.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualNetworkGatewayConnectionsResetSharedKeyResponse>
   */
  resetSharedKey(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.ConnectionResetSharedKey, options?: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkGatewayConnectionsResetSharedKeyResponse> {
    return this.beginResetSharedKey(resourceGroupName,virtualNetworkGatewayConnectionName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.VirtualNetworkGatewayConnectionsResetSharedKeyResponse>;
  }

  /**
   * Creates or updates a virtual network gateway connection in the specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkGatewayConnectionName The name of the virtual network gateway connection.
   * @param parameters Parameters supplied to the create or update virtual network gateway connection
   * operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.VirtualNetworkGatewayConnection, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        virtualNetworkGatewayConnectionName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Deletes the specified virtual network Gateway connection.
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkGatewayConnectionName The name of the virtual network gateway connection.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        virtualNetworkGatewayConnectionName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Updates a virtual network gateway connection tags.
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkGatewayConnectionName The name of the virtual network gateway connection.
   * @param parameters Parameters supplied to update virtual network gateway connection tags.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdateTags(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.TagsObject, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        virtualNetworkGatewayConnectionName,
        parameters,
        options
      },
      beginUpdateTagsOperationSpec,
      options);
  }

  /**
   * The Put VirtualNetworkGatewayConnectionSharedKey operation sets the virtual network gateway
   * connection shared key for passed virtual network gateway connection in the specified resource
   * group through Network resource provider.
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkGatewayConnectionName The virtual network gateway connection name.
   * @param parameters Parameters supplied to the Begin Set Virtual Network Gateway connection Shared
   * key operation throughNetwork resource provider.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginSetSharedKey(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.ConnectionSharedKey, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        virtualNetworkGatewayConnectionName,
        parameters,
        options
      },
      beginSetSharedKeyOperationSpec,
      options);
  }

  /**
   * The VirtualNetworkGatewayConnectionResetSharedKey operation resets the virtual network gateway
   * connection shared key for passed virtual network gateway connection in the specified resource
   * group through Network resource provider.
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkGatewayConnectionName The virtual network gateway connection reset shared
   * key Name.
   * @param parameters Parameters supplied to the begin reset virtual network gateway connection
   * shared key operation through network resource provider.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginResetSharedKey(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.ConnectionResetSharedKey, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        virtualNetworkGatewayConnectionName,
        parameters,
        options
      },
      beginResetSharedKeyOperationSpec,
      options);
  }

  /**
   * The List VirtualNetworkGatewayConnections operation retrieves all the virtual network gateways
   * connections created.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualNetworkGatewayConnectionsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkGatewayConnectionsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.VirtualNetworkGatewayConnectionListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetworkGatewayConnectionListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.VirtualNetworkGatewayConnectionListResult>, callback?: msRest.ServiceCallback<Models.VirtualNetworkGatewayConnectionListResult>): Promise<Models.VirtualNetworkGatewayConnectionsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.VirtualNetworkGatewayConnectionsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/connections/{virtualNetworkGatewayConnectionName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.virtualNetworkGatewayConnectionName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetworkGatewayConnection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getSharedKeyOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/connections/{virtualNetworkGatewayConnectionName}/sharedkey",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.virtualNetworkGatewayConnectionName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ConnectionSharedKey
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/connections",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetworkGatewayConnectionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/connections/{virtualNetworkGatewayConnectionName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.virtualNetworkGatewayConnectionName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.VirtualNetworkGatewayConnection,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetworkGatewayConnection
    },
    201: {
      bodyMapper: Mappers.VirtualNetworkGatewayConnection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/connections/{virtualNetworkGatewayConnectionName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.virtualNetworkGatewayConnectionName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateTagsOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/connections/{virtualNetworkGatewayConnectionName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.virtualNetworkGatewayConnectionName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.TagsObject,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetworkGatewayConnection
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginSetSharedKeyOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/connections/{virtualNetworkGatewayConnectionName}/sharedkey",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.virtualNetworkGatewayConnectionName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ConnectionSharedKey,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ConnectionSharedKey
    },
    201: {
      bodyMapper: Mappers.ConnectionSharedKey
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginResetSharedKeyOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/connections/{virtualNetworkGatewayConnectionName}/sharedkey/reset",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.virtualNetworkGatewayConnectionName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ConnectionResetSharedKey,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ConnectionResetSharedKey
    },
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
      bodyMapper: Mappers.VirtualNetworkGatewayConnectionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
