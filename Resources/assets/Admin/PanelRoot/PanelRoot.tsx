/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import React, {useReducer} from 'react';
import {BrowserRouter} from 'react-router-dom';
import PanelLayoutComponent from "@EveryWorkflow/AdminPanelBundle/Admin/Component/PanelLayoutComponent";
import PanelContext from "@EveryWorkflow/AdminPanelBundle/Admin/Context/PanelContext";
import {panelState} from "@EveryWorkflow/AdminPanelBundle/Admin/State/PanelState";
import PanelReducer from "@EveryWorkflow/AdminPanelBundle/Admin/Reducer/PanelReducer";
import PanelOnRouteChange from "@EveryWorkflow/AdminPanelBundle/Admin/PanelRoot/PanelOnRouteChange";
import RouteMapRenderComponent from "@EveryWorkflow/CoreBundle/Component/RouteMapRenderComponent";
import {RouteMaps} from "@EveryWorkflow/AdminPanelBundle/Admin/PanelRoot/RouteMaps";

const PanelRoot = () => {
    const [state, dispatch] = useReducer(PanelReducer, panelState);

    return (
        <PanelContext.Provider value={{state, dispatch}}>
            <BrowserRouter basename={'/admin'}>
                <PanelOnRouteChange>
                    <PanelLayoutComponent>
                        <RouteMapRenderComponent routeMaps={RouteMaps}/>
                    </PanelLayoutComponent>
                </PanelOnRouteChange>
            </BrowserRouter>
        </PanelContext.Provider>
    );
};

export default PanelRoot;
