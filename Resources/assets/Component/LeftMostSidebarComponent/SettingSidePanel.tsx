/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import React from 'react';
import SidePanelComponent from "@EveryWorkflow/PanelBundle/Component/SidePanelComponent";
import {
    PANEL_FROM_LEFT,
    PANEL_SIZE_MEDIUM
} from "@EveryWorkflow/PanelBundle/Component/SidePanelComponent/SidePanelComponent";

interface SettingSidePanelProps {
    onSidePanelClose: () => void;
}

const SettingSidePanel = ({ onSidePanelClose }: SettingSidePanelProps) => {

    return (
        <SidePanelComponent
            title={'Panel control'}
            size={PANEL_SIZE_MEDIUM}
            fromDirection={PANEL_FROM_LEFT}
            style={{ marginLeft: 52 }}
            // bodyStyle={{ padding: 0 }}
            onClose={onSidePanelClose}
        >
            <>
                <div style={{ border: 'solid 1px #666', padding: 16 }}>Setting form</div>
            </>
        </SidePanelComponent>
    );
};

export default SettingSidePanel;
