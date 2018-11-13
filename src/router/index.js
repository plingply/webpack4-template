import page1 from "../views/page1.vue";
import page2 from "../views/page2.vue";
import page3 from "../views/page3/index.vue";

var routes = [
  {
    path: "/Page1",
    name: "page1",
    component: page1
  },
  {
    path: "/Page2",
    name: "page2",
    component: page2
  },
  {
    path: "/Page3",
    name: "page3",
    component: page3
  }
];

export default routes;
