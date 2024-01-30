import { Table } from "../components/TableOrders";
import { Modal } from "../components/ModalOrders";
import { useState } from "react";

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
    const [rowToEdit, setRowToEdit] = useState(null);

    const handleDeleteRow = (targetIndex) => {
        setRows(rows.filter((_, idx) => idx !== targetIndex));
    };

    const handleEditRow = (idx) => {
        setRowToEdit(idx);

        setModalOpen(true);
    };

    const handleSubmit = (newRow) => {
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