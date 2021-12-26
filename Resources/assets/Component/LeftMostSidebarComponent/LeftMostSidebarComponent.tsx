/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import Tooltip from 'antd/lib/tooltip';
import Badge from 'antd/lib/badge';
import Button from 'antd/lib/button';
import Avatar from 'antd/lib/avatar';
import {
    BellOutlined,
    SearchOutlined,
    UserOutlined,
    SettingOutlined,
    AreaChartOutlined,
    MessageOutlined,
    ExpandOutlined,
    ShopOutlined,
    SlidersOutlined,
    BlockOutlined,
    HomeOutlined
} from '@ant-design/icons';
import SearchSidePanel from "@EveryWorkflow/AdminPanelBundle/Component/LeftMostSidebarComponent/SearchSidePanel";
import NotificationSidePanel
    from "@EveryWorkflow/AdminPanelBundle/Component/LeftMostSidebarComponent/NotificationSidePanel";
import MessageSidePanel
    from "@EveryWorkflow/AdminPanelBundle/Component/LeftMostSidebarComponent/MessageSidePanel";
import AccountSidePanel
    from "@EveryWorkflow/AdminPanelBundle/Component/LeftMostSidebarComponent/AccountSidePanel";
import SettingSidePanel
    from "@EveryWorkflow/AdminPanelBundle/Component/LeftMostSidebarComponent/SettingSidePanel";

