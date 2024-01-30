import React, { useState } from "react";

import "./Modal.css";

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  
  const [formState, setFormState] = useState(
    defaultValue || {
      // TUTAJ
      name: "",
      surname: "",
      age: "",
      mail: "example@page.com",
      tel: "",
      salary: "0.0",
      pos: "none", 
      //status: "live",
    }
  );
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    // TUTAJ
    if (formState.name && formState.surname && formState.mail && formState.tel && formState.salary && formState.pos) {
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
            <label htmlFor="page">Imie</label>
            <input 
              name="name" 
              onChange={handleChange} 
              value={formState.name} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Nazwisko</label>
            <input
              name="surname"
              onChange={handleChange}
              value={formState.surname}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Wiek</label>
            <input
              name="age"
              onChange={handleChange}
              value={formState.age}
            />
          </div>
          <div className="form-group">
            <label htmlFor="page">E-mail</label>
            <input 
              name="mail" 
              onChange={handleChange} 
              value={formState.mail} />
          </div>
          <div className="form-group">
            <label htmlFor="page">Telefon</label>
            <input 
              name="tel" 
              onChange={handleChange} 
              value={formState.tel} />
          </div>
          <div className="form-group">
            <label htmlFor="page">Wynagrodzenie</label>
            <input 
              name="salary" 
              onChange={handleChange} 
              value={formState.salary} />
          </div>
          <div className="form-group">
            <label htmlFor="page">Stanowisko</label>
            <input 
              name="pos" 
              onChange={handleChange} 
              value={formState.pos} />
          </div>
          {/* <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              name="status"
              onChange={handleChange}
              value={formState.status}
            >
              <option value="live">Live</option>
              <option value="draft">Draft</option>
              <option value="error">Error</option>
            </select>
          </div> */}
          {errors && <div className="error">{`Please include: ${errors}`}</div>}
          <button type="submit" className="buttons" onClick={handleSubmit} style={{width: '100px', height: '30px'}}>
            Dodaj
          </button>
        </form>
      </div>
    </div>
  );
};
