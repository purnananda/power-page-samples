export const menuConfig = [
  { key: 'home', label: 'Home' },
  { key: 'dashboard', label: 'Dashboard' },
  { key: 'feature', label: 'Feature' },
] as const;

export type MenuKey = typeof menuConfig[number]['key'];