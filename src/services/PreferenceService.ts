import RequestService from "./api_client/request_service";
import { SettingType } from '../types/entities'
import { ApiResponse } from "./api_client/types";

export default class PreferenceService extends RequestService<SettingType>{
  
  async index(): Promise<ApiResponse<SettingType>>{
    return this._index("preferences")
  }
  
}