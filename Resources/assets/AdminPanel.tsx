/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import React from 'react';
import AdminPanelRoot from "@EveryWorkflow/AdminPanelBundle/AdminPanelRoot";
import RootPanelComponent from '@EveryWorkflow/PanelBundle/Component/RootPanelComponent';
// import "@EveryWorkflow/AdminPanelBundle/Style.css";
import "@EveryWorkflow/AdminPanelBundle/AdminPanelStyle.less";
// import "@EveryWorkflow/AdminPanelBundle/AdminPanelDarkStyle.less";

const AdminPanel = () => {
    return (
        <RootPanelComponent>
            <AdminPanelRoot />
        </RootPanelComponent>
    );
}

export default AdminPanel;
