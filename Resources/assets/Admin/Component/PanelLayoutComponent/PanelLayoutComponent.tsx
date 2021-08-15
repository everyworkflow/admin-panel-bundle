/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import React, {useContext, useEffect, useRef, useState} from 'react';
import Layout from 'antd/lib/layout';
import Remote from "@EveryWorkflow/AdminPanelBundle/Admin/Service/Remote";
import PanelContext from "@EveryWorkflow/AdminPanelBundle/Admin/Context/PanelContext";
import BrowserWindow from "@EveryWorkflow/CoreBundle/Service/BrowserWindow";
import {
    ACTION_HIDE_MOBILE_APP_SIDEBAR,
    ACTION_SET_SCREEN,
    ACTION_SET_SIDEBAR_DATA
} from "@EveryWorkflow/AdminPanelBundle/Admin/Reducer/PanelReducer";
import HeaderComponent from "@EveryWorkflow/AdminPanelBundle/Admin/Component/HeaderComponent";
import FooterComponent from "@EveryWorkflow/AdminPanelBundle/Admin/Component/FooterComponent";
import SidebarComponent from "@EveryWorkflow/AdminPanelBundle/Admin/Component/SidebarComponent";
import LeftMostSidebarComponent from "@EveryWorkflow/AdminPanelBundle/Admin/Component/LeftMostSidebarComponent";
import {useClickAway} from "ahooks";

interface PanelLayoutComponentProps {
    children?: JSX.Element | JSX.Element[];
}

const PanelLayoutComponent = ({children}: PanelLayoutComponentProps) => {
    const {state, dispatch} = useContext(PanelContext);
    const {height, width} = BrowserWindow.dimensions();
    const [isPanelLoaded, setPanelLoaded] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        dispatch({
            type: ACTION_SET_SCREEN,
            payload: {width: width, height: height},
        });
    }, [width, height]);

    useEffect(() => {
        const run = async () => {
            const response = await Remote.get('/panel/layout');
            if (response.panel_sidebar) {
                dispatch({
                    type: ACTION_SET_SIDEBAR_DATA,
                    payload: response.panel_sidebar.sidebar_data,
                });
                setPanelLoaded(true);
            }
        }
        try {
            run();
        } catch (error) {
            console.log('PanelLayoutComponent-error', error);
        }
    }, [dispatch]);

    useClickAway(() => {
        if (state.show_mobile_app_sidebar) {
            dispatch({type: ACTION_HIDE_MOBILE_APP_SIDEBAR});
        }
    }, [sidebarRef, () => document.getElementById('btn-app-main-menu')]);

    return (
        <Layout className="layout">
            <Layout.Sider
                className={state.show_mobile_app_sidebar ? 'app-main-side-panel active-mobile' : 'app-main-side-panel'}
                width={260}
                theme="light">
                <div ref={sidebarRef}>
                    <LeftMostSidebarComponent/>
                    <SidebarComponent/>
                </div>
            </Layout.Sider>
            <Layout.Content style={state.show_mobile_app_sidebar ? {
                height: '100vh',
                overflow: 'hidden',
            } : undefined}>
                <HeaderComponent/>
                <div style={{minHeight: 'calc(100vh - 62px)', paddingBottom: 24}}>
                    {isPanelLoaded && children}
                </div>
                {!state.hide_footer && <FooterComponent/>}
                {/*<PanelLayoutComponent>*/}
                {/*    <LeftMostSidebarComponent/>*/}
                {/*    <SidebarComponent/>*/}
                {/*</PanelLayoutComponent>*/}
            </Layout.Content>
        </Layout>
    );
};

export default PanelLayoutComponent;
