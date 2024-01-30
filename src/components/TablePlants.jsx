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
            <th>ID Zamówienia</th>
            <th>Data Zamówienia</th>
            <th>Data wysyłki</th>
            <th>ID Klienta</th>
            <th>Koszt</th>
            <th style={{width: '100%'}}>Status</th>
            <th> . . . </th>
          </tr>
        </thead>
        { rows ? <tbody>
          {rows.map((row, idx) => {
            const statusText =
                row.status.charAt(0).toUpperCase() + row.status.slice(1);

            return (
              <tr key={idx}>

                <td>{row.id_zam}</td>
                <td>{row.data_zam}</td>
                <td>{row.data_wys}</td>
                <td>{row.id_klienta}</td>
                <td>{row.koszt}</td>

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
