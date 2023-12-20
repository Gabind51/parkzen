import FormCreateParkSlot from "../components/ParkSlot/FormCreateParkSlot";
import ListParkSlot from "../components/ParkSlot/ListParkSlot";
import Main from "../layouts/Main";

function Parking() {
  return (
    <Main>
      <h1>Parking</h1>
      <h2 className="mt-5">Formulaire de création d'une place de parking</h2>
      <FormCreateParkSlot />

      <h2 className="mt-5">Liste de toutes les places de parking</h2>
      <ListParkSlot />
    </Main>
  );
}

export default Parking;
