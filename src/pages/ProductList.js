import { Table as TablePlants } from "../components/TablePlants";
import { Table as TablePots } from "../components/TablePots";
import { Table as TableProducts } from "../components/TableProducts";
import { Table as TableTools } from "../components/TableTools";
import { Modal as ModalPlants } from "../components/ModalPlants";
import { Modal as ModalPots } from "../components/ModalPots";
import { Modal as ModalProducts } from "../components/ModalProducts";
import { Modal as ModalTools } from "../components/ModalTools";
import { useState, useCallback } from 'react';
import useFetch from "../components/useFetch";

const ProductList = () => {
	const Table = ({ row, setRows, name, TableComponent, type }) => {
		return (
			<>
				<TableComponent
					rows={row}
					deleteRow={(targetIndex) => handleDeleteRow(targetIndex, row, setRows, type)}
					editRow={(idx) => handleEditRow(idx, type)}
				/>
				<br />
				<button onClick={() => setModalOpen(true)}
					className="buttons"
					style={{ width: '130px', height: '40px', border: '2px white solid' }}>
					Dodaj {name}
				</button>
			</>);
	};

	const [toggle, setToggle] = useState({
		R: false,
		D: false,
		P: false,
		N: false
	});

	const [rowR, setRowR] = useState([
		{
			id: "100",
			name: "Monstera Deliciosa",
			price: "25.99",
			place: "Słonecznie",
			hum: "70%",
			height: "80cm",
			diam: "30cm",
			poison: "Nie",
			status: "dostępne",
		},
	]);
	const [rowD, setRowD] = useState([
		{
			id: "200",
			name: "Doniczka Marbela",
			price: "30.98",
			producent: "Lolita",
			color: "biały",
			material: "ceramika",
			diam: "15cm",
			status: "niedostępne",
		},
	]);
	const [rowP, setRowP] = useState([
		{
			id: "300",
			name: "Nawóz uniwersalny",
			price: "80.00",
			producent: "Tramua",
			capacity: "30000",
			planttype: "wszystkie",
			status: "brak danych",
		},
	]);
	const [rowN, setRowN] = useState([
		{
			id: "400",
			name: "Grabie 130cm",
			price: "60.59",
			producent: "Kartamo",
			status: "dostępne",
		},
	]);
	// useFetch('http://localhost:8080/api/product/plants', setRowR);
	// useFetch('http://localhost:8080/api/product/pots', setRowD);
	// useFetch('http://localhost:8080/api/product/cultiv_products', setRowP);
	// useFetch('http://localhost:8080/api/product/tools', setRowN);

	const [modalOpen, setModalOpen] = useState(false);
	const [rowToEdit, setRowToEdit] = useState(null);

	// HANDLE FUNCTIONS
	const handleClick = useCallback((type) => {
		setToggle((prevState) => ({
			...Object.fromEntries(Object.entries(prevState).map(([key, value]) => [key, key === type ? !value : false])),
		}));
		console.log(type === 'R' ? 'Rosliny' : type === 'D' ? 'Doniczki' : type === 'P' ? 'Produkty' : 'Narzedzia');
	}, []);

	const handleDeleteRow = (targetIndex, rows, setRows, type) => {
		// const IdToDelete = rows[targetIndex].id;

		// fetch(`http://localhost:8080/api/product/${type}/${IdToDelete}`, {
		//     method: 'DELETE'
		// })
		//     .then(response => {
		//         if (!response.ok) { throw new Error('Network response was not ok'); }
		//         return response.json();
		//     })
		//     .then(data => setRows(rows.filter((_, idx) => idx !== targetIndex)))
		//     .catch(error => console.error('Error fetching data:', error));
		setRows(rows.filter((_, idx) => idx !== targetIndex));
	};

	const handleEditRow = (idx, type) => {
		setRowToEdit(idx);
		setModalOpen(true);
		// const orderIdToUpdate = updatedRow.id;

		// fetch(`http://localhost:8080/api/product/${type}/${orderIdToUpdate}`, {
		//     method: 'PUT',
		//     headers: { 'Content-Type': 'application/json' },
		//     body: JSON.stringify(updatedRow)
		// })
		//     .then(response => {
		//         if (!response.ok) { throw new Error('Network response was not ok'); }
		//         return response.json();
		//     })
		//     .then(data => {
		//          setRowToEdit(idx);
		//          setModalOpen(true);
		//     })
		//     .catch(error => console.error('Error fetching data:', error));
	};

	const handleSubmit = (newRow, rows, setRows, type) => {
		// const requestOptions = {
		//     method: 'POST',
		//     headers: { 'Content-Type': 'application/json' },
		//     body: JSON.stringify(newRow)
		// };
		// fetch('http://localhost:8080/api/product/${type}/add', requestOptions)
		//     .then(response => response.json())
		//     .then(data => setRows([...rows, data]);)
		//     .catch(error => console.error('Wystąpił błąd podczas wysyłania danych:', error));
		rowToEdit === null
			? setRows([...rows, newRow])
			: setRows(
				rows.map((currRow, idx) => {
					if (idx !== rowToEdit) return currRow;
					return newRow;
				})
			);
	};


	return (
		<div className="product-list">

			<div className="box" style={{ maxWidth: '80%', padding: '0px' }}>
				<h1 style={{ letterSpacing: '10px', textAlign: 'center', transform: 'translateY(10px)' }}>Produkty</h1><br />
				<div className="multi-button">
					<button onClick={() => handleClick('R')} className='button-37'> Rośliny</button>
					<button onClick={() => handleClick('D')} className='button-37'> Doniczki</button>
					<button onClick={() => handleClick('P')} className='button-37'> Uprawa</button>
					<button onClick={() => handleClick('N')} className='button-37'> Narzędzia</button>
				</div></div>
			<br /><br />

			{toggle.R ? <Table row={rowR} setRows={setRowR} name={'Roślinę'} TableComponent={TablePlants} type={'plant'} /> : null}
			{toggle.D ? <Table row={rowD} setRows={setRowD} name={'Doniczkę'} TableComponent={TablePots} type={'pot'} /> : null}
			{toggle.P ? <Table row={rowP} setRows={setRowP} name={'Produkt'} TableComponent={TableProducts} type={'cultiv_product'} /> : null}
			{toggle.N ? <Table row={rowN} setRows={setRowN} name={'Narzędzie'} TableComponent={TableTools} type={'tool'} /> : null}

			{modalOpen && toggle.R && (
				<ModalPlants
					closeModal={() => {
						setModalOpen(false);
						setRowToEdit(null);
					}}
					onSubmit={(newRow) => handleSubmit(newRow, rowR, setRowR, 'plant')}
					defaultValue={rowToEdit !== null && rowR[rowToEdit]}
				/>
			)}
			{modalOpen && toggle.D && (
				<ModalPots
					closeModal={() => {
						setModalOpen(false);
						setRowToEdit(null);
					}}
					onSubmit={(newRow) => handleSubmit(newRow, rowD, setRowD, 'pot')}
					defaultValue={rowToEdit !== null && rowD[rowToEdit]}
				/>
			)}
			{modalOpen && toggle.P && (
				<ModalProducts
					closeModal={() => {
						setModalOpen(false);
						setRowToEdit(null);
					}}
					onSubmit={(newRow) => handleSubmit(newRow, rowP, setRowP, 'cultiv_product')}
					defaultValue={rowToEdit !== null && rowP[rowToEdit]}
				/>
			)}
			{modalOpen && toggle.N && (
				<ModalTools
					closeModal={() => {
						setModalOpen(false);
						setRowToEdit(null);
					}}
					onSubmit={(newRow) => handleSubmit(newRow, rowN, setRowN, 'tool')}
					defaultValue={rowToEdit !== null && rowN[rowToEdit]}
				/>
			)}
		</div>
	);
}

export default ProductList;