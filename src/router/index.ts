//import { useUser } from '@/store/user';
import { createRouter, createMemoryHistory } from "vue-router"
import login from "@/views/user/Login.vue"

import dashboard from "@/views/dashboard/Dashboard.vue"
import nav from "@/views/dashboard/Nav.vue"
import main from "@/views/dashboard/Main.vue"
import func from "@/views/dashboard/Func.vue"
import about from "@/views/dashboard/About.vue"

import { getToken } from "@/utils/auth"

export const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: dashboard,
      redirect: "/nav",
      meta: { transition: "fade", requireAuth: true },
      children: [
        {
          path: "/nav",
          component: nav,
          meta: { transition: "fade", requireAuth: true },
          redirect: "/main",
          children: [
            {
              path: "/main",
              component: main,
              meta: { transition: "fade", requireAuth: true },
            },
            {
              path: "/func",
              component: func,
              meta: { transition: "fade", requireAuth: true },
            },
            {
              path: "/about",
              component: about,
              meta: { transition: "fade", requireAuth: true },
            },
          ],
        },
      ],
    },
    {
      path: "/login",
      component: login,
      meta: { transition: "fade" },
    },
  ],
})

const whiteList = ["/login"]
router.beforeEach(async (to, from, next) => {
  const hasToken = getToken()
  if (hasToken) {
    next()
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next("/login")
    }
  }
})
