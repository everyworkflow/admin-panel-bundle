/*
 * @copyright EveryWorkflow. All rights reserved.
 */

interface SidebarItemInterface {
    icon?: string;
    svg?: string;
    label?: string;
    url?: string;
    showBack?: boolean;
    sidebar_data?: [SidebarItemInterface];
}

export default SidebarItemInterface;
