/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import React, { useCallback, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import AdminPanelContext from '@EveryWorkflow/AdminPanelBundle/Context/AdminPanelContext';
import SidebarItemInterface from '../../Model/Sidebar/SidebarItemInterface';
import Breadcrumb from 'antd/lib/breadcrumb';

const BreadcrumbComponent = () => {
    const { state: adminPanelState } = useContext(AdminPanelContext);
    const location = useLocation();

    const getArrayItems = useCallback(() => {
        const findHierarchical = (
            items: Array<SidebarItemInterface>,
            pathName: string
        ) => {
            const hierarchicalData: Array<SidebarItemInterface> = [];
            items.forEach((item: SidebarItemInterface) => {
                let isItemAdded = false;
                if (item.url === pathName) {
                    hierarchicalData.push(item);
                    isItemAdded = true;
                }
                if (item.sidebar_data) {
                    const nextItems = findHierarchical(item.sidebar_data, pathName);
                    if (nextItems.length) {
                        if (!isItemAdded) {
                            hierarchicalData.push(item);
                            isItemAdded = true;
                        }
                        nextItems.forEach((nextItem: SidebarItemInterface) => {
                            hierarchicalData.push(nextItem);
                        });
                    }
                }
            });
            return hierarchicalData;
        };
        if (adminPanelState.sidebar_data) {
            return findHierarchical(adminPanelState.sidebar_data, location.pathname);
        }
        return [];
    }, [location, adminPanelState]);

    return (
        <Breadcrumb style={{ margin: '16px 24px' }}>
            {getArrayItems().map((item, index: number) => (
                <Breadcrumb.Item key={index}>{item.label}</Breadcrumb.Item>
            ))}
        </Breadcrumb>
    );
};

export default BreadcrumbComponent;
