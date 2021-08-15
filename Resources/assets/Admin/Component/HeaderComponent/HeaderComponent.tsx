/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import React, {useContext} from 'react';
import Layout from 'antd/lib/layout';
import Button from 'antd/lib/button';
import Space from 'antd/lib/space';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import {MenuUnfoldOutlined} from "@ant-design/icons";
import PanelContext from "@EveryWorkflow/AdminPanelBundle/Admin/Context/PanelContext";
import {ACTION_SHOW_MOBILE_APP_SIDEBAR} from "@EveryWorkflow/AdminPanelBundle/Admin/Reducer/PanelReducer";

const HeaderComponent = () => {
    const {state: panelState, dispatch: panelDispatch} = useContext(PanelContext);

    const onMobileNavbarClick = () => {
        panelDispatch({type: ACTION_SHOW_MOBILE_APP_SIDEBAR});
    };

    return (
        <>
            <div
                className="app-header-panel"
                style={{
                    position: 'sticky',
                    // panelState.screen?.width && panelState.screen?.width < 768
                    //     ? 'initial'
                    //     : 'sticky',
                }}
            >
                <Layout.Header>
                    <Row gutter={16} align="middle" style={{height: 'inherit'}}>
                        <Col span={12}>
                            <Space>
                                {panelState.screen?.width && panelState.screen?.width < 768 && (
                                    <Button
                                        type="default"
                                        id="btn-app-main-menu"
                                        onClick={onMobileNavbarClick}
                                        icon={<MenuUnfoldOutlined/>}/>
                                )}
                                <span style={{fontSize: 16, fontWeight: 'bold'}}>{panelState.page_title}</span>
                            </Space>
                        </Col>
                        <Col span={12} style={{textAlign: 'right'}}>
                            <Space>
                                <span>Something here</span>
                            </Space>
                        </Col>
                    </Row>
                </Layout.Header>
            </div>
        </>
    );
};

export default HeaderComponent;