const LeftMostSidebarComponent = () => {
    const [sidePanelState, setSidePanelState] = useState<string | null>(null);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const onSidePanelClose = useCallback(() => {
        setSidePanelState(null);
    }, []);

    const toggleDarkMode = () => {
        console.log('toggleDarkMode - clicked');
        setIsDarkMode(!isDarkMode);
    };

    return (
        <>
            <div className="app-bar-panel">
                <div style={{ borderBottom: 'solid 1px #ffffff' }}>
                    <div style={{
                        height: 55,
                        padding: 8,
                        marginBottom: 16,
                        borderBottom: 'solid 1px #ffffff',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Tooltip title="EveryWorkflow" placement="right">
                            <Link style={{ fontWeight: 'bolder', fontSize: 24, textAlign: 'center', color: '#000' }}
                                to="/">EW</Link>
                        </Tooltip>
                    </div>
                    <div style={{ paddingLeft: 8, paddingRight: 8, marginBottom: 16 }}>
                        <Tooltip title="Search" placement="right">
                            <Button
                                shape="circle"
                                icon={<SearchOutlined />}
                                onClick={() => {
                                    setSidePanelState('search');
                                }}
                            />
                        </Tooltip>
                    </div>
                    <div style={{ paddingLeft: 8, paddingRight: 8, marginBottom: 16 }}>
                        <Tooltip title="Notification" placement="right">
                            <Badge>
                                <Button
                                    shape="circle"
                                    icon={<BellOutlined />}
                                    onClick={() => {
                                        setSidePanelState('notification');
                                    }}
                                />
                            </Badge>
                        </Tooltip>
                    </div>
                    <div style={{ paddingLeft: 8, paddingRight: 8, marginBottom: 16 }}>
                        <Tooltip title="Message" placement="right">
                            <Button
                                shape="circle"
                                icon={<MessageOutlined />}
                                onClick={() => {
                                    setSidePanelState('message');
                                }}
                            />
                        </Tooltip>
                    </div>
                </div>
                <div style={{ paddingTop: 16, marginBottom: 16, borderBottom: 'solid 1px #ffffff' }}>
                    <div style={{ paddingLeft: 8, paddingRight: 8, marginBottom: 16 }}>
                        <Tooltip title="Home" placement="right">
                            <Button
                                shape="circle"
                                icon={<HomeOutlined />}
                                onClick={() => {
                                    setSidePanelState('home');
                                }}
                            />
                        </Tooltip>
                    </div>
                    <div style={{ paddingLeft: 8, paddingRight: 8, marginBottom: 16 }}>
                        <Tooltip title="Ecommerce" placement="right">
                            <Button
                                shape="circle"
                                icon={<ShopOutlined />}
                                onClick={() => {
                                    // setSidePanelState('notification');
                                }}
                            />
                        </Tooltip>
                    </div>
                    <div style={{ paddingLeft: 8, paddingRight: 8, marginBottom: 16 }}>
                        <Tooltip title="Reports" placement="right">
                            <Button
                                shape="circle"
                                icon={<AreaChartOutlined />}
                                onClick={() => {
                                    // setSidePanelState('notification');
                                }}
                            />
                        </Tooltip>
                    </div>
                    <div style={{ paddingLeft: 8, paddingRight: 8, marginBottom: 16 }}>
                        <Tooltip title="System blocks" placement="right">
                            <Button
                                shape="circle"
                                icon={<BlockOutlined />}
                                onClick={() => {
                                    // setSidePanelState('notification');
                                }}
                            />
                        </Tooltip>
                    </div>
                    <div style={{ paddingLeft: 8, paddingRight: 8, marginBottom: 16 }}>
                        <Tooltip title="Settings" placement="right">
                            <Button
                                shape="circle"
                                icon={<SettingOutlined />}
                            />
                        </Tooltip>
                    </div>
                </div>
                <div style={{ marginBottom: 16, borderBottom: 'solid 1px #ffffff' }}>
                    <div style={{ paddingLeft: 8, paddingRight: 8, marginBottom: 16 }}>
                        <Tooltip title="Panel control" placement="right">
                            <Button
                                shape="circle"
                                icon={<SlidersOutlined />}
                                onClick={() => {
                                    setSidePanelState('panel-control');
                                }}
                            />
                        </Tooltip>
                    </div>
                    <div style={{ paddingLeft: 8, paddingRight: 8, marginBottom: 16 }}>
                        <Tooltip title="Full screen" placement="right">
                            <Button
                                shape="circle"
                                icon={<ExpandOutlined />}
                            />
                        </Tooltip>
                    </div>
                    <div style={{ paddingLeft: 8, paddingRight: 8, marginBottom: 16 }}>
                        <Tooltip title="Toggle dark mode" placement="right">
                            <Button
                                shape="circle"
                                onClick={toggleDarkMode}
                                icon={isDarkMode ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-grid" width="26"
                                        height="26" fill="currentColor" viewBox="0 0 16 16">
                                        <path fill="currentColor"
                                            d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-grid" width="26"
                                        height="26" fill="currentColor" viewBox="0 0 16 16">
                                        <path fill="currentColor"
                                            d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z" />
                                    </svg>
                                )}
                            />
                        </Tooltip>
                    </div>
                </div>
                <div style={{ paddingLeft: 8, paddingRight: 8, marginBottom: 16 }}>
                    <Tooltip title="Account" placement="right">
                        <Badge count={0}>
                            <Button
                                shape="circle"
                                style={{ padding: 0 }}
                                icon={<Avatar src="/media/person.jpg" alt={'Account Icon'} icon={<UserOutlined />}
                                    style={{ width: 30, height: 30 }} />}
                                onClick={() => {
                                    setSidePanelState('account');
                                }}
                            />
                        </Badge>
                    </Tooltip>
                </div>
            </div>
            {sidePanelState === 'search' && (
                <SearchSidePanel onSidePanelClose={onSidePanelClose} />
            )}
            {sidePanelState === 'notification' && (
                <NotificationSidePanel onSidePanelClose={onSidePanelClose} />
            )}
            {sidePanelState === 'message' && (
                <MessageSidePanel onSidePanelClose={onSidePanelClose} />
            )}
            {sidePanelState === 'account' && (
                <AccountSidePanel onSidePanelClose={onSidePanelClose} />
            )}
            {sidePanelState === 'panel-control' && (
                <SettingSidePanel onSidePanelClose={onSidePanelClose} />
            )}
        </>
    );
}

export default LeftMostSidebarComponent;
