export interface Theme {
  theme: string;
  setTheme: (theme: String) => void;
}

export interface SidebarLink {
  imgURL: string;
  route: string;
  label: string;
}
