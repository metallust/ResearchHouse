import React from "react";

// limit of columns is 12
const Table = (props) => {
	const header = props.header;
	const body = props.tempStudent;
	return (
		<div className='overflow-x-scroll container'>
			<table className='table mt-2' style={{ whiteSpace: "nowrap" }}>
				<thead
					className='rounded-top'
					style={{
						backgroundColor: "#085F63",
						border: "1px solid #085F63",
					}}
				>
					<tr
						className='rounded-top'
						style={{
							backgroundColor: "#085F63",
							border: "1px solid #085F63",
						}}
					>
						{header.map((element, id) => {
							console.log(element, id);
							return (
								<th
									key={id}
									scope='col'
									className='text-center text-light bg-transparent'
								>
									{element}
								</th>
							);
						})}
					</tr>
				</thead>
				<tbody>
					{
						console.log(body)
}{
					body.map((person,id) => {
						// let rowcolor = apmt[0];
						// apmt = apmt.slice(1);
					
						return (
							<tr key={id}>
								<th
									scope='row'
									className='text-center'
								>
									{id + 1}
								</th>
								{person.map((element, id2) => {
									return (
										<td
											key={id2}
											scope='row'
											className='text-center'
										>
											{element}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
