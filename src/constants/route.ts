export const AppRoute = {
  News: [
    {
      name: 'news',
      path: '/',
      component: 'HomeNews',
      meta: { layout: 'news', title: 'Home' },
      children: []
    },
    {
      name: 'categoryNews',
      path: '/category/:id',
      component: 'CategoryNews',
      meta: { layout: 'news', title: 'Categories' },
      children: []
    },
    {
      name: 'singleNews',
      path: '/single-news/:id',
      component: 'SingleNews',
      meta: { layout: 'news', title: 'Single News' },
      children: []
    }
  ]
} as const;
