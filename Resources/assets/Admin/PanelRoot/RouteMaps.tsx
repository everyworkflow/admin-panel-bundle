/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import { PanelRoutes } from "@EveryWorkflow/AdminPanelBundle/Admin/PanelRoot/PanelRoutes";
import { ExampleRoutes } from "@EveryWorkflow/AdminPanelBundle/Admin/PanelRoot/ExampleRoutes";
import { MediaManagerRoutes } from "@EveryWorkflow/MediaManagerBundle/Admin/PanelRoot/MediaManagerRoutes";
import { EavRoutes } from "@EveryWorkflow/EavBundle/Admin/PanelRoot/EavRoutes";
import { UserRoutes } from "@EveryWorkflow/UserBundle/Admin/PanelRoot/UserRoutes";
import { StaticBlockRoutes } from "@EveryWorkflow/StaticBlockBundle/Admin/PanelRoot/StaticBlockRoutes";
import { PageRoutes } from "@EveryWorkflow/PageBundle/Admin/PanelRoot/PageRoutes";

/* CRM */
import { CustomerRoutes } from "@EveryWorkflow/CustomerBundle/Admin/PanelRoot/CustomerRoutes";

/* PIM */
import { CatalogCategoryRoutes } from "@EveryWorkflow/CatalogCategoryBundle/Admin/PanelRoot/CatalogCategoryRoutes";
import { CatalogProductRoutes } from "@EveryWorkflow/CatalogProductBundle/Admin/PanelRoot/CatalogProductRoutes";

/* Ecommerce */
import { SalesOrderRoutes } from "@EveryWorkflow/SalesOrderBundle/Admin/PanelRoot/SalesOrderRoutes";

export const RouteMaps = [
    PanelRoutes,
    ExampleRoutes,
    MediaManagerRoutes,
    StaticBlockRoutes,
    EavRoutes,
    UserRoutes,
    PageRoutes,

    /* CRM */
    CustomerRoutes,

    /* PIM */
    CatalogCategoryRoutes,
    CatalogProductRoutes,

    /* Ecommerce */
    SalesOrderRoutes,
];
