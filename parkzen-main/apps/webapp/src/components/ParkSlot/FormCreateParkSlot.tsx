import { useState } from "react";
import createParkSlot from "../../api/createParkSlot";
import { Button, Form } from "react-bootstrap";

function FormCreateParkSlot() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [priceForOneHour, setPriceForOneHour] = useState(3);

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    createParkSlot({ firstName, lastName, priceForOneHour })
      .then(() => console.log("créé"))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <Form onSubmit={submitForm}>
        <Form.Group className="mb-3" controlId="FirstName">
          <Form.Label>Prénom</Form.Label>
          <Form.Control
            type="text"
            placeholder="Votre Prénom"
            value={firstName}
            onInput={(event) => setFirstName(event.currentTarget.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="LastName">
          <Form.Label>Nom</Form.Label>
          <Form.Control
            type="text"
            placeholder="Votre Nom"
            value={lastName}
            onInput={(event) => setLastName(event.currentTarget.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="PriceForOneHour">
          <Form.Label>Prix pour une heure</Form.Label>
          <Form.Control
            type="number"
            placeholder="Le Prix"
            step="0.01"
            value={priceForOneHour}
            onInput={(event) => setPriceForOneHour(parseFloat(event.currentTarget.value))}
          />
        </Form.Group>
        <Button type="submit">Créer</Button>
      </Form>
    </>
  );
}

export default FormCreateParkSlot;
