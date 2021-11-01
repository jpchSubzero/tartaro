import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'AngularRoutes',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44353',
    redirectUri: baseUrl,
    clientId: 'AngularRoutes_App',
    responseType: 'code',
    scope: 'offline_access openid profile role email phone AngularRoutes',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44353',
      rootNamespace: 'AngularRoutes',
    },
  },
} as Environment;
