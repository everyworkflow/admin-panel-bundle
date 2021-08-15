/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import React from 'react';
import SidePanelComponent from "@EveryWorkflow/CoreBundle/Component/SidePanelComponent";
import {
    PANEL_FROM_LEFT,
    PANEL_SIZE_HALF
} from "@EveryWorkflow/CoreBundle/Component/SidePanelComponent/SidePanelComponent";

interface MessageSidePanelProps {
    onSidePanelClose: () => void;
    panelState: any;
}

const MessageSidePanel = ({ onSidePanelClose, panelState }: MessageSidePanelProps) => {
    console.log('MessageSidePanel - panelState -->', panelState);

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
