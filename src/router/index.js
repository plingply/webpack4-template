

import page1 from '../views/page1.vue'

var routes = [{
    path: '/Page1',
    name: 'page1',
    component: page1
}, {
    path: '/Page2',
    name: 'page2',
    component: require("../views/page2.vue")
}]

export default routes