/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import ScreenInterface from "@EveryWorkflow/AdminPanelBundle/Model/ScreenInterface";
import AlertDataInterface from "@EveryWorkflow/PanelBundle/Model/AlertDataInterface";
import SidebarItemInterface from "@EveryWorkflow/AdminPanelBundle/Model/Sidebar/SidebarItemInterface";

interface AdminPanelStateInterface {
    is_mobile: boolean;
    screen?: ScreenInterface;
    show_mobile_app_sidebar: boolean;
    page_title?: string;
    hide_footer: boolean;
    sidebar_data?: [SidebarItemInterface];
    alert_data: Array<AlertDataInterface>;
    auth?: any;
}

export default AdminPanelStateInterface;
