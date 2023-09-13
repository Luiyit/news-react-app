import RequestService from "./api_client/request_service";
import { AuthTokenType } from '../types/entities'
import { SingleResponse } from "./api_client/types";

export default class AuthService extends RequestService<AuthTokenType>{
  
  async login(payload: unknown): Promise<AuthTokenType>{
    const response = await this._create("auth/login", payload)
    return response.data as AuthTokenType
  }

  async signUp(payload: unknown): Promise<SingleResponse<AuthTokenType>>{
    const response = await this._create("auth/signup", payload)
    return response as SingleResponse<AuthTokenType>
  }

  async refresh(): Promise<SingleResponse<AuthTokenType>>{
    const response = await this._create("auth/refresh", {})
    return response as SingleResponse<AuthTokenType>
  }

}