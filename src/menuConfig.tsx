export const menuConfig = [
  { key: 'home', label: 'Home', desc: 'Welcome to the hub landing page.' },
  { key: 'dashboard', label: 'Dashboard', desc: 'View your dashboard with insights and analytics.' },
  { key: 'feature', label: 'Feature', desc: 'Explore the features of our application.' },
  { key: 'samples', label: 'Samples', desc: 'Explore the samples pages in our application.' },
] as const;

export type MenuKey = typeof menuConfig[number]['key'];