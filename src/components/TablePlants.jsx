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
            <th style={{width: '100%'}}>Nazwa</th>
            <th>Koszt</th>
            <th>Stanowisko</th>
            <th>Wilgotność</th>
            <th>Wysokość</th>
            <th>Średnica</th>
            <th>Czy trująca?</th>
            <th>Status</th>
            <th> . . . </th>
          </tr>
        </thead>
        { rows ? <tbody>
          {rows.map((row, idx) => {
            const statusText =
                row.status.charAt(0).toUpperCase() + row.status.slice(1);
            const poisonText =
                row.poison.charAt(0).toUpperCase() + row.poison.slice(1);

            return (
              <tr key={idx}>

                <td>{row.id}</td>
                <td style={{width: '100%'}}>{row.name}</td>
                <td>{row.price}</td>
                <td>{row.place}</td>
                <td>{row.hum}</td>
                <td>{row.height}</td>
                <td>{row.diam}</td>

                <td>
                  <span className={`label label-${row.poison}`}>
                    {poisonText}
                  </span>
                </td> 
                
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
