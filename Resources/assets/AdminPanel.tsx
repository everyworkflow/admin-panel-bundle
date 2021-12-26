/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import React from 'react';
import AdminPanelRoot from "@EveryWorkflow/AdminPanelBundle/AdminPanelRoot";
import RootPanelComponent from '@EveryWorkflow/PanelBundle/Component/RootPanelComponent';
import "@EveryWorkflow/AdminPanelBundle/AdminPanelDarkStyle.less";
// import "@EveryWorkflow/AdminPanelBundle/Admin/AdminPanelStyle.less";

const AdminPanel = () => {
    return (
        <RootPanelComponent>
            <AdminPanelRoot />
        </RootPanelComponent>
    );
}

export default AdminPanel;
