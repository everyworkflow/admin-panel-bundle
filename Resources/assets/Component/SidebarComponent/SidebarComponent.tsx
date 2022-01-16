/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import React, { useContext, useState, useEffect, useCallback } from 'react';
import Menu from 'antd/lib/menu';
import { NavLink, useLocation } from 'react-router-dom';
import Button from 'antd/lib/button';
import HtmlRawComponent from "@EveryWorkflow/PanelBundle/Component/HtmlRawComponent";
import AdminPanelContext from "@EveryWorkflow/AdminPanelBundle/Context/AdminPanelContext";
import { ACTION_HIDE_MOBILE_APP_SIDEBAR } from '@EveryWorkflow/AdminPanelBundle/Reducer/AdminPanelReducer';
import SubMenu from 'antd/lib/menu/SubMenu';
import { Scrollbars } from 'react-custom-scrollbars';

const SidebarComponent = () => {
    const { state: adminPanelState, dispatch: adminPanelDispatch } = useContext(AdminPanelContext);
    const [sidebarData, setSidebarData] = useState<Array<any>>([]);
    const location = useLocation();

    useEffect(() => {
        if (adminPanelState.sidebar_data) {
            setSidebarData([...adminPanelState.sidebar_data]);
        }
    }, [adminPanelState.sidebar_data]);

    const findMenuItemByPath = (itemPath: string, items: Array<any>) => {
        let selectedItem: any = undefined;
        items.forEach((item: any) => {
            if (itemPath.includes(item.item_path, 0)) {
                selectedItem = item;
                return selectedItem;
            }
            if (item.children) {
                const newItem = findMenuItemByPath(itemPath, item.children);
                if (newItem) {
                    selectedItem = newItem;
                    return selectedItem;
                }
            }
        });
        return selectedItem;
    }

    const findMenuParentNamesByPath = (childPath: string, items: Array<any>): Array<string> => {
        let selectedNames: Array<string> = [];
        items.forEach((item: any) => {
            if (childPath.startsWith(item.item_path, 0)) {
                selectedNames.push(item.name);
                return selectedNames;
            }
            if (item.children) {
                const newPaths = findMenuParentNamesByPath(childPath, item.children);
                if (Array.isArray(newPaths) && newPaths.length) {
                    selectedNames = [...newPaths, item.name];
                    return selectedNames;
                }
            }
        });
        return selectedNames;
    }

    const getSelectedKeys = useCallback(() => {
        const menuItem = findMenuItemByPath(location.pathname, [...sidebarData]);
        if (menuItem) {
            return [menuItem.name];
        } else {
            return [];
        }
    }, [location, sidebarData]);

    const getDefaultOpenKeys = useCallback(() => {
        return findMenuParentNamesByPath(location.pathname, [...sidebarData]);
    }, [location, sidebarData]);

    const renderMenuItem = (item: any) => {
        if (item.children && item.item_type === 'group') {
            return (
                <Menu.ItemGroup
                    key={item.name}
                    title={item.item_label}>
                    {item.children.map(renderMenuItem)}
                </Menu.ItemGroup>
            );
        }
        if (item.children) {
            return (
                <SubMenu
                    key={item.name}
                    title={item.item_label}
                    icon={
                        item.item_icon ? (
                            <HtmlRawComponent
                                content={item.item_icon}
                                style={{ display: 'flex' }} />
                        ) : undefined
                    }>
                    {item.children.map(renderMenuItem)}
                </SubMenu>
            );
        }

        return (
            <Menu.Item
                key={item.name}
                icon={
                    item.item_icon ? (
                        <HtmlRawComponent
                            content={item.item_icon}
                            style={{ display: 'flex' }} />
                    ) : undefined
                }>
                {item.item_path ? (
                    <NavLink to={item.item_path}>{item.item_label}</NavLink>
                ) : <span>{item.item_label}</span>}
            </Menu.Item>
        );
    }

    return (
        <>
            <div className="app-sidebar-header" style={{ left: 52 }}>
                <NavLink to={'/dashboard'}>
                    <Button type="text" block={true}>
                        Admin Panel
                    </Button>
                </NavLink>
            </div>
            <div className="app-sidebar-panel" style={{ marginLeft: 52 }}>
                <Scrollbars autoHide={true} style={{ height: 'calc(100vh - 56px)' }}>
                    {sidebarData && Array.isArray(sidebarData) && sidebarData.length > 0 && (
                        <Menu
                            style={{ width: 254 }}
                            mode="inline"
                            selectedKeys={getSelectedKeys()}
                            defaultOpenKeys={getDefaultOpenKeys()}
                            onClick={() => {
                                adminPanelDispatch({ type: ACTION_HIDE_MOBILE_APP_SIDEBAR });
                            }}>
                            {sidebarData.map(renderMenuItem)}
                        </Menu>
                    )}
                </Scrollbars>
            </div>
        </>
    );
}

export default SidebarComponent;
