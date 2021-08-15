/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import Remote from "@EveryWorkflow/CoreBundle/Service/Remote";
import AdminUrlHelper from "@EveryWorkflow/AdminPanelBundle/Admin/Helper/AdminUrlHelper";

const PostRequest = async (endPoint: string, data: any | Array<any>) => {
    return Remote.post(AdminUrlHelper.buildPanelApiUrl(endPoint), data);
};

export default PostRequest;
