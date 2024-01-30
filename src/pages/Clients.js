import { Table } from "../components/TableClient";
import { Modal } from "../components/ModalClient";
import { useState } from "react";

const Clients = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [rows, setRows] = useState([
        //TUTAJ
        {
            name: "Patryk",
            surname: "Kasztelan",
            age: "22",
            mail: "example@gmail.com",
            tel: "123456789",
            card: "1122334455667788",
            add: "Wrocław 50-500 ul. Rynek 420",
            regular: "Tak",
            //status: "live",
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
            <h1 style={{letterSpacing: '10px', textAlign: 'center'}} className="box">Klienci</h1><br />
            <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
            <br />
            <button onClick={() => setModalOpen(true)}
                className="buttons"
                style={{ width: '120px', height: '35px', border: '2px white solid'}}>
                Dodaj Klienta 
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

export default Clients;