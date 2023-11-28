import { useState, useEffect } from "react";
import { Destinations } from "../models/destination";
import styles from './destinations.module.scss';
import ClearIcon from '@mui/icons-material/Clear';
import { useNavigate } from "react-router";

export const DestinationsPage = () => {
  const [destinations, setDestinations] = useState<Destinations[]>([]);
  const [selectedDestinations, setSelectedDestinations] = useState<Destinations[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    // Llamar al endpoint creado en el backend
    fetch("http://127.0.0.1:5000/api/destinations")
      .then((response) => response.json())
      .then((data) => setDestinations(data));
  }, []);

  const handleSelectDestination = (destination: Destinations) => {
    setSelectedDestinations((prev) => {
      const ids = selectedDestinations.map((des) => des.id); // aqui se filtran los destinos, para no tener duplicados
      if (ids.includes(destination.id)) {
        return [...prev];
      }
      return [...prev, destination];
    });
  };


  const handleDeselectDestination = (destinationId: number) => {
    setSelectedDestinations((prev) => prev.filter((d) => d.id !== destinationId));
  };

  return (
    <div className={styles.destination}>
      <div className={styles.destination__list}>
      {destinations.map((destination) => (
        <div key={destination.id}>
          <h3>{destination.name}</h3>
          <button className={styles.destination__button} onClick={() => handleSelectDestination(destination)}>Select</button>
        </div>
      ))}
      </div>

      <div>
        <h2>Destinations Selected</h2>
        {selectedDestinations.map((destination) => (
          <div key={destination.id} className={styles.destination__selected}>
          <div>{destination.name}</div>
          <ClearIcon onClick={() => handleDeselectDestination(destination.id)}/>
          </div>
        ))}
      </div>
      <button className={styles.destination__button} onClick={() => navigate('/checkout')}>Go to checkout</button>
    </div>
  );
};
