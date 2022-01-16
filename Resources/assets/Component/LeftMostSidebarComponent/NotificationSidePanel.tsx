/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import React, { useEffect, useState } from 'react';
import TimeAgo from 'react-timeago';
import SidePanelComponent from "@EveryWorkflow/PanelBundle/Component/SidePanelComponent";
import {
    PANEL_FROM_LEFT,
    PANEL_SIZE_MEDIUM
} from "@EveryWorkflow/PanelBundle/Component/SidePanelComponent/SidePanelComponent";
import Alert from 'antd/lib/alert';
import Space from 'antd/lib/space';
import Button from 'antd/lib/button';
import IndexedDb from '@EveryWorkflow/PanelBundle/Service/IndexedDb';
import Badge from 'antd/lib/badge';

interface NotificationSidePanelProps {
    onSidePanelClose: () => void;
}

const NotificationSidePanel = ({ onSidePanelClose }: NotificationSidePanelProps) => {
    const [alertData, setAlertData]: Array<any> = useState([]);
    const [notificationCount, setNotificationCount] = useState(0);

    useEffect(() => {
        (async () => {
            const panelDb = await IndexedDb.getDb('panel', 'alert_history');
            panelDb.getAll('alert_history').then(alertData => {
                setAlertData([...alertData.reverse()]);
                setNotificationCount(alertData.length);
            }).catch(error => { });
        })();
    }, []);

    const clearAllHandler = async () => {
        const panelDb = await IndexedDb.getDb('panel', 'alert_history');
        panelDb.clear('alert_history').catch(error => { });
        setAlertData([]);
        setNotificationCount(0);
    }

    return (
        <SidePanelComponent
            title={'Notification'}
            size={PANEL_SIZE_MEDIUM}
            fromDirection={PANEL_FROM_LEFT}
            style={{ marginLeft: 52 }}
            onClose={onSidePanelClose}
            extra={(
                <Space>
                    <Badge count={notificationCount} />
                    <Button type="default" size="small" onClick={clearAllHandler}>Clear All</Button>
                </Space>
            )}>
            <div>
                {alertData.length === 0 && <p>Nothing to update!</p>}
                {alertData.map((alert: any, index: number) => (
                    <div
                        key={index}
                        style={{
                            marginBottom: 8
                        }}>
                        <Alert
                            message={alert.message}
                            description={alert.description}
                            type={alert.type?.replace('alert_type_', '')}
                        />
                        <div style={{ textAlign: 'right', fontSize: 11 }}>
                            <TimeAgo date={alert.date} live={false} />
                        </div>
                    </div>
                ))}
            </div>
        </SidePanelComponent>
    );
};

export default NotificationSidePanel;
