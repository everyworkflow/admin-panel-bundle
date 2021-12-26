/*
 * @copyright EveryWorkflow. All rights reserved.
 */
import React, { useCallback, useContext, useEffect, useState, lazy } from 'react';
import Form from 'antd/lib/form';
import Card from 'antd/lib/card';
import Remote from "@EveryWorkflow/PanelBundle/Service/Remote";
import PanelContext from '@EveryWorkflow/PanelBundle/Context/PanelContext';
import { ACTION_SET_PAGE_TITLE } from '@EveryWorkflow/PanelBundle/Reducer/PanelReducer';
import DataFormComponent from '@EveryWorkflow/DataFormBundle/Component/DataFormComponent';
import PageHeaderComponent from '@EveryWorkflow/AdminPanelBundle/Component/PageHeaderComponent';
import BreadcrumbComponent from '@EveryWorkflow/AdminPanelBundle/Component/BreadcrumbComponent';
import { FORM_TYPE_HORIZONTAL } from '@EveryWorkflow/DataFormBundle/Component/DataFormComponent/DataFormComponent';
import MediaPanelComponent from '@EveryWorkflow/MediaManagerBundle/Component/MediaPanelComponent';
import { MEDIA_MANAGER_TYPE_MULTI_SELECT } from '@EveryWorkflow/MediaManagerBundle/Component/MediaManagerComponent/MediaManagerComponent';
import AlertAction, { ALERT_TYPE_SUCCESS } from '@EveryWorkflow/PanelBundle/Action/AlertAction';

const cascader_options = [
  {
    value: 'Nepal',
    label: 'Nepal',
    children: [
      {
        value: 'Kathmandu',
        label: 'Kathmandu',
        children: [
          {
            value: 'Baneshwor',
            label: 'Baneshwor',
          },
          {
            value: 'Maitidevi',
            label: 'Maitidevi',
            disabled: true,
          },
        ],
      },
    ],
  },
  {
    value: 'Pokahara',
    label: 'Pokahara',
    children: [
      {
        value: 'Lake Side',
        label: 'Lake Side',
        children: [
          {
            value: 'Fewa',
            label: 'Fewa',
          },
        ],
      },
    ],
  },
];

const multi_select_options = [
  {
    title: 'Programming',
    value: '0-0',
    children: [
      {
        title: 'Php',
        value: '0-0-1',
      },
      {
        title: 'Javascript',
        value: '0-0-2',
      },
      {
        title: 'C ++',
        value: '0-0-3',
      },
    ],
  },
  {
    title: 'Movies',
    value: '0-1',
  },
];

const mockData = [
  {
    label: 'Address',
    field_type: 'cascader',
    name: 'address',
    sort_order: 0,
    _id: 'address',
    options: cascader_options,
  },
  {
    label: 'Hobbies',
    field_type: 'multi_select',
    name: 'hobbies',
    sort_order: 0,
    _id: 'hobbies',
    options: multi_select_options,
    treeProps: { treeCheckable: true, showCheckedStrategy: false },
  },
];

const DataFormPage = () => {
  const { dispatch: panelDispatch } = useContext(PanelContext);
  const [state, setState] = useState(false);
  const [apiData, setApiData] = useState<any>(false);
  const [form] = Form.useForm();

  const onSidePanelClose = useCallback(() => {
    setState(false);
  }, []);

  useEffect(() => {
    panelDispatch({
      type: ACTION_SET_PAGE_TITLE,
      payload: 'Data form example',
    });
    const run = async () => {
      let data = await Remote.get('/admin-panel/example/data-form');
      data.fields.splice(10, 0, ...mockData);
      setApiData(data);
    };
    run();
  }, [panelDispatch]);

  const onSubmit = (data: any) => {
    console.log('FormBuilder --> onSubmit -->', data);
  };

  return (
    <>
      {state && (
        <MediaPanelComponent
          initType={MEDIA_MANAGER_TYPE_MULTI_SELECT}
          onClose={onSidePanelClose}
        />
      )}
      <PageHeaderComponent
        title={'Edit ID: 12'}
        actions={[
          {
            label: 'Open popup',
            onClick: () => {
              console.log('opening popup :D');
              setState(true);
            },
          },
          {
            label: 'Save changes',
            onClick: () => {
              console.log('Save changes');
              form.submit();
              AlertAction({
                message: 'Form data has been console logged.',
                title: 'Form changes saved!',
                type: ALERT_TYPE_SUCCESS,
              });
            },
          },
          {
            label: 'Save and continue',
            onClick: () => {
              console.log('Save and continue');
              form.submit();
              AlertAction({
                message: 'Form data has been console logged.',
                title: 'Form changes saved!',
                type: ALERT_TYPE_SUCCESS,
              });
            },
          },
        ]}
      />
      <BreadcrumbComponent />
      <Card
        className="app-container"
        title={'Horizontal form - Root'}
        style={{ marginBottom: 24 }}
      >
        {apiData && (
          <DataFormComponent
            formId={'example-form-builder'}
            form={form}
            formData={apiData}
            formType={FORM_TYPE_HORIZONTAL}
            onSubmit={onSubmit}
            formFieldMaps={{
              email: lazy(
                () => import('@EveryWorkflow/AdminPanelBundle/Page/Examples/DataFormPage/TextField')
              )
            }}
          />
        )}
      </Card>
    </>
  );
};

export default DataFormPage;
