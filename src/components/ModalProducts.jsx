import React, { useState } from "react";
import "./Modal.css";

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  
  const [formState, setFormState] = useState(
    defaultValue || {
      id: "",
      name: "",
      price: "0.0",
      producent: "",
      capacity: "",
      planttype: "",
      status: "Dostępny",
    }
  );
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    // TUTAJ
    if (formState.id && formState.name && formState.producent && formState.capacity && formState.planttype) {
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
            <label htmlFor="page">ID Produktu</label>
            <input 
              name="id" 
              onChange={handleChange} 
              value={formState.id} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Nazwa</label>
            <input
              name="name"
              onChange={handleChange}
              value={formState.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Koszt</label>
            <input
              name="price"
              onChange={handleChange}
              value={formState.price}
            />
          </div>
          <div className="form-group">
            <label htmlFor="page">Producent</label>
            <input
            name="producent"
            onChange={handleChange}
            value={formState.producent}
            />
          </div>
          <div className="form-group">
            <label htmlFor="page">Pojemność [ml]</label>
            <input 
              name="capacity" 
              onChange={handleChange} 
              value={formState.capacity} />
          </div>
          <div className="form-group">
            <label htmlFor="page">Typ Rośliny</label>
            <input 
              name="planttype" 
              onChange={handleChange} 
              value={formState.planttype} />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              name="status"
              onChange={handleChange}
              value={formState.status}
            >
              <option value="brak danych">Brak danych</option>
              <option value="dostępne">Dostępne</option>
              <option value="niedostępne">Niedostępne</option>
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
