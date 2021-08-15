/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import { GlobalOutlined, LockOutlined, LogoutOutlined, UnorderedListOutlined } from '@ant-design/icons';
import Menu from 'antd/lib/menu';
import React from 'react';
import SidePanelComponent from "@EveryWorkflow/CoreBundle/Component/SidePanelComponent";
import {
    PANEL_FROM_LEFT,
    PANEL_SIZE_SMALL
} from "@EveryWorkflow/CoreBundle/Component/SidePanelComponent/SidePanelComponent";

interface AccountSidePanelProps {
    onSidePanelClose: () => void;
    panelState: any;
}

const AccountSidePanel = ({ onSidePanelClose, panelState }: AccountSidePanelProps) => {
    return (
        <SidePanelComponent
            title={'Account'}
            size={PANEL_SIZE_SMALL}
            fromDirection={PANEL_FROM_LEFT}
            style={{ marginLeft: 52 }}
            bodyStyle={{ padding: 0 }}
            onClose={onSidePanelClose}
        >
            <>
                <div style={{ padding: 16, paddingBottom: 0 }}>
                    <img
                        className="rounded-circle shadow-sm"
                        src={'/media/person.jpg'}
                        alt={'Profile'}
                    />
                    <h2>Admin User</h2>
                </div>
                <Menu style={{ border: 0, width: '100%' }}>
                    <Menu.Item icon={(
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="bi bi-person-circle"
                            style={{ marginBottom: -4 }}
                            width="18"
                            height="18"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                            <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            <path
                                fillRule="evenodd"
                                d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
                            />
                        </svg>
                    )}>My Profile</Menu.Item>
                    <Menu.Item icon={<UnorderedListOutlined />}>Activity log</Menu.Item>
                    <Menu.Item icon={<GlobalOutlined />}>Language EN</Menu.Item>
                    <Menu.Item icon={<LockOutlined />}>Lock</Menu.Item>
                    <Menu.Item icon={<LogoutOutlined />}>Logout</Menu.Item>
                </Menu>
            </>
        </SidePanelComponent>
    );
};

export default AccountSidePanel;
