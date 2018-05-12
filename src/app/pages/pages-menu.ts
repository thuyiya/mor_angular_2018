import { MenuItem } from '../code/models/';

export const MENU_ITEMS: MenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home',
    link: '/pages/dashboard',
    home: true,
    // children: [

    // ]
  },
  {
    title: 'Reports',
    icon: 'document',
    link: '/pages/reports',
  },
  {
    title: 'Settings',
    icon: 'settings',
    link: '/pages/settings',
  }
];
