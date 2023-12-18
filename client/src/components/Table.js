import React from "react";

// limit of columns is 12
const Table = (props) => {
	const header = props.header;
	const body = props.body;
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
					{body.map((apmt, id) => {
						let rowcolor = apmt[0];
						apmt = apmt.slice(1);
						return (
							<tr >
								<th
									scope='row'
									className='text-center'
									style={{ color: rowcolor }}
								>
									{id + 1}
								</th>
								{apmt.map((element, id2) => {
									return (
										<td
											key={id2}
											scope='row'
											className='text-center'
											style={{ color: rowcolor }}
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
