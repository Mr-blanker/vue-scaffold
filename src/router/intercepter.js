import router from './'

//路由拦截
router.beforeEach((to, from, next) => {
    console.log(11)
  next()
  })
