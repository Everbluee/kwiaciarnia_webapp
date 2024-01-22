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
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Wiek</th>
            <th>E-mail</th>
            <th>Telefon</th>
            <th>Nr Karty</th>
            <th>Adres</th>
            <th style={{whiteSpace: 'nowrap'}}>Czy stały?</th>
            {/* <th>Status</th> */}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            const statusText =
              row.status.charAt(0).toUpperCase() + row.status.slice(1);

            return (
              <tr key={idx}>

                <td>{row.name}</td>
                <td>{row.surname}</td>
                <td>{row.age}</td>
                <td>{row.mail}</td>
                <td>{row.tel}</td>
                <td>{row.card}</td>
                <td style={{width: '100%'}}>{row.add}</td>
                <td>{row.regular}</td>

                {/* <td>
                  <span className={`label label-${row.status}`}>
                    {statusText}
                  </span>
                </td> */}

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
        </tbody>
      </table>
    </div>
  );
};
