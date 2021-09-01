/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import Remote from "@EveryWorkflow/CoreBundle/Service/Remote";
import PanelContext from "@EveryWorkflow/AdminPanelBundle/Admin/Context/PanelContext";
import LocalStorage from "@EveryWorkflow/CoreBundle/Service/LocalStorage";
import AdminUrlHelper from "@EveryWorkflow/AdminPanelBundle/Admin/Helper/AdminUrlHelper";
import ResponseResolver from "@EveryWorkflow/AdminPanelBundle/Admin/Service/Remote/ResponseResolver";

const GetRequest = async (endPoint: string, options: any = {}) => {
    options = {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
        },
        ...options,
    }

    const auth: any = LocalStorage.get('ew_auth');
    if (auth) {
        options['headers']['Authorization'] = 'Bearer ' + auth.token;
    }

    const url = AdminUrlHelper.buildPanelApiUrl(endPoint);

    if (Number(process.env.REACT_DEBUG) && Number(process.env.REACT_REMOTE_DEBUG) > 0) {
        console.log('remote get -> ' + url, options);
    }

    const res = await fetch(url, options);

    if (Number(process.env.REACT_DEBUG) && Number(process.env.REACT_REMOTE_DEBUG) > 1) {
        console.log('remote get response -> ' + url, res);
    }

    return ResponseResolver(res, url);
};

export default GetRequest;
