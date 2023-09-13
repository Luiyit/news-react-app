import RequestService from "./api_client/request_service";
import { PreferenceType } from '../types/entities'
import { PaginatedResponse, SingleResponse } from "./api_client/types";

export default class PreferenceService extends RequestService<PreferenceType>{
  
  async index(): Promise<PaginatedResponse<PreferenceType>>{
    const response = await this._index("preferences");
    return response as PaginatedResponse<PreferenceType>;
  }
  
  async delete(id: number): Promise<PaginatedResponse<PreferenceType>>{
    const response = await this._delete(`preferences/${id}`);
    return response as PaginatedResponse<PreferenceType>;
  }
  
  async create(payload: {preferableId: number, preferableType: string}): Promise<PreferenceType>{
    const response = await this._create("preferences", payload);
    return response.data as PreferenceType;
  }
  
}