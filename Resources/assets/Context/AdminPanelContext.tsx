/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import { createContext } from 'react';
import AdminPanelStateInterface from '@EveryWorkflow/AdminPanelBundle/Model/AdminPanelStateInterface';
import { adminPanelState } from "@EveryWorkflow/AdminPanelBundle/State/AdminPanelState";

export interface AdminPanelContextInterface {
    state: AdminPanelStateInterface;
    dispatch: any;
}

const AdminPanelContext = createContext<AdminPanelContextInterface>({
    state: adminPanelState,
    dispatch: () => null,
});

export default AdminPanelContext;
