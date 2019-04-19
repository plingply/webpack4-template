import info from "../views/info/info.vue";

var routes = [{
        path: "/home",
        name: "home",
        component: resolve => require.ensure([], () => resolve(require("../views/home/home.vue")), 'home'),
    },
    {
        path: "/info",
        name: "info",
        component: info
    }
];

export default routes;