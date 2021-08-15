/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import PanelStateInterface from "@EveryWorkflow/AdminPanelBundle/Admin/Model/PanelStateInterface";
import AlertAction from "@EveryWorkflow/CoreBundle/Action/AlertAction";

export const ACTION_SET_PAGE_TITLE = 'set_page_title';
export const ACTION_SET_BACKDROP = 'set_backdrop';

export const ACTION_SET_SCREEN = 'set_screen';

export const ACTION_SHOW_MOBILE_APP_SIDEBAR = 'show_mobile_app_sidebar';
export const ACTION_HIDE_MOBILE_APP_SIDEBAR = 'hide_mobile_app_sidebar';

export const ACTION_HIDE_FOOTER = 'hide_footer';
export const ACTION_SHOW_FOOTER = 'show_footer';

export const ACTION_SET_SIDEBAR_DATA = 'set_sidebar_data';

export const ACTION_ADD_ALERT_DATA = 'add_alert_data';

interface PanelActionInterface {
    type: string;
    payload: any;
}

const PanelReducer = (
    state: PanelStateInterface,
    action: PanelActionInterface
) => {
    switch (action.type) {
        case ACTION_SET_PAGE_TITLE: {
            return {
                ...state,
                page_title: action.payload,
                hide_footer: false,
            };
        }
        case ACTION_SET_BACKDROP: {
            return {
                ...state,
                backdrop: action.payload,
            };
        }
        case ACTION_SET_SCREEN: {
            let isMobile = false;
            if (action.payload && action.payload.width < 992) {
                isMobile = true;
            }
            return {
                ...state,
                is_mobile: isMobile,
                screen: action.payload,
            };
        }
        case ACTION_HIDE_FOOTER: {
            return {
                ...state,
                hide_footer: true,
            };
        }
        case ACTION_SHOW_FOOTER: {
            return {
                ...state,
                hide_footer: false,
            };
        }
        case ACTION_SET_SIDEBAR_DATA: {
            return {
                ...state,
                sidebar_data: action.payload,
            };
        }
        case ACTION_ADD_ALERT_DATA: {
            AlertAction(action.payload);
            return {
                ...state,
                alert_data: [action.payload, ...state.alert_data],
            };
        }
        case ACTION_SHOW_MOBILE_APP_SIDEBAR: {
            return {
                ...state,
                show_mobile_app_sidebar: true,
            };
        }
        case ACTION_HIDE_MOBILE_APP_SIDEBAR: {
            return {
                ...state,
                show_mobile_app_sidebar: false,
            };
        }
        default:
            return state;
    }
};

export default PanelReducer;
