/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import React from 'react';
import Input from 'antd/lib/input';
import SidePanelComponent from "@EveryWorkflow/CoreBundle/Component/SidePanelComponent";
import {
    PANEL_FROM_LEFT,
    PANEL_SIZE_MEDIUM
} from "@EveryWorkflow/CoreBundle/Component/SidePanelComponent/SidePanelComponent";

interface SearchSidePanelProps {
    onSidePanelClose: () => void;
    panelState: any;
}

const SearchSidePanel = ({ onSidePanelClose, panelState }: SearchSidePanelProps) => {
    console.log('SearchSidePanel - panelState -->', panelState);
    const onSearch = (value: string) => console.log(value);

    return (
        <SidePanelComponent
            title={'Search'}
            size={PANEL_SIZE_MEDIUM}
            fromDirection={PANEL_FROM_LEFT}
            style={{ marginLeft: 52 }}
            onClose={onSidePanelClose}
        >
            <>
                <Input.Search
                    placeholder="input search text"
                    enterButton="Search"
                    allowClear
                    size="large"
                    onSearch={onSearch}
                />
            </>
        </SidePanelComponent>
    );
};

export default SearchSidePanel;
