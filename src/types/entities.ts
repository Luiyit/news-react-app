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

export interface CategoryType{
  id: number;
  name: string;
}

export interface SourceType{
  id: number;
  name: string;
  websiteUrl: string;
}

export interface ArticleType{
  id: string;
  title: string
  publishedAt: string,
  image: string,
  except: string,
  category: CategoryType
  source: SourceType
  url: string
}
