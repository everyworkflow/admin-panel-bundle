/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import React, { useContext, useState, useEffect } from 'react';
import jwtDecode, { JwtPayload } from "jwt-decode";
import GlobalOutlined from '@ant-design/icons/GlobalOutlined';
import LockOutlined from '@ant-design/icons/LockOutlined';
import LogoutOutlined from '@ant-design/icons/LogoutOutlined';
import UnorderedListOutlined from '@ant-design/icons/UnorderedListOutlined';
import UserOutlined from '@ant-design/icons/UserOutlined';
import Menu from 'antd/lib/menu';
import SidePanelComponent from "@EveryWorkflow/PanelBundle/Component/SidePanelComponent";
import {
    PANEL_FROM_LEFT,
    PANEL_SIZE_SMALL
} from "@EveryWorkflow/PanelBundle/Component/SidePanelComponent/SidePanelComponent";
import Avatar from 'antd/lib/avatar';
import PanelContext from '@EveryWorkflow/PanelBundle/Context/PanelContext';
import { ACTION_SET_AUTH } from '@EveryWorkflow/PanelBundle/Reducer/PanelReducer';
import LocalStorage from '@EveryWorkflow/PanelBundle/Service/LocalStorage';
import { useNavigate } from 'react-router-dom';

interface AccountSidePanelProps {
    onSidePanelClose: () => void;
}

const AccountSidePanel = ({ onSidePanelClose }: AccountSidePanelProps) => {
    const { dispatch: panelDispatch } = useContext(PanelContext);
    const [useData, setUserData] = useState<any>();
    const navigate = useNavigate();

    useEffect(() => {
        const getUserDataFromAuth = () => {
            const ewAuth = LocalStorage.get('ew_auth');
            return jwtDecode<JwtPayload>(ewAuth?.token);
        }
        try {
            const userData = getUserDataFromAuth();
            console.log('userData -->', userData);
            setUserData(userData);
        } catch (error: any) { }
    }, []);

    return (
        <SidePanelComponent
            title={'Account'}
            size={PANEL_SIZE_SMALL}
            fromDirection={PANEL_FROM_LEFT}
            style={{ marginLeft: 52 }}
            bodyStyle={{ padding: 0 }}
            onClose={onSidePanelClose}>
            <>
                {useData && (
                    <div style={{ padding: 16, textAlign: 'center', backgroundColor: '#f1f1f1' }}>
                        <div style={{ marginBottom: 8 }}>
                            <Avatar src={useData.profile_image} alt={'Account Icon'} icon={<UserOutlined />} size={64} />
                        </div>
                        <div style={{ fontSize: 18, fontWeight: 'bold' }}>{useData.first_name + ' ' + useData.last_name}</div>
                        <div>{useData.username}</div>
                    </div>
                )}
                <Menu style={{ border: 0, width: '100%', padding: 12 }}>
                    <Menu.Item icon={(
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="bi bi-person-circle"
                            style={{ marginBottom: -4 }}
                            width="18"
                            height="18"
                            fill="currentColor"
                            viewBox="0 0 16 16">
                            <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                            <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            <path
                                fillRule="evenodd"
                                d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
                            />
                        </svg>
                    )} key={'profile'}>My Profile</Menu.Item>
                    <Menu.Item icon={<UnorderedListOutlined />} key={'activity-log'}>Activity log</Menu.Item>
                    <Menu.Item icon={<GlobalOutlined />} key={'language'}>Language EN</Menu.Item>
                    <Menu.Item icon={<LockOutlined />} key={'lock'}>Lock</Menu.Item>
                    <Menu.Item icon={<LogoutOutlined />} key={'logout'} onClick={() => {
                        LocalStorage.remove('ew_auth');
                        panelDispatch({
                            type: ACTION_SET_AUTH,
                            payload: '',
                        });
                        navigate('/');
                        window.location.reload();
                    }}>Logout</Menu.Item>
                </Menu>
            </>
        </SidePanelComponent>
    );
};

export default AccountSidePanel;
