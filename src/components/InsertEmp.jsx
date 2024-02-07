import React from "react";

export default function InsertEmp({ onSubmit, handleChange, data, children }) {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="nom">Nom</label>
        <input
          type="text"
          name="nom"
          value={data.nom}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="prenom">Prenom</label>
        <input
          type="text"
          name="prenom"
          value={data.prenom}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
      </div>

      {children}

      <button type="submit">Enregistrer</button>
    </form>
  );
}
