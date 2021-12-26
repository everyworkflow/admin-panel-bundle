/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import React, { Fragment, useCallback, useContext } from 'react';
import Menu from 'antd/lib/menu';
import { NavLink, useLocation } from 'react-router-dom';
import Button from 'antd/lib/button';
import HtmlRawComponent from "@EveryWorkflow/PanelBundle/Component/HtmlRawComponent";
import SidebarItemInterface from "@EveryWorkflow/AdminPanelBundle/Model/Sidebar/SidebarItemInterface";
import AdminPanelContext from "@EveryWorkflow/AdminPanelBundle/Context/AdminPanelContext";

const SidebarComponent = () => {
    const { state: adminPanelState } = useContext(AdminPanelContext);
    const location = useLocation();

    const getSelectedKeys = useCallback((): Array<string> => {
        const currentPath = location.pathname;
        const doesMenuItemExistInTree = (items: Array<any>) => {
            let doesExist = false;
            items.forEach((item: any) => {
                if (item.url === currentPath) {
                    doesExist = true;
                }
                if (!doesExist && Array.isArray(item.sidebar_data) && item.sidebar_data.length) {
                    const doesExistInChild = doesMenuItemExistInTree(item.sidebar_data);
                    if (doesExistInChild) {
                        doesExist = true;
                    }
                }
            });
            return doesExist;
        }
        if (Array.isArray(adminPanelState.sidebar_data) && doesMenuItemExistInTree(adminPanelState.sidebar_data)) {
            return [currentPath];
        }
        return [];
    }, [location, adminPanelState.sidebar_data]);

    const getDefaultOptionKeys = useCallback((): Array<string> => {
        const currentPath = location.pathname;
        if (Array.isArray(adminPanelState.sidebar_data)) {
            return [currentPath];
        }
        return [];
    }, [location, adminPanelState.sidebar_data]);

    const getSideBar = (sidebarItems: Array<SidebarItemInterface>) => {
        return (
            <>
                {sidebarItems.map((item: SidebarItemInterface, index: number) => (
                    <Fragment key={`${index}-${item.url}`}>
                        {item.sidebar_data?.length && item.url ? (
                            <Menu.SubMenu
                                key={`${index}-${item.url}`}
                                icon={
                                    item.icon ? (
                                        <HtmlRawComponent
                                            content={item.icon}
                                            style={{ display: 'flex' }}
                                        />
                                    ) : undefined
                                }
                                title={item.label}
                            >
                                {item.sidebar_data?.length && getSideBar(item.sidebar_data)}
                            </Menu.SubMenu>
                        ) : item.url ? (
                            <Menu.Item
                                key={item.url}
                                icon={
                                    item.icon ? (
                                        <HtmlRawComponent
                                            content={item.icon}
                                            style={{ display: 'flex' }}
                                        />
                                    ) : undefined
                                }
                            >
                                <NavLink to={item.url}>
                                    {item.label}
                                </NavLink>
                            </Menu.Item>
                        ) : null}
                    </Fragment>
                ))}
            </>
        );
    };

    return (
        <div className="app-sidebar-panel">
            <div className="sidebar-header">
                <NavLink to={'/'}>
                    <Button type="text" block={true}>
                        Admin Panel
                    </Button>
                </NavLink>
            </div>
            <Menu
                mode="inline"
                selectedKeys={getSelectedKeys()}
                defaultOpenKeys={getDefaultOptionKeys()}
            >
                {adminPanelState?.sidebar_data && Array.isArray(adminPanelState?.sidebar_data) && getSideBar(adminPanelState.sidebar_data)}
            </Menu>
        </div>
    );
}

export default SidebarComponent;
