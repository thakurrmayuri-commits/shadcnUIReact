export const ROUTES = [

    {
        path: "*",
        component: () => import("../Pages/404"),
        //exact: false,
    },
    {
        path: "/",
        component: () => import("../Pages/Home"),
        //exact: true,
    },
    {
        path: "/product/:id",
        component: () => import("../Pages/EditProduct"),
        // exact: true,
    },
    {
        path: "/createproduct",
        component: () => import("../Pages/createProduct"),
        // exact: true,
    },

    {
        path: "/login",
        component: () => import("../Pages/loginpage"),
        // exact: true,
    },

]