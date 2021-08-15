/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import React, { useContext } from 'react';
import Layout from 'antd/lib/layout';
import Button from 'antd/lib/button';
import Space from 'antd/lib/space';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Menu from 'antd/lib/menu';
import Dropdown from 'antd/lib/dropdown';
import DownOutlined from '@ant-design/icons/DownOutlined';
import { NavLink } from 'react-router-dom';
import PanelContext from "@EveryWorkflow/AdminPanelBundle/Admin/Context/PanelContext";
import ButtonInterface from "@EveryWorkflow/CoreBundle/Model/ButtonInterface";

const { Header } = Layout;

interface PageHeaderComponentProps {
    title?: string;
    actions?: Array<ButtonInterface>;
    children?: JSX.Element;
}

const PageHeaderComponent = ({
    title,
    actions,
    children,
}: PageHeaderComponentProps) => {
    const { state: panelState } = useContext(PanelContext);

    return (
        <>
            <div
                className="app-sticky-page-header-panel"
                style={{
                    position: panelState.screen?.width && panelState.screen?.width < 768 ? 'sticky' : 'sticky',
                }}
            >
                <Header>
                    <Row align="middle" style={{height: 'inherit'}}>
                        {title && <Col span={12}>{title}</Col>}
                        {panelState.screen?.width &&
                        panelState.screen?.width < 768 &&
                        actions ? (
                                <Col
                                    span={title === undefined ? 24 : 12}
                                    style={{ textAlign: 'right' }}
                                >
                                    <Dropdown
                                        overlay={
                                            <Menu>
                                                {actions.map((item, index) => (
                                                    <Menu.Item key={index} onClick={item.onClick}>
                                                        {item.url ? (
                                                            <NavLink to={item.url}>{item.label}</NavLink>
                                                        ) : (
                                                            item.label
                                                        )}
                                                    </Menu.Item>
                                                ))}
                                            </Menu>
                                        }
                                        trigger={['click']}
                                    >
                                        <Button type="primary" className="ant-dropdown-link">
                                        Actions <DownOutlined />
                                        </Button>
                                    </Dropdown>
                                </Col>
                            ) : actions ? (
                                <Col
                                    span={title === undefined ? 24 : 12}
                                    style={{ textAlign: 'right' }}
                                >
                                    <Space>
                                        {actions.map((item, index) => (
                                            <Button key={index} type="primary" onClick={item.onClick}>
                                                {item.label}
                                            </Button>
                                        ))}
                                    </Space>
                                </Col>
                            ) : null}
                        {children}
                    </Row>
                </Header>
            </div>
        </>
    );
};

export default PageHeaderComponent;
