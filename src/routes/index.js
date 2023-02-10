import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/MainView.vue'),
  },
  {
    path: "/list",
    name: 'list',
    component: () => import('@/components/TheList.vue'),
    beforeEnter: (to, from) => {
      if (from.name === 'detail') {
        console.log('디테일에서 왔구나?');
        console.log('params id', from.params.id);
      } else {
        return;
      }
    }
  },
  {
    path: "/detail/:id",
    name: 'detail',
    component: () => import('@/views/DetailView.vue'),
    children: [
      {
        path: 'author',
        component: () => import('@/views/AuthorView.vue')
      },
      {
        path: 'comment',
        component: () => import('@/views/CommentView.vue')
      }
    ]
  },
  {
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: () => import('@/views/NotFound.vue'),
	},
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;