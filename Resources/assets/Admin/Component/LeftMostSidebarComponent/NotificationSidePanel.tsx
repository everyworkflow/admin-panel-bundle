/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import React from 'react';
import TimeAgo from 'react-timeago';
import Card from 'antd/lib/card';
import SidePanelComponent from "@EveryWorkflow/CoreBundle/Component/SidePanelComponent";
import {
    PANEL_FROM_LEFT,
    PANEL_SIZE_MEDIUM
} from "@EveryWorkflow/CoreBundle/Component/SidePanelComponent/SidePanelComponent";

interface NotificationSidePanelProps {
    onSidePanelClose: () => void;
    panelState: any;
}

const NotificationSidePanel = ({ onSidePanelClose, panelState }: NotificationSidePanelProps) => {
    console.log('NotificationSidePanel - panelState -->', panelState);

    return (
        <SidePanelComponent
            title={'Notification'}
            size={PANEL_SIZE_MEDIUM}
            fromDirection={PANEL_FROM_LEFT}
            style={{ marginLeft: 52 }}
            onClose={onSidePanelClose}
        >
            <div>
                {panelState.alert_data.length === 0 && <p>Nothing to update!</p>}
                {panelState.alert_data.map((alert: any, index: number) => (
                    <Card
                        key={index}
                        style={{ marginBottom: 16 }}
                        size="small"
                        title={alert.title}
                        bordered={true}
                        extra={<TimeAgo date={alert.date} live={false} />}
                    >
                        {alert.message}
                    </Card>
                ))}
            </div>
        </SidePanelComponent>
    );
};

export default NotificationSidePanel;
