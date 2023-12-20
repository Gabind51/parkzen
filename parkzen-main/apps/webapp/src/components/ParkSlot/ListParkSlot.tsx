import { Table } from "react-bootstrap";

function ListParkSlot() {
  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>Prénom</th>
          <th>Nom</th>
          <th>Prix pour une heure</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Alexis</td>
          <td>Bonal</td>
          <td>23</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default ListParkSlot;
