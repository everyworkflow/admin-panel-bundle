/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import LocalStorage from "@EveryWorkflow/CoreBundle/Service/LocalStorage";

const ResponseResolver = async (res: any, url: string): Promise<any> => {
    const statusCode = res.status;
    if (statusCode === 200) {
        res = await res.json();

        if (Number(process.env.REACT_DEBUG) && Number(process.env.REACT_REMOTE_DEBUG) > 2) {
            console.log('remote response data -> ' + url, res);
        }

        return res;
    } else if (statusCode === 404 || statusCode === 405) {
        throw new Error('Remote could not resolve!');
    } else if (statusCode === 401) {
        res = await res.json();
        throw new Error(res.message);
        LocalStorage.set('ew_auth', undefined);
    } else if (statusCode === 400) {
        res = await res.json();
        throw new Error(res.message);
    } else {
        throw new Error('Something went wrong!');
    }

    return null;
};

export default ResponseResolver;
