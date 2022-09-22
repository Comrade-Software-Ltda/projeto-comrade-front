export type MenuNavigation = {
  text: string;
  icon?: string;
  path?: string;
  items?: MenuNavigation[];
};
export const navigation: MenuNavigation[] = [
  {
    text: 'Home',
    path: '/home',
    icon: 'home',
  },
];
