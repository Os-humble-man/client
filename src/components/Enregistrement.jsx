import React, { useEffect, useState } from "react";
import InsertEmp from "./InsertEmp";
import DropDownEmployes from "./DropDownEmployes";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Enregistrement() {
  const [empInfo, setEmpInfo] = useState({
    nom: "",
    prenom: "",
    email: "",
    heureId: "",
  });

  const [employeHeure, setEmployeHeure] = useState([]);

  useEffect(() => {
    fetchHours();
  }, []);

  const fetchHours = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/employee/heure"
      );
      setEmployeHeure(response.data);
    } catch (error) {
      console.error("Error fetching hours:", error);
    }
  };
  console.log(employeHeure);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmpInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelect = (e) => {
    const { value } = e.target;
    setEmpInfo({ ...empInfo, heureId: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/employee", empInfo);
      setEmpInfo({
        nom: "",
        prenom: "",
        email: "",
        heureId: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    window.location.reload();
  };

  return (
    <div>
      <InsertEmp handleChange={handleChange} data={empInfo} onSubmit={onSubmit}>
        <DropDownEmployes handleChange={handleSelect} data={employeHeure} />
      </InsertEmp>
    </div>
  );
}
