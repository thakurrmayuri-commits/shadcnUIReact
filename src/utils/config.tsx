export const ROUTES = [

    {
        path: "*",
        component: () => import("../Pages/404"),
        exact: false,
    },
    {
        path: "/",
        component: () => import("../Pages/Home"),
        exact: true,
    },
    {
        path: "/product/:id",
        component: () => import("../Pages/EditProduct"),
        exact: true,
    },
    {
        path: "/newproduct",
        component: () => import("../Pages/newProduct"),
        exact: true,
    },

    {
        path: "/login",
        component: () => import("../Pages/LogIn"),
        exact: true,
    },

]