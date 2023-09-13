import RequestService, { IHash } from "./api_client/request_service";
import { CategoryType } from '../types/entities'
import { PaginatedResponse } from "./api_client/types";

export default class CategoryService extends RequestService<CategoryType>{
  
  async index(params?: IHash<string | number>): Promise<PaginatedResponse<CategoryType>>{
    const response = await this._index("categories", params)
    return response as PaginatedResponse<CategoryType>
  }
  
}