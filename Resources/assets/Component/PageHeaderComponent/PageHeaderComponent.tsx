/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import React, { useContext, CSSProperties } from 'react';
import Layout from 'antd/lib/layout';
import Button from 'antd/lib/button';
import Space from 'antd/lib/space';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Menu from 'antd/lib/menu';
import Dropdown from 'antd/lib/dropdown';
import DownOutlined from '@ant-design/icons/DownOutlined';
import ButtonInterface from "@EveryWorkflow/PanelBundle/Model/ButtonInterface";
import ButtonHeaderAction from '@EveryWorkflow/DataGridBundle/HeaderAction/ButtonHeaderAction';
import PanelContext from '@EveryWorkflow/PanelBundle/Context/PanelContext';

interface headerButtonInterface extends ButtonInterface {
    is_confirm?: boolean;
    confirm_message?: string;
}

interface PageHeaderComponentProps {
    title?: string;
    actions?: Array<headerButtonInterface>;
    children?: JSX.Element | JSX.Element[];
    left?: JSX.Element | JSX.Element[];
    right?: JSX.Element | JSX.Element[];
    isSticky?: boolean;
    style?: CSSProperties;
}

const PageHeaderComponent = ({
    title,
    actions,
    children,
    left,
    right,
    isSticky = true,
    style
}: PageHeaderComponentProps) => {
    const { state: panelState } = useContext(PanelContext);

    return (
        <>
            <div
                className="app-sticky-page-header-panel"
                style={{
                    ...style,
                    position: isSticky ? 'sticky' : 'initial',
                }}>
                <Layout.Header>
                    <Row align="middle" style={{ height: 'inherit' }}>
                        <Col span={12}>{title && title}{left}</Col>
                        <Col
                            span={title === undefined ? 24 : 12}
                            style={{ textAlign: 'right' }}>
                            {panelState?.is_mobile && actions && actions.length > 1 ? (
                                <Dropdown
                                    overlay={
                                        <Menu>
                                            {actions.map((item: any, index) => (
                                                <ButtonHeaderAction
                                                    key={index}
                                                    actionData={item}
                                                    headerActionType="dropdown" />
                                            ))}
                                        </Menu>
                                    }
                                    trigger={['click']}>
                                    <Button type="primary" className="ant-dropdown-link">
                                        Actions <DownOutlined />
                                    </Button>
                                </Dropdown>
                            ) : actions && actions.length ? (
                                <Space>
                                    {actions.map((item: any, index) => (
                                        <ButtonHeaderAction
                                            key={index}
                                            actionData={item} />
                                    ))}
                                </Space>
                            ) : null}
                            {right}
                        </Col>
                        {children}
                    </Row>
                </Layout.Header>
            </div>
        </>
    );
};

export default PageHeaderComponent;
