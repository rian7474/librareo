const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: BooksView,
    },

    {
      path: '/login',
      component: LoginView,
    },

    {
      path: '/profile',
      component: ProfileView,
    }
  ]
})
