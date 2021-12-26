/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import React from 'react';
import SidePanelComponent from "@EveryWorkflow/PanelBundle/Component/SidePanelComponent";
import {
    PANEL_FROM_LEFT,
    PANEL_SIZE_HALF
} from "@EveryWorkflow/PanelBundle/Component/SidePanelComponent/SidePanelComponent";

interface MessageSidePanelProps {
    onSidePanelClose: () => void;
}

const MessageSidePanel = ({ onSidePanelClose }: MessageSidePanelProps) => {

    return (
        <SidePanelComponent
            title={'Message'}
            size={PANEL_SIZE_HALF}
            fromDirection={PANEL_FROM_LEFT}
            style={{ marginLeft: 52 }}
            // bodyStyle={{ padding: 0 }}
            onClose={onSidePanelClose}
        >
            <>
                <div style={{ border: 'solid 1px #666', padding: 16 }}>Chat Box</div>
            </>
        </SidePanelComponent>
    );
};

export default MessageSidePanel;
