/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import Remote from "@EveryWorkflow/CoreBundle/Service/Remote";
import AdminUrlHelper from "@EveryWorkflow/AdminPanelBundle/Admin/Helper/AdminUrlHelper";

const GetRequest = async (endPoint: string) => {
    return Remote.get(AdminUrlHelper.buildPanelApiUrl(endPoint));
};

export default GetRequest;
