import { useCallback } from "react";
import { Handle, Position } from "reactflow";

export default function StudentNode({ data }) {
	const onChange = useCallback((evt) => {
		console.log(evt.target.value);
	}, []);

	return (
		<div className='p-3 border text-white rounded'>
			<Handle type='target' position={Position.Left} />
			<div>
				<p>Student Name : {data.name}</p>
			</div>
		</div>
	);
}
