/*
 * @copyright EveryWorkflow. All rights reserved.
 */

const AdminUrlHelper = {
    buildPanelApiUrl: (url: string): string => {
        if (!url.startsWith('https://') && !url.startsWith('http://') &&
            process.env.PANEL_END_POINT && !url.startsWith(process.env.PANEL_END_POINT)) {
            url = process.env.PANEL_END_POINT + url;
        }
        if (!url.startsWith('https://') && !url.startsWith('http://') &&
            process.env.PANEL_BASE_URL && !url.startsWith(process.env.PANEL_BASE_URL)) {
            url = process.env.PANEL_BASE_URL + url;
        }
        return url;
    },
};

export default AdminUrlHelper;
