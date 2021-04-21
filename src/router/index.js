import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Kids from '../views/Kids.vue'
import InfocomplementarHome from '../components/InfocomplementarHome.vue'
import PaiseresponsaveisHome from '../components/PaiseresponsaveisHome.vue'
import EspecialistasHome from '../components/EspecialistasHome.vue'
import PaiseresponsaveisEntries from '../statics/data/paiseresponsaveis.json';
import EspecialistasEntries from '../statics/data/especialistas.json';
import InfocomplementarEntries from '../statics/data/infocomplementar.json';


Vue.use(VueRouter)

const paiseresponsaveisRoutes = Object.keys(PaiseresponsaveisEntries).map(section => {
  const children = PaiseresponsaveisEntries[section].map(child => ({
    path: child.id,
    name: child.id,
    component: () => import(`../markdowns/${section}/${child.id}.md`)
  }))
  return {
    path: `/${section}`,
    //name: section,
    component: () => import('../components/BlogPaiseresponsaveis.vue'),
    children,
  }
})

const infocomplementarRoutes = Object.keys(InfocomplementarEntries).map(section => {
  const children = InfocomplementarEntries[section].map(child => ({
    path: child.id,
    name: child.id,
    component: () => import(`../markdowns/${section}/${child.id}.md`)
  }))
  return {
    path: `/${section}`,
    //name: section,
    component: () => import('../components/BlogInfocomplementar.vue'),
    children,
  }
})

const especialistasRoutes = Object.keys(EspecialistasEntries).map(section => {
  const children = EspecialistasEntries[section].map(child => ({
    path: child.id,
    name: child.id,
    component: () => import(`../markdowns/${section}/${child.id}.md`)
  }))
  return {
    path: `/${section}`,
    //name: section,
    component: () => import('../components/BlogEspecialistas.vue'),
    children,
  }
})

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/kids',
    component: Kids,
  },
  {
    path: '/paiseresponsaveis',
    component: PaiseresponsaveisHome,
    meta: { showNavigation: false },
    disable: true
  },
  {
    path: '/especialistas',
    component: EspecialistasHome,
    meta: { showNavigation: false },
    disable: true
  },
  {
    path: '/infocomplementar',
    component: InfocomplementarHome,
    meta: { showNavigation: false },
    disable: true
  },
  ...paiseresponsaveisRoutes,
  ...infocomplementarRoutes,
  ...especialistasRoutes,
]

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes
})

export default router
