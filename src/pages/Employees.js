import { Table } from "../components/TableEmployee";
import { Modal } from "../components/ModalEmployee";
import { useState } from "react";

const Employees = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [rows, setRows] = useState([
        //TUTAJ
        {
            name: "Kamila",
            surname: "Chmura",
            age: "21",
            mail: "example@gmail.com",
            tel: "123456789",
            salary: "4000.0",
            pos: "Sekretarka",
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
        <div className="employees">
            <h1 style={{letterSpacing: '10px', textAlign: 'center'}} className="box">Pracownicy</h1><br />
            <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
            <br />
            <button onClick={() => setModalOpen(true)}
                className="buttons"
                style={{ width: '120px', height: '45px', border: '2px white solid'}}>
                Dodaj Pracownika
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

export default Employees;