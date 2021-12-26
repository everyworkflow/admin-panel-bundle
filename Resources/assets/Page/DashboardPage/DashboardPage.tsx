/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import React, { useContext, useEffect, useState } from 'react';
import Drawer from "antd/lib/drawer";
import Button from "antd/lib/button";
import Space from "antd/lib/space";
import PanelContext from "@EveryWorkflow/PanelBundle/Context/PanelContext";
import { ACTION_SET_PAGE_TITLE } from "@EveryWorkflow/PanelBundle/Reducer/PanelReducer";
import AlertAction, {
    ALERT_TYPE_ERROR,
    ALERT_TYPE_INFO,
    ALERT_TYPE_SUCCESS,
    ALERT_TYPE_WARNING
} from "@EveryWorkflow/PanelBundle/Action/AlertAction";

const DashboardPage = () => {
    const { dispatch: panelDispatch } = useContext(PanelContext);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        panelDispatch({ type: ACTION_SET_PAGE_TITLE, payload: 'Dashboard' });
    }, [panelDispatch]);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            <Drawer
                title="Basic Drawer"
                placement="right"
                onClose={onClose}
                visible={visible}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
            <div className="app-container">
                <h1>Hello from dashboard</h1>
                <br />
                <br />
                <br />
                <br />
                <Button type="primary" onClick={showDrawer}>
                    Button
                </Button>
                <br />
                <br />
                <br />
                <br />
                <br />
                <Space>
                    <Button type="primary"
                        onClick={() => {
                            AlertAction({
                                message: 'Hello World Message',
                                title: 'Hello World'
                            });
                        }}>
                        Alert Trigger
                    </Button>
                    <Button type="primary"
                        onClick={() => {
                            AlertAction({
                                message: 'Hello World Success Message',
                                title: 'Hello World Success',
                                type: ALERT_TYPE_SUCCESS
                            });
                        }}>
                        Alert Trigger Success
                    </Button>
                    <Button type="primary"
                        onClick={() => {
                            AlertAction({
                                message: 'Hello World Error Message',
                                title: 'Hello World Error',
                                type: ALERT_TYPE_ERROR
                            });
                        }}>
                        Alert Trigger Error
                    </Button>
                    <Button type="primary"
                        onClick={() => {
                            AlertAction({
                                message: 'Hello World Info Message',
                                title: 'Hello World Info',
                                type: ALERT_TYPE_INFO
                            });
                        }}>
                        Alert Trigger Info
                    </Button>
                    <Button type="primary"
                        onClick={() => {
                            AlertAction({
                                message: 'Hello World Warning Info',
                                title: 'Hello World Warning',
                                type: ALERT_TYPE_WARNING
                            });
                        }}>
                        Alert Trigger Warning
                    </Button>
                </Space>
            </div>
        </>
    );
};

export default DashboardPage;
