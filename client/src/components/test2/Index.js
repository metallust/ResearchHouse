import React, { useCallback } from "react";
import ReactFlow, { useNodesState, useEdgesState, addEdge } from "reactflow";
import GuideNode from "./GuideNode";
import StudentNode from "./StudentNode";

import "reactflow/dist/style.css";

const initialNodes = [
	{ id: "1", position: { x: 200, y: 200 }, type: "guideNode", data: { name: "Guide 1" } },
	{ id: "2", position: { x: 500, y: 200 }, type: "studentNode", data: { name: "Student 1" } },
	{ id: "3", position: { x: 500, y: 300 }, type: "studentNode", data: { name: "Student 1" } },
	{ id: "4", position: { x: 500, y: 400 }, type: "studentNode", data: { name: "Student 1" } },
];
const initialEdges = [
	{ id: "e1-2", source: "1", target: "2", animated: true },
	{ id: "e1-3", source: "1", target: "3", animated: true },
	{ id: "e1-4", source: "1", target: "4", animated: true },
];

const nodeTypes = {
	guideNode: GuideNode,
	studentNode: StudentNode,
};

export default function App() {
	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

	const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

	return (
		<div style={{ width: "100vw", height: "100vh", background: "black" }}>
			<ReactFlow nodes={nodes} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} edges={edges} nodeTypes={nodeTypes} fitView onConnect={onConnect} />
		</div>
	);
}
