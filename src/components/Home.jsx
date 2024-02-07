import { useState, useEffect } from "react";
import axios from "axios";
import DisplayData from "./DisplayData";
import { Outlet } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fechData();
  }, []);

  const fechData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/employee");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching hours:", error);
    }
  };

  return (
    <table>
      <thead>
        <th>Nom</th>
        <th>Prenom</th>
        <th>email</th>
        <th>heure debut</th>
        <th>heure de fin</th>
        <th>temps restant</th>
      </thead>
      <tbody>
        {data.map((item, index) => {
          return <DisplayData data={item} key={index} />;
        })}
      </tbody>

      <Outlet />
    </table>
  );
}
