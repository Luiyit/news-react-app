export interface UserType{
  id: string;
  name: string;
  email: string;
  image?: string;
}

export interface AuthTokenType{
  accessToken: string;
  tokenType: string;
  expiresIn: number;
}

export interface SettingType{
  id: string;
}

export interface ArticleType{
  id: string;
  title: string
}
