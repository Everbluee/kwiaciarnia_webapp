import { Table } from "../components/TableOrders";
import { Modal } from "../components/ModalOrders";
import { useState } from "react";
import useFetch from "../components/useFetch";

const Orders = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [rows, setRows] = useState([
        //TUTAJ
        {
            id_zam: "1234",
            data_zam: "2024-01-23",
            data_wys: "2024-01-23",
            status: "przyjęte do realizacji",
            id_klienta: "3",
            koszt: "345.80",
        },
    ]);
    //useFetch('http://localhost:8080/api/order/all', setRows);
    const [rowToEdit, setRowToEdit] = useState(null);

    const handleDeleteRow = (targetIndex) => {
        // const orderIdToDelete = rows[targetIndex].id_zam;
    
        // fetch(`http://localhost:8080/api/order/${orderIdToDelete}`, {
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

    const handleEditRow = (idx) => {
        setRowToEdit(idx);
        setModalOpen(true);
    };

    const handleSubmit = (newRow) => {
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(newRow)
        // };
    
        // fetch('http://localhost:8080/api/order/add', requestOptions)
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
        <div className="clients">
            <h1 style={{letterSpacing: '10px', textAlign: 'center'}} className="box">Zamówienia</h1><br />
            <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
            <br />
            <button onClick={() => setModalOpen(true)}
                className="buttons"
                style={{ width: '120px', height: '45px', border: '2px white solid'}}>
                Dodaj Zamówienie 
            </button>

            {modalOpen && (
                <Modal
                    closeModal={() => {
                        setModalOpen(false);
                        setRowToEdit(null);
                    }}
                    onSubmit={handleSubmit}
                    defaultValue={rowToEdit !== null && rows[rowToEdit]}
                />
            )}
        </div>
    );
}

export default Orders;