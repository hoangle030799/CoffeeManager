import DefaultLayout from "../layouts/default-layout"
import Home from "../views/easyCoffee";
import Menu from "../views/menu";
import Inventory from "../views/inventory";
import Revenue from "../views/revenue";

export const IndexRouters = [
    {
        path: '',
        element: <DefaultLayout />,
        children: [
            {
                path: '',
                element: <Home />,
            },
            {
                path: 'menu',
                element: <Menu />,
            },
            {
                path: 'inventory',
                element: <Inventory />,
            },
            {
                path: 'revenue',
                element: <Revenue />,
            }
        ],
    }
]