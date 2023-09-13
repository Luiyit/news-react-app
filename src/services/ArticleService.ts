import RequestService, { IHash } from "./api_client/request_service";
import { ArticleType } from '../types/entities'
import { PaginatedResponse } from "./api_client/types";

export default class ArticleService extends RequestService<ArticleType>{
  
  async index(params?: IHash<string | number>): Promise<PaginatedResponse<ArticleType>>{
    const response = await this._index("articles", params)
    return response as PaginatedResponse<ArticleType>
  }
  
}