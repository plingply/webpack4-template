
var routes = [{
    path: "/home",
    name: "home",
    component: resolve => require.ensure([], () => resolve(require("@/views/home/home.vue")), 'home'),
},
{
    path: "/info",
    name: "info",
    component: () => import(/* webpackChunkName: "info" */'@/views/info/info.vue')
},
{
    path: "/h5",
    name: "h5",
    component: () => import(/* webpackChunkName: "info" */'@/views/h5/h5.vue')
}
];

export default routes;