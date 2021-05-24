import Home from "@/views/Home";
import About from "@/views/About";
import Add from "@/views/Add";
import Edit from "@/views/Edit";
import Detail from "@/views/Detail";

export default [
  { path: "/", redirect: '/home' },
  { name: "Home", path: "/home", component: Home },
  { name: "About", path: "/about", component: About },
  { name: "Add", path: "/add", component: Add },
  { name: "Edit",  path: "/edit/:id", component: Edit },
  { name: "Detail", path: "/detail/:id", component: Detail }
];
