import { RoutesService, eLayoutType } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';

export const APP_ROUTE_PROVIDER = [
  { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];

function configureRoutes(routesService: RoutesService) {
  return () => {
    routesService.add([
      {
        path: '/',
        name: '::Menu:Home',
        iconClass: 'fas fa-home',
        order: 1,
        layout: eLayoutType.application,
      },

      {
        path: '/home/homehija1',
        name: 'Home1',
        iconClass: 'fas fa-home',
        order: 2,
        layout: eLayoutType.application,
        
      },
      {
        path: '/home/homehija1',
        name: 'HomeHija1',
        parentName: 'Home1',
        iconClass: 'fas fa-home',
        order: 3,
        layout: eLayoutType.application,
      },
      {
        path: '/home/homehija2',
        name: 'HomeHija2',
        parentName: 'Home1',
        iconClass: 'fas fa-home',
        order: 4,
        layout: eLayoutType.application,
      },
      {
        path: '/home/homehija3',
        name: 'HomeHija3',
        parentName: 'Home1',
        iconClass: 'fas fa-home',
        order: 5,
        layout: eLayoutType.application,
      },

      {
        path: '/settings/settingshija1',
        name: 'Settings',
        parentName: 'Home1',
        iconClass: 'fas fa-home',
        order: 6,
        layout: eLayoutType.application,
      },
      {
        path: '/settings/settingshija1',
        name: 'SettingsHija1',
        parentName: 'Settings',
        iconClass: 'fas fa-home',
        order: 7,
        layout: eLayoutType.application,
      },
      {
        path: '/settings/settingshija2',
        name: 'SettingsHija2',
        parentName: 'Settings',
        iconClass: 'fas fa-home',
        order: 8,
        layout: eLayoutType.application,
      },
      {
        path: '/settings/settingshija3',
        name: 'SettingsHija3',
        parentName: 'Settings',
        iconClass: 'fas fa-home',
        order: 9,
        layout: eLayoutType.application,
      },

    ]);
  };
}
