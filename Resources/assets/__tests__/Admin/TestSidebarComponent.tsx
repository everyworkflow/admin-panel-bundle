/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import React, {useReducer} from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import {createMemoryHistory} from 'history'
import SidebarComponent from "@EveryWorkflow/AdminPanelBundle/Admin/Component/SidebarComponent";
import {Router} from "react-router-dom";
import PanelReducer from "@EveryWorkflow/AdminPanelBundle/Admin/Reducer/PanelReducer";
import {panelState} from "@EveryWorkflow/AdminPanelBundle/Admin/State/PanelState";
import PanelContext from "@EveryWorkflow/AdminPanelBundle/Admin/Context/PanelContext";

afterEach(cleanup);

test('Admin panel --> sidebar', () => {
    const SidebarTestComponent = () => {
        const [state, dispatch] = useReducer(PanelReducer, {
            ...panelState,
            sidebar_data: [
                {
                    label: 'Dashboard',
                    url: '/dashboard',
                },
                {
                    label: 'Content',
                    url: '/content',
                    sidebar_data: [
                        {
                            label: 'Content',
                            showBack: true,
                        },
                        {
                            label: 'Page',
                            url: '/content/page',
                        },
                        {
                            label: 'Static block',
                            url: '/content/static-block',
                        },
                        {
                            label: 'Email templates',
                            url: '/content/email-templates',
                        },
                    ],
                },
            ],
        });
        const history = createMemoryHistory();

        return (
            <PanelContext.Provider value={{state, dispatch}}>
                <Router history={history}>
                    <SidebarComponent/>
                </Router>
            </PanelContext.Provider>
        );
    }

    const result = render(<SidebarTestComponent/>);

    expect(result.container.getElementsByClassName('app-sidebar-panel')).toBeDefined();

    expect(result.queryByLabelText(/Dashboard/i)).toBeDefined();
    expect(result.queryByLabelText(/Content/i)).toBeDefined();

    /* Opening content submenu by click */
    result.getByText(/Content/i).parentElement?.click();

    expect(result.queryByLabelText(/Static block/i)).toBeDefined();
    expect(result.queryByLabelText(/Email templates/i)).toBeDefined();
});
