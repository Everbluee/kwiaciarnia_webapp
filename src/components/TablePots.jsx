import React from "react";

import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

import "./Table.css";

export const Table = ({ rows, deleteRow, editRow }) => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            {/* TUTAJ */}
            <th>ID Produktu</th>
            <th style={{width: '50%'}}>Nazwa</th>
            <th>Koszt</th>
            <th style={{width: '50%'}}>Producent</th>
            <th>Kolor</th>
            <th>Materiał</th>
            <th>Średnica</th>
            <th>Status</th>
            <th> . . . </th>
          </tr>
        </thead>
        { rows ? <tbody>
          {rows.map((row, idx) => {
            const statusText =
                row.status.charAt(0).toUpperCase() + row.status.slice(1);

            return (
              <tr key={idx}>

                <td>{row.id}</td>
                <td style={{width: '50%'}}>{row.name}</td>
                <td>{row.price}</td>
                <td style={{width: '50%'}}>{row.producent}</td>
                <td>{row.color}</td>
                <td>{row.material}</td>
                <td>{row.diam}</td>

                <td>
                  <span className={`label label-${row.status}`}>
                    {statusText}
                  </span>
                </td> 

                <td className="fit">
                  <span className="actions">
                    <BsFillTrashFill
                      className="delete-btn"
                      onClick={() => deleteRow(idx)}
                    />
                    <BsFillPencilFill
                      className="edit-btn"
                      onClick={() => editRow(idx)}
                    />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody> : null}
      </table>
    </div>
  );
};
