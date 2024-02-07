import React from "react";

export default function HeureService({ handleChange, onSubmit, formData }) {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="heureDebut">Heure de debut</label>
          <input
            type="time"
            name="heureDebut"
            onChange={handleChange}
            value={formData.HeureDebut}
          />
        </div>

        <div>
          <label htmlFor="heurefin">Heure de fin</label>
          <input
            type="time"
            name="heureFin"
            onChange={handleChange}
            value={formData.heureFin}
          />
        </div>
      </form>
    </div>
  );
}
