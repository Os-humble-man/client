import React from "react";

export default function DropDownEmployes({ handleChange, data }) {
  return (
    <div>
      <select name="employeId" value={data.heureId} onChange={handleChange}>
        <option>Selectionner les heures</option>
        {data.map((item, index) => (
          <option key={item.id} value={item.id}>
            {item.heure_debut} - {item.heure_fin}
          </option>
        ))}
      </select>
    </div>
  );
}
