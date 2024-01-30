import { Table as TablePlants} from "../components/TablePlants";
import { Table as TablePots} from "../components/TablePots";
import { Table as TableProducts} from "../components/TableProducts";
import { Table as TableTools} from "../components/TableTools";
import { Modal } from "../components/ModalClient";
import { useState, useCallback } from 'react';
 
const ProductList = () => {
    const [toggle, setToggle] = useState({ 
        R: false, 
        D: false, 
        P: false,
        N: false 
    });

    const handleClick = useCallback((type) => {
        setToggle((prevState) => ({
            ...Object.fromEntries(Object.entries(prevState).map(([key, value]) => [key, key === type ? !value : false])),
        }));
        console.log(type === 'R' ? 'Rosliny' : type === 'D' ? 'Doniczki' : type === 'P' ? 'Produkty' : 'Narzedzia');
    }, []);

    const [modalOpen, setModalOpen] = useState(false);
    const [rows, setRows] = useState(null);
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

    const Table = ({ name, TableComponent }) => {
        return (
            <>
                <TableComponent rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} /><br />
                <button onClick={() => setModalOpen(true)}
                    className="buttons"
                    style={{ width: '130px', height: '40px', border: '2px white solid' }}>
                    Dodaj {name}
                </button>
            </>
        );
    };

    return (  
        <div className="product-list">
            
            <div className="box" style={{maxWidth: '80%'}}>
                <h1 style={{letterSpacing: '10px', textAlign: 'center', transform: 'translateY(10px)'}}>Produkty</h1><br />
            <div className="multi-button">
                <button onClick={() => handleClick('R')} className='button-37'> Rośliny</button>
                <button onClick={() => handleClick('D')} className='button-37'> Doniczki</button>
                <button onClick={() => handleClick('P')} className='button-37'> Uprawa</button>
                <button onClick={() => handleClick('N')} className='button-37'> Narzędzia</button>
            </div></div>
            <br /><br />

            {toggle.R ? <Table name={'Roślinę'} TableComponent={TablePlants} /> : null}
            {toggle.D ? <Table name={'Doniczkę'} TableComponent={TablePots}/> : null}
            {toggle.P ? <Table name={'Produkt'} TableComponent={TableProducts}/> : null}
            {toggle.N ? <Table name={'Narzędzie'} TableComponent={TableTools}/> : null}
        
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
 
export default ProductList;