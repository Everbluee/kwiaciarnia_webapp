import React, { useState } from "react";
import "./Modal.css";

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  
  const [formState, setFormState] = useState(
    defaultValue || {
      // TUTAJ
      id_zam: "",
      data_zam: "",
      data_wys: "",
      status: "przyjęte do realizacji",
      id_klienta: "",
      koszt: "0.0",
    }
  );
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    // TUTAJ
    if (formState.id_zam && formState.data_zam && formState.data_wys && formState.status && formState.id_klienta && formState.koszt) {
      setErrors("");
      return true;
    } 
    else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formState);

    closeModal();
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      {/* TUTAJ */}
      <div className="modal">
        <form>
          <div className="form-group">
            <label htmlFor="page">ID Zamówienia</label>
            <input 
              name="id_zam" 
              onChange={handleChange} 
              value={formState.id_zam} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Data zamówienia</label>
            <input
              type="date"
              name="data_zam"
              onChange={handleChange}
              value={formState.data_zam}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Data wysyłki</label>
            <input
              type="date"
              name="data_wys"
              onChange={handleChange}
              value={formState.data_wys}
            />
          </div>
          <div className="form-group">
            <label htmlFor="page">ID Klienta</label>
            <input 
              name="id_klienta" 
              onChange={handleChange} 
              value={formState.id_klienta} />
          </div>
          <div className="form-group">
            <label htmlFor="page">Koszt</label>
            <input 
              name="koszt" 
              onChange={handleChange} 
              value={formState.koszt} />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              name="status"
              onChange={handleChange}
              value={formState.status}
            >
              <option value="przyjęte do realizacji">Przyjęte do realizacji</option>
              <option value="gotowe do wysyłki">Gotowe do wysyłki</option>
              <option value="wysłane">Wysłane</option>
              <option value="dostarczone">Dostarczone</option>
            </select>
          </div>
          {errors && <div className="error">{`Please include: ${errors}`}</div>}
          <button type="submit" className="buttons" onClick={handleSubmit} style={{width: '100px', height: '30px'}}>
            Dodaj
          </button>
        </form>
      </div>
    </div>
  );
};
