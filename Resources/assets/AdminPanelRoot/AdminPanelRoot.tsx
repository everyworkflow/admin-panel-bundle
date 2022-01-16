/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import React, { useContext, useEffect, useReducer, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import PanelLayoutComponent from "@EveryWorkflow/AdminPanelBundle/Component/PanelLayoutComponent";
import AdminPanelContext from "@EveryWorkflow/AdminPanelBundle/Context/AdminPanelContext";
import { adminPanelState } from "@EveryWorkflow/AdminPanelBundle/State/AdminPanelState";
import AdminPanelReducer from "@EveryWorkflow/AdminPanelBundle/Reducer/AdminPanelReducer";
import RouteMapRenderComponent from "@EveryWorkflow/PanelBundle/Component/RouteMapRenderComponent";
import { RouteMaps } from "@EveryWorkflow/AdminPanelBundle/AdminPanelRoot/RouteMaps";
import ScrollToTopOnRouteChange from '@EveryWorkflow/PanelBundle/Component/ScrollToTopOnRouteChange';
import PanelContext from '@EveryWorkflow/PanelBundle/Context/PanelContext';
import LoginPage from '@EveryWorkflow/AuthBundle/Admin/Page/LoginPage';
import './RootStyle.css';

const AdminPanelRoot = () => {
    const { state: panelState } = useContext(PanelContext);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [state, dispatch] = useReducer(AdminPanelReducer, adminPanelState);

    useEffect(() => {
        if (panelState.auth) {
            setIsLoggedIn(true);
        }
    }, [panelState.auth]);

    return (
        <AdminPanelContext.Provider value={{ state, dispatch }}>
            <BrowserRouter basename={'/admin'}>
                {isLoggedIn ? (
                    <ScrollToTopOnRouteChange>
                        <PanelLayoutComponent>
                            <RouteMapRenderComponent routeMaps={RouteMaps} />
                        </PanelLayoutComponent>
                    </ScrollToTopOnRouteChange>
                ) : (
                    <LoginPage />
                )}
            </BrowserRouter>
        </AdminPanelContext.Provider>
    );
};

export default AdminPanelRoot;
