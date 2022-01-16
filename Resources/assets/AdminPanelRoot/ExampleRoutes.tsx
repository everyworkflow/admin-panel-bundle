/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import { lazy } from "react";

const DataFormPage = lazy(() => import("@EveryWorkflow/AdminPanelBundle/Page/Examples/DataFormPage"));
const DragAndDropPage = lazy(() => import("@EveryWorkflow/AdminPanelBundle/Page/Examples/DragAndDropPage"));

export const ExampleRoutes = [
    {
        path: '/examples/data-form',
        exact: true,
        component: DataFormPage
    },
    {
        path: '/examples/drag-and-drop',
        exact: true,
        component: DragAndDropPage
    },
];
