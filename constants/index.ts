export interface SidebarLink {
  route: string;
  label: string;
}
export interface socialIcons {
  imgURL: string;
  label: string;
  route: string;
}

export const navLinks: SidebarLink[] = [
  {
    route: "/",
    label: "Home",
  },
  {
    route: "/about",
    label: "About",
  },
  {
    route: "/techstack",
    label: "Tech Stack",
  },
  {
    route: "/projects",
    label: "Projects",
  },
  {
    route: "/contact",
    label: "Contact",
  },
];

export const socialLinks: socialIcons[] = [
  {
    imgURL: "assets/github-142-svgrepo-com.svg",
    label: "Github",
    route: "/",
  },
  {
    imgURL: "assets/linkedin-round-svgrepo-com.svg",
    label: "LinkedIn",
    route: "/",
  },
  {
    imgURL: "assets/instagram-svgrepo-com.svg",
    label: "Instagram",
    route: "/",
  },
];
