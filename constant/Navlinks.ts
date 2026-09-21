export const NAVLINKS = [
  {
    id: 1,
    label: "Home",
    url: "/",
  },

  {
    id: 2,
    label: "All Courses",
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
    label: "Add Course",
    url: "/courses/add-course",
    private: true,
    roles: ["instructor"],
  },

  {
    id: 4,
    label: "Manage Courses",
    url: "/courses/manage-courses",
    private: true,
    roles: ["instructor"],
  },

  {
    id: 5,
    label: "About",
    url: "/about",
    guestOnly: true,
  },

  {
    id: 6,
    label: "Find Job",
    url: "/jobs",
    private: true,
    roles: ["student"],
  },

  {
    id: 7,
    label: "My Learning",
    url: "/my-learning",
    private: true,
    roles: ["student"],
  },

  {
    id: 8,
    label: "Study Plan",
    url: "/study-plan",
    private: true,
    roles: ["student"],
  },

  {
    id: 9,
    label: "Contact",
    url: "/contact",
    guestOnly: true,
  },
];