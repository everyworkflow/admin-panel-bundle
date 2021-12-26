/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import { AdminPanelRoutes } from "@EveryWorkflow/AdminPanelBundle/AdminPanelRoot/AdminPanelRoutes";
import { ExampleRoutes } from "@EveryWorkflow/AdminPanelBundle/AdminPanelRoot/ExampleRoutes";
import { MediaManagerRoutes } from "@EveryWorkflow/MediaManagerBundle/AdminPanelRoot/MediaManagerRoutes";
import { EavRoutes } from "@EveryWorkflow/EavBundle/AdminPanelRoot/EavRoutes";
import { UserRoutes } from "@EveryWorkflow/UserBundle/AdminPanelRoot/UserRoutes";
import { StaticBlockRoutes } from "@EveryWorkflow/StaticBlockBundle/AdminPanelRoot/StaticBlockRoutes";
import { PageRoutes } from "@EveryWorkflow/PageBundle/AdminPanelRoot/PageRoutes";

import { ScopeRoutes } from "@EveryWorkflow/ScopeBundle/AdminPanelRoot/ScopeRoutes";
import { AuthRoutes } from "@EveryWorkflow/AuthBundle/AdminPanelRoot/AuthRoutes";

/* CRM */
import { CustomerRoutes } from "@EveryWorkflow/CustomerBundle/AdminPanelRoot/CustomerRoutes";

/* PIM */
import { CatalogCategoryRoutes } from "@EveryWorkflow/CatalogCategoryBundle/AdminPanelRoot/CatalogCategoryRoutes";
import { CatalogProductRoutes } from "@EveryWorkflow/CatalogProductBundle/AdminPanelRoot/CatalogProductRoutes";

/* Ecommerce */
import { SalesOrderRoutes } from "@EveryWorkflow/SalesOrderBundle/AdminPanelRoot/SalesOrderRoutes";

export const RouteMaps = [
    AdminPanelRoutes,
    ExampleRoutes,
    MediaManagerRoutes,
    StaticBlockRoutes,
    EavRoutes,
    UserRoutes,
    PageRoutes,

    AuthRoutes,
    ScopeRoutes,

    /* CRM */
    CustomerRoutes,

    /* PIM */
    CatalogCategoryRoutes,
    CatalogProductRoutes,

    /* Ecommerce */
    SalesOrderRoutes,
];
