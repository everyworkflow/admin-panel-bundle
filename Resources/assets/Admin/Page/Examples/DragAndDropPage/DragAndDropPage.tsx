/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import React, {useContext, useEffect, useState} from 'react';
import Card from "antd/lib/card";
import {useDrag, useDrop} from "ahooks";
import PanelContext from "@EveryWorkflow/AdminPanelBundle/Admin/Context/PanelContext";
import {ACTION_SET_PAGE_TITLE} from "@EveryWorkflow/AdminPanelBundle/Admin/Reducer/PanelReducer";

const DragAndDropPage = () => {
    const {dispatch: panelDispatch} = useContext(PanelContext);
    const [dragging, setDragging] = useState<string | null>(null);

    useEffect(() => {
        panelDispatch({
            type: ACTION_SET_PAGE_TITLE,
            payload: 'Drag and drop example',
        });
    }, [panelDispatch]);

    const getDragProps = useDrag({
        onDragStart: (data) => {
            setDragging(data);
        },
        onDragEnd: () => {
            setDragging(null);
        },
    });

    const [props, {isHovering}] = useDrop({
        onText: (text: any, e: any) => {
            console.log(e);
            alert(`'text: ${text}' dropped`);
        },
        onFiles: (files: any, e: any) => {
            console.log(e, files);
            alert(`${files.length} file dropped`);
        },
        onUri: (uri: any, e: any) => {
            console.log(e);
            alert(`uri: ${uri} dropped`);
        },
        onDom: (content: string, e: any) => {
            alert(`custom: ${content} dropped`);
        },
    });

    const [props2, {isHovering: isHovering2}] = useDrop({
        onText: (text: any, e: any) => {
            console.log(e);
            alert(`'2-text: ${text}' dropped`);
        },
        onFiles: (files: any, e: any) => {
            console.log(e, files);
            alert(`2- ${files.length} file dropped`);
        },
        onUri: (uri: any, e: any) => {
            console.log(e);
            alert(`2-uri: ${uri} dropped`);
        },
        onDom: (content: string, e: any) => {
            alert(`2-custom: ${content} dropped`);
        },
    });

    return (
        <Card
            className="app-container"
            title={'Main'}
            style={{marginTop: 24, marginBottom: 24}}
        >
            <div>
                <div style={{border: '1px dashed #e8e8e8', padding: 16, textAlign: 'center'}} {...props}>
                    {isHovering ? 'release here' : 'drop here'}
                </div>
                <br/>
                <div style={{border: '1px dashed #e8e8e8', padding: 16, textAlign: 'center'}} {...props2}>
                    {isHovering2 ? 'release here' : 'drop here'}
                </div>
                <br/>
                <div style={{display: 'flex'}}>
                    {Array.from(Array(5)).map((e, i) => (
                        <div {...getDragProps(`box${i}`)} key={i.toString()} style={{
                            border: '1px solid #e8e8e8',
                            padding: 16,
                            width: 80,
                            textAlign: 'center',
                            marginRight: 16,
                        }}
                        >
                            box{i}
                        </div>
                    ))}
                </div>
                <div style={{marginTop: 8}}>{dragging ? <>dragging {dragging}</> : 'not dragging'}</div>
            </div>
        </Card>
    );
}

export default DragAndDropPage;
