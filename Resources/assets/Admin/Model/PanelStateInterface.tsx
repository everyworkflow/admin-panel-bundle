/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import ScreenInterface from "@EveryWorkflow/AdminPanelBundle/Admin/Model/ScreenInterface";
import AlertDataInterface from "@EveryWorkflow/CoreBundle/Model/AlertDataInterface";
import SidebarItemInterface from "@EveryWorkflow/AdminPanelBundle/Admin/Model/Sidebar/SidebarItemInterface";

interface PanelStateInterface {
    is_mobile: boolean;
    screen?: ScreenInterface;
    show_mobile_app_sidebar: boolean;
    page_title?: string;
    hide_footer: boolean;
    sidebar_data?: [SidebarItemInterface];
    alert_data: Array<AlertDataInterface>;
}

export default PanelStateInterface;
