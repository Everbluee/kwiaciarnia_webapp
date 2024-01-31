import { Table } from "../components/TableEmployee";
import { Modal } from "../components/ModalEmployee";
import { useState } from "react";
import useFetch from "../components/useFetch";

const Employees = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [rows, setRows] = useState([
        //TUTAJ
        {
            id: "1",
            name: "Kamila",
            surname: "Chmura",
            age: "21",
            mail: "example@gmail.com",
            tel: "123456789",
            salary: "4000.0",
            pos: "Sekretarka",
        },
    ]);
    //useFetch('http://localhost:8080/api/person/employees', setRows);
    const [rowToEdit, setRowToEdit] = useState(null);

    const handleDeleteRow = (targetIndex) => {
        // const orderIdToDelete = rows[targetIndex].id;
    
        // fetch(`http://localhost:8080/api/person/employee/${orderIdToDelete}`, {
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
    
        // fetch('http://localhost:8080/api/person/employee/add', requestOptions)
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