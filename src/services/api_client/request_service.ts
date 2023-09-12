import { IHash } from '../../types/util.d'
import { PaginationType } from './types.d'
import { ReqProps } from './axios';
import { AxiosRequestConfig } from 'axios';
import { ApiResponse } from "./types";
import Client from './client';

// Export used types
export type { IHash, PaginationType, AxiosRequestConfig }

export default class RequestService<DataType> {

  /**
   * Client extends Axios
   */
  protected client;

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
    return await this.client.get<ApiResponse<DataType>>(url, params, config);
  }

  protected async _create(url: string, payload: unknown, config: AxiosRequestConfig = {}): Promise<ApiResponse<DataType>> {
    return await this.client.post<ApiResponse<DataType>>(url, payload, config);
  }
 
  protected async _update(url: string, payload: unknown, config: AxiosRequestConfig = {}): Promise<ApiResponse<DataType>> {
    return await this.client.put<ApiResponse<DataType>>(url, payload, config);
  }
  
  protected async _delete(url: string, params?: IHash<string | number>, config: AxiosRequestConfig = {}): Promise<ApiResponse<DataType>> {
    return await this.client.delete<ApiResponse<DataType>>(url, params, config);
  }
  
  protected async _patch(url: string, payload: unknown, config: AxiosRequestConfig = {}): Promise<ApiResponse<DataType>> {
    return await this.client.patch<ApiResponse<DataType>>(url, payload, config);
  }
}