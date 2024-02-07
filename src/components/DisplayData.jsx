import React from "react";
import moment from "moment";
import { Outlet } from "react-router-dom";

export default function DisplayData({ data }) {
  const { nom, prenom, email, heure_debut, heure_fin } = data;

  // Créer des chaînes de caractères au format "HH:mm:ss" à partir des valeurs récupérées de la base de données
  const heureDebutStr = heure_debut.toString();
  const heureFinStr = heure_fin.toString();

  // Utiliser les chaînes de caractères pour créer des objets Moment.js
  const heureDebutMoment = moment(heureDebutStr, "HH:mm:ss");
  const heureFinMoment = moment(heureFinStr, "HH:mm:ss");

  // Calculer la différence en heures entre les deux heures
  const differenceHeures = heureFinMoment.diff(heureDebutMoment, "hours");

  return (
    <tr>
      <td>{nom}</td>
      <td>{prenom}</td>
      <td>{email}</td>
      <td>{heureDebutMoment.format("HH:mm:ss")}</td>
      <td>{heureFinMoment.format("HH:mm:ss")}</td>
      <td>{differenceHeures}</td>
      <Outlet />
    </tr>
  );
}
