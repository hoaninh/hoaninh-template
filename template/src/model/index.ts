
export interface LoginResponse {
  access_token: string;
  token_type: string;
  refresh_token: string;
  scope: string;
  expires_in: number;
  sessionState: string;
}

export interface LoginRequest {
  username: string;
  password: string;
  platformType?: string | number;
  platformVersion?: string;
  deviceId?: string;
  pnsToken?: string;
  bundleId?: string;
  deviceToken?: string;
}


export class AccessToken {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  scope: string;
  tokenType: string;

  constructor(res: LoginResponse) {
    this.accessToken = res.access_token;
    this.refreshToken = res.refresh_token;
    this.expiresIn = res.expires_in;
    this.scope = res.scope;
    this.tokenType = res.token_type;
  }
}

export interface Timezone {
  id?: string;
  displayName?: string;
  value?: string;
  offset?: string;
  offsetMinute?: number;
}

export interface BaseUser {
  id: string;
  username?: string;
  displayName?: string;
}

export interface Media {
  cdnLarge?: string;
  cdnMedium?: string;
  cdnOrigin?: string;
  cdnSmall?: string;
  contentType?: string;
  coordinateX?: number;
  coordinateY?: number;
  filename?: string;
  height?: number;
  id?: string;
  monochrome?: boolean;
  originalFilename?: string;
  thumbnail?: Media;
  uploadedDate?: number;
  url?: string;
  width?: number;
  externalLink?: string;
  thumbnailDto?: Media;
  media?: Media;
  isProcessing?: boolean | null;
  order?: number;
  response?: Media;
  embeddedHtml?: string;
  thumbnailUrl?: string;
  externalImageUrl?: string;
  key?: string;
}

export interface User extends BaseUser {
  id: string;
  agencyId?: string;
  username?: string;
  displayName?: string;
  email?: string;
  countryCode?: string;
  lastLogin?: string;
  role?: string;
  roleName?: string;
  timezone?: Timezone;
  avatar?: Media;
  agencyDisplayName?: string;
  dob?: string;
  phoneNumber?: string;
}
