import { PageableType } from '@services/api_client/types.d'

export interface LocationType {
  lat: number;
  lng: number;
}

export interface ImageVariantType {
  small: string;
  medium: string;
  large: string;
  original: string;
}

export interface AttachmentType {
  blobId: number
  createdAt: string
  id: number
  name: string
  recordId: number
  recordType: string
  variants: ImageVariantType
}

/**
 * DEV NOTE:
 * The image (from oAuth) will be on the user object though the providerAvatar, 
 * but if it changes and the user doesn't have a custom image, the image source will be outdated.
 * For now we keep this entry to use if variants are undefined
 * 
 * providerAvatar is useful just to show the image of the user when it is not the current user
 * Example: When the store want to see the user's image
 * 
 */
export interface UserType{
  id: string;
  name: string;
  email: string;
}

export interface AuthTokenType{
  accessToken: string;
  tokenType: string;
  expiresIn: number;
}

export interface SettingType{
  id: string;
}
