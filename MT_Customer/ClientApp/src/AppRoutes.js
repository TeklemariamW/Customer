import Customer from "./components/Customers/Customer";
import Customers from "./components/Customers/Customers";
import { Home } from "./components/Home";
//import { Customers } from "./components/Customers/Customers";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
      path: '/customers',
      element: <Customers />
    },
    {
        path: '/customer',
        element: <Customer />
    }
];

export default AppRoutes;
