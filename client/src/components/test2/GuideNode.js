import { useCallback } from "react";
import { Handle, Position } from "reactflow";

export default function GuideNode({ data }) {
	const onChange = useCallback((evt) => {
		console.log(evt.target.value);
	}, []);

	return (
		<div className='p-3 border text-white rounded'>
			<Handle type='source' position={Position.Right} />
			<div className='d-flex'>
				<div className='flex-column'>
					<div>Guide Name : {data.name}</div>
					<div>Guide Name : {data.name}</div>
					<div>Guide Name : {data.name}</div>
				</div>
				<div className='d-flex align-items-center'>
					<button style={{ borderRadius: "40px", border: "none", display: "flex", height: "20px", width: "20px", backgroundColor: "red" }}>
						<svg xmlns='http://www.w3.org/2000/svg' height='16' width='15' viewBox='0 0 448 512'>
							<path d='M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z' />
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
}
