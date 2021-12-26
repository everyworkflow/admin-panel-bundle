/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import React, { useContext, useEffect, useState } from 'react';
import Card from "antd/lib/card";
import PanelContext from "@EveryWorkflow/PanelBundle/Context/PanelContext";
import PageHeaderComponent from "@EveryWorkflow/AdminPanelBundle/Component/PageHeaderComponent";
import BreadcrumbComponent from "@EveryWorkflow/AdminPanelBundle/Component/BreadcrumbComponent";
import { MODE_EDIT } from "@EveryWorkflow/PageBuilderBundle/Component/PageBuilderComponent/PageBuilderComponent";
import PageBuilderComponent from "@EveryWorkflow/PageBuilderBundle/Component/PageBuilderComponent";
import { ACTION_SET_PAGE_TITLE } from "@EveryWorkflow/PanelBundle/Reducer/PanelReducer";
import Remote from "@EveryWorkflow/PanelBundle/Service/Remote";
import PageBuilderInterface from "@EveryWorkflow/PageBuilderBundle/Model/PageBuilderInterface";
import AlertAction, { ALERT_TYPE_SUCCESS } from "@EveryWorkflow/PanelBundle/Action/AlertAction";

const PageBuilderEditPage = () => {
    const { dispatch: panelDispatch } = useContext(PanelContext);
    const [pageBuilderData, setPageBuilderData] = useState<PageBuilderInterface | undefined>();

    useEffect(() => {
        panelDispatch({
            type: ACTION_SET_PAGE_TITLE,
            payload: 'Page builder edit page',
        });
        const run = async () => {
            const data = await Remote.get('/page-builder/page-builder');
            setPageBuilderData(data);
        };
        run();
    }, [panelDispatch]);

    return (
        <>
            <PageHeaderComponent
                title={'Edit ID: 12'}
                actions={[
                    {
                        label: 'Save changes',
                        onClick: () => {
                            console.log('Save changes');
                            console.log('pageBuilderData -->', pageBuilderData);
                            AlertAction({
                                message: 'Form data has been console logged.',
                                title: 'Form changes saved!',
                                type: ALERT_TYPE_SUCCESS
                            });
                        },
                    },
                    {
                        label: 'Save and continue',
                        onClick: () => {
                            console.log('Save and continue');
                            console.log('pageBuilderData -->', pageBuilderData);
                            AlertAction({
                                message: 'Form data has been console logged.',
                                title: 'Form changes saved!',
                                type: ALERT_TYPE_SUCCESS
                            });
                        },
                    },
                ]}
            />
            <BreadcrumbComponent />
            <Card
                className="app-container"
                title={'Page builder'}
                style={{ marginBottom: 24 }}
                bodyStyle={{ display: 'none' }}
            />
            <div className="app-container">
                {pageBuilderData && <PageBuilderComponent
                    pageBuilderData={pageBuilderData}
                    mode={MODE_EDIT}
                    onChange={(data) => {
                        setPageBuilderData(data);
                    }} />}
            </div>
        </>
    );
};

export default PageBuilderEditPage;
