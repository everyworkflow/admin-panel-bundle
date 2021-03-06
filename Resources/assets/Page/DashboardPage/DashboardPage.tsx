/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import React, { useContext, useEffect, useState } from 'react';
import PanelContext from "@EveryWorkflow/PanelBundle/Context/PanelContext";
import { ACTION_SET_PAGE_TITLE } from "@EveryWorkflow/PanelBundle/Reducer/PanelReducer";
import Card from 'antd/lib/card';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Statistic from 'antd/lib/statistic';
import ArrowUpOutlined from '@ant-design/icons/ArrowUpOutlined';

const DashboardPage = () => {
    const { dispatch: panelDispatch } = useContext(PanelContext);

    useEffect(() => {
        panelDispatch({ type: ACTION_SET_PAGE_TITLE, payload: 'Dashboard' });
    }, [panelDispatch]);

    return (
        <div className="app-container" style={{ marginTop: 24 }}>
            <Row gutter={24} style={{ marginBottom: 24 }}>
                <Col span={6}>
                    <Card>
                        <Statistic
                            title="Active"
                            value={11.28}
                            precision={2}
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<ArrowUpOutlined />}
                            suffix="%"
                        />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card>
                        <Statistic title="Account Balance (Rs)" value={112893} precision={2} />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card>
                        <Statistic title="Active Users" value={112893} />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card>
                        <Statistic title="New Visitors" value={112893} />
                    </Card>
                </Col>
            </Row>
            <Card title={'Hello from Dashboard!'}>
                <span>Dashboard under construction.</span>
            </Card>
        </div>
    );
};

export default DashboardPage;
