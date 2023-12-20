import {Button, Table} from "react-bootstrap";
import {useEffect, useState} from "react";

const apiUrl = process.env.REACT_APP_API_HOST;

interface ParkSlot {
    _id: number;
    id: string;
    firstName: string;
    lastName: string;
    priceForOneHour: number;
    createdAt: Date;
}

function ListParkSlot() {
    const [parkSlots, setParkSlots] = useState<ParkSlot[]>([]);

    useEffect(() => {
        const fetchData = () => {
            fetch(`${apiUrl}/parks`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('La requête n\'a pas abouti');
                    }
                    return response.json();
                })
                .then((data) => {
                    setParkSlots(data);
                })
                .catch((error) => {
                    console.error('Erreur lors de la récupération des ParkSlots :', error);
                });
        };

        fetchData();
    }, []);


    return (
        <Table striped bordered>
            <thead>
            <tr>
                <th>Id</th>
                <th>Prénom</th>
                <th>Nom</th>
                <th>Prix pour une heure</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {parkSlots.map((parkSlot) => (
                <tr key={parkSlot.id}>
                    <td>{parkSlot.id}</td>
                    <td>{parkSlot.firstName}</td>
                    <td>{parkSlot.lastName}</td>
                    <td>{parkSlot.priceForOneHour}</td>
                    <td><Button>Supprimer</Button></td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
}

export default ListParkSlot;
