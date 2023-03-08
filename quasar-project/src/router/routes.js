const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [

      { 
       name: '', path: "", component: () => import("pages/IndexPage.vue") 
      },

      {
        name: "bitcoin", path: "bitcoin", component: () => import("pages/Coins/pageBitcoin.vue"),
      },
    ],
  },

  
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
