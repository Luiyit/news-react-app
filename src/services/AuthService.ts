import RequestService from "./api_client/request_service";
import { AuthTokenType } from '../types/entities'

export default class AuthService extends RequestService<AuthTokenType>{
  
  async login(payload: unknown): Promise<AuthTokenType>{
    const response = await this._create("auth/login", payload)
    return response.data as AuthTokenType;
  }

  async refresh(): Promise<AuthTokenType>{
    const response = await this._create("auth/refresh", {})
    return response.data as AuthTokenType;
  }

}