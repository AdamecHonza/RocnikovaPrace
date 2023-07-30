import Card from "react-bootstrap/Card";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Cards() {
  const [concerts, setConcerts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/concert")
      .then((res) => res.json())
      .then((concerts) => {
        setConcerts(concerts.concerts);
      });
  }, []);

  return (
    <>
      {concerts.map((concerts) => (
        <Card className="card">
          <Card.Body>
            <Card.Title>{concerts.name}</Card.Title>
            <Card.Subtitle>
              Where: {concerts.street}, {concerts.postalCode}, {concerts.city}
            </Card.Subtitle>
            <Card.Subtitle>When: {concerts.date}</Card.Subtitle>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In
              laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel
              imperdiet sapien wisi sed libero. Praesent dapibus
            </Card.Text>
            <Link to="/ReservationPage">
              {" "}
              <Button variant="dark">Buy Tickets</Button>{" "}
            </Link>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}
