import React, { useState } from "react";
import "./Modal.css";

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  
  const [formState, setFormState] = useState(
    defaultValue || {
      // TUTAJ
      id: "",
      name: "",
      price: "0.0",
      place: "Nasłonecznione",
      hum: "",
      height: "",
      diam: "",
      poison: "Nie",
      status: "Brak danych",
    }
  );
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    // TUTAJ
    if (formState.id && formState.name && formState.hum && formState.height && formState.diam) {
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
            <label htmlFor="page">Stanowisko</label>
              <select
              name="place"
              onChange={handleChange}
              value={formState.place}
            >
              <option value="sunny">Nasłonecznione</option>
              <option value="mid sunny">Lekko nasłonecznione</option>
              <option value="shadow">Zacienione</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="page">Wilgotność</label>
            <input 
              name="hum" 
              onChange={handleChange} 
              value={formState.hum} />
          </div>
          <div className="form-group">
            <label htmlFor="page">Wysokość</label>
            <input 
              name="height" 
              onChange={handleChange} 
              value={formState.height} />
          </div>
          <div className="form-group">
            <label htmlFor="page">Średnica</label>
            <input 
              name="diam" 
              onChange={handleChange} 
              value={formState.diam} />
          </div>
          <div className="form-group-group">
            <div className="form-group">
              <label htmlFor="status">Czy trująca?</label>
              <select
                name="poison"
                onChange={handleChange}
                value={formState.poison}
              >
                <option value="brak danych">Brak danych</option>
                <option value="tak">Tak</option>
                <option value="nie">Nie</option>
              </select>
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
