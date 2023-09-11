import { IHash } from '../../types/util.d'
import { PaginationType } from './types.d'
import Axios, { ReqProps } from './axios';
import { AxiosRequestConfig } from 'axios';
import { ApiResponse } from "./types";
import Client from './client';

// Export used types
export type { IHash, PaginationType, AxiosRequestConfig }

export default class RequestService<DataType> {

  protected client: Axios;

  // req: GetServerSidePropsContext["req"] | NextRequest | NextApiRequest
  constructor(reqProps: ReqProps) {
    this.client = new Client(reqProps);
  }

  getReqProps(): ReqProps {
    return this.client.reqProps
  }

  /**
   * Return a list of DataType
   * Auth is added automatically by the client (ExternalClient)
   * 
   * @param url API url
   * @param params Query string parameters
   * @param config Axios request configuration
   * 
   * @returns Array of DataType
   */
  protected async _index(url: string, params?: IHash<string | number>, config: AxiosRequestConfig = {}): Promise<ApiResponse<DataType>> {
    return await this.client.get<ApiResponse<DataType>>(url, params, config);
  }
  
  protected async _show(url: string, params?: IHash<string | number>, config: AxiosRequestConfig = {}): Promise<ApiResponse<DataType>> {
    return await this.client.get<DataType>(url, params, config);
  }

  protected async _create(url: string, payload: any, config: AxiosRequestConfig = {}): Promise<ApiResponse<DataType>> {
    return await this.client.post<DataType>(url, payload, config);
  }
 
  protected async _update(url: string, payload: any, config: AxiosRequestConfig = {}): Promise<ApiResponse<DataType>> {
    return await this.client.put<DataType>(url, payload, config);
  }
  
  protected async _delete(url: string, params?: IHash<string | number>, config: AxiosRequestConfig = {}): Promise<ApiResponse<DataType>> {
    return await this.client.delete<DataType>(url, params, config);
  }
  
  protected async _patch(url: string, payload: any, config: AxiosRequestConfig = {}): Promise<ApiResponse<DataType>> {
    return await this.client.patch<DataType>(url, payload, config);
  }

  /**
   * Return a default pagination or a pagination object from query
   * 
   * @param query request query object
   * @returns PaginationType
   */
  static getPagination(query?: IHash<string> | undefined): PaginationType {
    const { current, page_size: pageSize } = query || {};

    /**
     * *INFO: Probably if nothing is sent, should be return undefined, but
     * *it could be insecure and a good practice should be incentive the  use of default pagination (like now!)
     */
    return {
      current: Number(current) || 1,
      pageSize: Number(pageSize) || 12,
    } as PaginationType;
  }
}