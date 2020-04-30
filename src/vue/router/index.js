
export const constantRouterMap = [{
  path: '/',
  component: () => import('../components/home'),
  redirect: '/personal-center',
  children: [
      {
        path: "/personal-center",
        default:"PersonalCenter",
        name: "PersonalCenter",
        component: () => import("@/views/personal-center/personal-center"),
        meta: {
          isDetails: true
        }
      },
      {
        path: "/user-management",
        name: "UserManagement",
        component: () => import("@/views/system-management/user-management")
      },
      //菜单管理
      {
        path: "/menu-management",
        name: "MenuManagement",
        component: () => import("@/views/system-management/menu-management")
      },
      //商户管理
      {
        path: "/businessman-management",
        name: "BusinessmanManagement",
        component: () => import("@/views/system-management/businessman-management")
      }
    ]
  },
  //登录
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/login")
  },
  //忘记密码
  {
    path: "/forget-password",
    name: "ForgetPassword",
    component: () => import("@/views/personal-center/forget-password")
  },

  {
    path: "/forget-password-captcha",
    name: "ForgetPasswordCaptcha",
    component: () => import("@/views/personal-center/forget-password-captcha")
  },
  //重置密码
  {
    path: "/reset-password",
    name: "ResetPassword",
    component: () => import("@/views/personal-center/reset-password")
  },
  //
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: "*",
    redirect: '/404',
  },
]

export default new Router({
  // mode: 'history',
  routes: constantRouterMap
})
