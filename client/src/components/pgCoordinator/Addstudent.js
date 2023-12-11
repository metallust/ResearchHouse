import React, { useState } from "react";
import { Link } from "react-router-dom";

const Addstudent = () => {
	const [inventoryDetails, setInventoryDetails] = useState({
		itemName: "",
		quantity: 0,
		minQuantity: 0,
	});

	const [itemList, setItemList] = useState([]);
	const [isSubmitDisabled, setSubmitDisabled] = useState(true);

	const handleAddItem = () => {
		setItemList((prevList) => [...prevList, inventoryDetails]);
		setInventoryDetails({
			itemName: "",
			quantity: 0,
			minQuantity: 0,
		});
		setSubmitDisabled(false);
	};

	const handleNewInventoryRequest = () => {
		// Add logic to handle the submission of all items
		console.log("Inventory items submitted:", itemList);
		// You can send this data to your backend or perform further actions
	};

	const handleChange = (event) => {
		const { id, value } = event.target;
		setInventoryDetails((prevDetails) => ({
			...prevDetails,
			[id]: value,
		}));
	};

	return (
		<div className='container'>
			<form className='py-2 d-flex flex-column'>
				<h4 className='my-1'>Add Inventory Item :</h4>

				<div className='d-flex justify-content-between flex-wrap mb-3'>
					<div className='d-flex me-3 mb-3'>
						<label
							htmlFor='itemName'
							className='form-label align-self-center h6'
						>
							Item Name:
						</label>
						<input
							type='text'
							className='form-control ms-4'
							id='itemName'
							value={inventoryDetails.itemName}
							onChange={handleChange}
						/>
					</div>
					<div className='d-flex me-3 mb-3'>
						<label
							htmlFor='quantity'
							className='form-label align-self-center h6'
						>
							Quantity:
						</label>
						<input
							type='number'
							className='form-control ms-4'
							id='quantity'
							value={inventoryDetails.quantity}
							onChange={handleChange}
						/>
					</div>
				</div>

				<div className='d-flex mb-3'>
					<label
						htmlFor='minQuantity'
						className='form-label align-self-center h6'
					>
						Minimum Quantity:
					</label>
					<input
						type='number'
						className='form-control mx-2'
						id='minQuantity'
						value={inventoryDetails.minQuantity}
						onChange={handleChange}
					/>
				</div>

				<button
					className='btn btn-outline-success me-2 align-self-center'
					style={{ width: "10rem" }}
					onClick={handleAddItem}
					type='button'
				>
					Add
				</button>
			</form>

			<div className='mt-4'>
				<h5>Added Inventory Items:</h5>
				<table className='table'>
					<thead>
						<tr>
							<th>Item Name</th>
							<th>Quantity</th>
							<th>Minimum Quantity</th>
						</tr>
					</thead>
					<tbody>
						{itemList.map((item, index) => (
							<tr key={index}>
								<td>{item.itemName}</td>
								<td>{item.quantity}</td>
								<td>{item.minQuantity}</td>
							</tr>
						))}
					</tbody>
				</table>

				<button
					className='btn btn-primary me-2'
					onClick={handleNewInventoryRequest}
					type='button'
					disabled={isSubmitDisabled}
				>
					Submit
				</button>
				<Link
					to={"/Wards/Inventory"}
					className='btn btn-secondary'
					role='button'
				>
					Cancel
				</Link>
			</div>
		</div>
	);
};

export default Addstudent;
