export const NAVLINKS = [
  {
    id: 1,
    label: "Home",
    url: "/",
  },

  {
    id: 2,
    label: "Explore",
    url: "/explore",
    submenu: [
      {
        label: "All Courses",
        url: "/explore",
      },
      {
        label: "Popular Courses",
        url: "/explore/popular",
      },
    ],
  },

  {
    id: 3,
    label: "Categories",
    url: "/categories",
    submenu: [
      {
        label: "Web Development",
        url: "/categories/web-development",
      },
      {
        label: "UI/UX Design",
        url: "/categories/ui-ux",
      },
    ],
  },

  {
    id: 4,
    label: "Add Course",
    url: "/courses/add-course",
  },

  {
    id: 5,
    label: "Manage Courses",
    url: "/courses/manage-courses",
  },



  {
    id: 6,
    label: "About",
    url: "/about",
  },

  {
    id: 7,
    label: "Contact",
    url: "/contact",
  },
];