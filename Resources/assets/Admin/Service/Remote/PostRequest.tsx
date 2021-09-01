/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import Remote from "@EveryWorkflow/CoreBundle/Service/Remote";
import AdminUrlHelper from "@EveryWorkflow/AdminPanelBundle/Admin/Helper/AdminUrlHelper";
import PanelContext from "@EveryWorkflow/AdminPanelBundle/Admin/Context/PanelContext";
import LocalStorage from "@EveryWorkflow/CoreBundle/Service/LocalStorage";
import ResponseResolver from "@EveryWorkflow/AdminPanelBundle/Admin/Service/Remote/ResponseResolver";

const PostRequest = async (endPoint: string, data: any | Array<any>, options: any = {}) => {
    options = {
        method: 'post',
        body: JSON.stringify(data),
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
        console.log('remote get -> ' + url);
    }

    const res = await fetch(url, options);

    if (Number(process.env.REACT_DEBUG) && Number(process.env.REACT_REMOTE_DEBUG) > 1) {
        console.log('remote get response -> ' + url, res);
    }

    return ResponseResolver(res, url);
};

export default PostRequest;
