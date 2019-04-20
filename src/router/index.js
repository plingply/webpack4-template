import info from "../views/info/info.vue";
import h5 from "../views/h5/h5.vue";

var routes = [{
        path: "/home",
        name: "home",
        component: resolve => require.ensure([], () => resolve(require("../views/home/home.vue")), 'home'),
    },
    {
        path: "/info",
        name: "info",
        component: info
    },
    {
        path: "/h5",
        name: "h5",
        component: h5
    }
];

export default routes;