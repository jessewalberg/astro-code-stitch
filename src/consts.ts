// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Astro Blog";
export const SITE_DESCRIPTION = "Welcome to my website!";
export const CLIENT = {
  name: "Jesse",
  address: {
    lineOne: "361 Rye Street",
    lineTwo: "",
    city: "Broad Brook",
    country: "USA",
    state: "CT",
    zip: "06016",
  },
  contact: {
    phoneForTel: "15128003877",
    phoneFormatted: "1-512-800-3877",
    email: "jesse@silenceandshade.com",
  },
  socials: {
    facebook: "facebook.com",
    twitter: "twitter.com",
  },
};

// Define the navigation array structure
interface NavItem {
  key: string;
  url: string;
  children?: NavItem[];
  hideOnMobile?: boolean;
  hideOnDesktop?: boolean;
}

// You would replace this with your actual navigation data
export const navigation: NavItem[] = [
  {
    key: "Home",
    url: "/",
  },
  {
    key: "About Us",
    url: "/about",
  },
  {
    key: "Projects",
    url: "/projects",
    children: [
      { key: "Project One", url: "project-one" },
      { key: "Project Two", url: "project-two" },
    ],
  },
  {
    key: "Reviews",
    url: "/reviews",
  },
  {
    key: "Blog",
    url: "/blog",
  },
];
