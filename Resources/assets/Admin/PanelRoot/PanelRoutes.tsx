/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import {lazy} from "react";

const DashboardPage = lazy(() => import("@EveryWorkflow/AdminPanelBundle/Admin/Page/DashboardPage"));

export const PanelRoutes = [
    {
        path: '/',
        exact: true,
        component: DashboardPage
    },
    {
        path: '/dashboard',
        exact: true,
        component: DashboardPage
    },
];
