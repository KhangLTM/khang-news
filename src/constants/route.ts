export const AppRoute = {
  News: [
    {
      name: "news",
      path: "/",
      component: "HomeNews",
      meta: { layout: "news" },
      children: [],
    },
    {
      name: "categoryNews",
      path: "/category/:id",
      component: "CategoryNews",
      meta: { layout: "news" },
      children: [],
    },
    {
      name: "singleNews",
      path: "/single-news/:id",
      component: "SingleNews",
      meta: { layout: "news" },
      children: [],
    },
  ],
} as const;
