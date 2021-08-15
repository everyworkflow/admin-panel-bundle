/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import AlertDataInterface from "@EveryWorkflow/CoreBundle/Model/AlertDataInterface";
import {ACTION_ADD_ALERT_DATA} from "@EveryWorkflow/AdminPanelBundle/Admin/Reducer/PanelReducer";
import {ALERT_TYPE_DEFAULT} from "@EveryWorkflow/CoreBundle/Action/AlertAction";

interface PushAlertActionProps {
    message: string;
    title?: string;
    type?: string;
    date?: Date;
}

const PushAlertAction = ({
    message,
    title,
    type = ALERT_TYPE_DEFAULT,
    date = new Date(),
}: PushAlertActionProps) => {
    return async (dispatch: any) => {
        const alert: AlertDataInterface = {
            message: message,
            title: title,
            type: type,
            date: date,
        };
        dispatch({type: ACTION_ADD_ALERT_DATA, payload: alert});
    };
};

export default PushAlertAction;
