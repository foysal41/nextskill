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
    private:true,
  },

  {
    id: 4,
    label: "Manage Courses",
    url: "/courses/manage-courses",
    private:true,
  },



  {
    id: 5,
    label: "About",
    url: "/about",
  },

  {
    id: 6,
    label: "Contact",
    url: "/contact",
  },
];