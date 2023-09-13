import RequestService, { IHash } from "./api_client/request_service";
import { SourceType } from '../types/entities'
import { PaginatedResponse } from "./api_client/types";

export default class SourceService extends RequestService<SourceType>{
  
  async index(params?: IHash<string | number>): Promise<PaginatedResponse<SourceType>>{
    const response = await this._index("sources", params)
    return response as PaginatedResponse<SourceType>
  }
  
}