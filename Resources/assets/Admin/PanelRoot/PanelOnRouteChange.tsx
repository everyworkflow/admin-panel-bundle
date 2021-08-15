/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import React, {useContext, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import PanelContext from "@EveryWorkflow/AdminPanelBundle/Admin/Context/PanelContext";
import {ACTION_HIDE_MOBILE_APP_SIDEBAR} from "@EveryWorkflow/AdminPanelBundle/Admin/Reducer/PanelReducer";

interface PanelOnRouteChangeProps {
    children: JSX.Element;
}

const PanelOnRouteChange = ({children}: PanelOnRouteChangeProps) => {
    const {state, dispatch} = useContext(PanelContext);
    const history = useHistory();

    useEffect(() => {
        return history.listen(() => {
            if (state.show_mobile_app_sidebar) {
                dispatch({type: ACTION_HIDE_MOBILE_APP_SIDEBAR});
            }
            window.scrollTo(0, 0);
        });
    }, [history, state]);

    return (
        <>
            {children}
        </>
    );
};

export default PanelOnRouteChange;
