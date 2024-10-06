import { lazy } from 'react';
// import { ProtectedRoutes } from '../protectRoute/ProtectedRoutes';
// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));
// Imported file
import { BikePurchaseForm } from 'views/AdminPanel/Purchase/BikePurchaseForm';
import { BikeSale } from 'views/AdminPanel/Sale/BikeSale';

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      element: <DashboardDefault />
    },
    {
      path: 'bikePurchaseForm',
      element: <BikePurchaseForm />
    },
    {
      path: 'bikeSalse',
      element: <BikeSale />
    }
  ]
};

export default MainRoutes;
