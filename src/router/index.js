import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import { MdButton, MdContent, MdTabs, MdField, MdCheckbox, MdList, MdMenu, MdSubheader } from 'vue-material/dist/components/'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(Router)
Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)
Vue.use(MdField)
Vue.use(MdCheckbox)
Vue.use(MdList)
Vue.use(MdMenu)
Vue.use(MdSubheader)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
