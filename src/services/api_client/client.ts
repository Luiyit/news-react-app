import { getLocalStorage } from '../../helpers/storage';
import Axios from './axios';
import { AxiosHeaders } from 'axios';
export { getCancelToken } from './axios';
import { LOCAL_STORAGE_TOKEN_KEY } from '../../providers/auth/utils'

export default class Client extends Axios {
  
  /**
   * Generate headers for this particular client
   * @returns Client's headers
   */  
  override getHeaders = async (): Promise<AxiosHeaders> => {
    const headers: AxiosHeaders = new AxiosHeaders();    
    const storage = getLocalStorage();
    
    // Token Auth
    const token = storage.getItem(LOCAL_STORAGE_TOKEN_KEY)
    if(token) headers.set("Authorization", `Bearer ${token}`);
    
    return headers;
  }
}
