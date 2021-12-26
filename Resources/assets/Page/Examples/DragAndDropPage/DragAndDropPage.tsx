/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import React, { useRef, useContext, useEffect, useState } from 'react';
import Card from "antd/lib/card";
import { useDrag, useDrop } from "ahooks";
import PanelContext from "@EveryWorkflow/PanelBundle/Context/PanelContext";
import { ACTION_SET_PAGE_TITLE } from "@EveryWorkflow/PanelBundle/Reducer/PanelReducer";

const DragItem = ({ data }: any) => {
    const dragRef = useRef<HTMLDivElement>(null);

    const [dragging, setDragging] = useState(false);

    useDrag(data, dragRef, {
        onDragStart: () => {
            setDragging(true);
        },
        onDragEnd: () => {
            setDragging(false);
        },
    });

    return (
        <div
            ref={dragRef}
            style={{
                border: '1px solid #e8e8e8',
                padding: 16,
                width: 80,
                textAlign: 'center',
                marginRight: 16,
            }}
        >
            {dragging ? 'dragging' : `box-${data}`}
        </div>
    );
};


const DragAndDropPage = () => {
    const { dispatch: panelDispatch } = useContext(PanelContext);
    const [dragging, setDragging] = useState<string | null>(null);

    const [isHovering, setIsHovering] = useState(false);
    const dropRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        panelDispatch({
            type: ACTION_SET_PAGE_TITLE,
            payload: 'Drag and drop example',
        });
    }, [panelDispatch]);

    useDrop(dropRef, {
        onText: (text, e) => {
            console.log(e);
            alert(`'text: ${text}' dropped`);
        },
        onFiles: (files, e) => {
            console.log(e, files);
            alert(`${files.length} file dropped`);
        },
        onUri: (uri, e) => {
            console.log(e);
            alert(`uri: ${uri} dropped`);
        },
        onDom: (content: string, e) => {
            alert(`custom: ${content} dropped`);
        },
        onDragEnter: () => setIsHovering(true),
        onDragLeave: () => setIsHovering(false),
    });

    return (
        <Card
            className="app-container"
            title={'Main'}
            style={{ marginTop: 24, marginBottom: 24 }}
        >
            <div>
                <div ref={dropRef} style={{ border: '1px dashed #e8e8e8', padding: 16, textAlign: 'center' }}>
                    {isHovering ? 'release here' : 'drop here'}
                </div>
                <br />
                <div style={{ display: 'flex' }}>
                    {Array.from(Array(5)).map((e, i) => (
                        <DragItem key={i.toString()} data={i.toString()} />
                    ))}
                </div>
            </div>
        </Card>
    );
}

export default DragAndDropPage;
