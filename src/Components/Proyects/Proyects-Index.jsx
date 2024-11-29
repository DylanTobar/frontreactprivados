import { useState } from "react"
import { proyectsTable } from "../Tables"
import DataTable from "react-data-table-component"

import { Link } from "react-router-dom"

const columns = [
    {
        name: "Proyect Name",
        selector: row => row.proyectname,
        sortable: true
    },
    {
        name: "Client",
        selector: row => row.client,
        sortable: true
    },
    {
        name: "Start Date",
        selector: row => row.startdate,
        sortable: true
    },
    {
        name: "Status",
        selector: row => row.status,
        sortable: true
    },
    {
        name: "Tasks",
        selector: row => row.action
    },
]

const customStyles = {
    headCells: {
        style: {
            backgroundColor: "black",
            color: "white",
            fontSize: "17px",
            fontWeight: "bolder"
        }
    }
}

export default function Proyects() {

    const [records, setRecords] = useState(proyectsTable);

    const handleChange = (e) => {
        let query = e.target.value;
        const newrecords = proyectsTable.filter((item) => item.proyectname.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
        setRecords(newrecords);
    };

    const handleChange2 = (e) => {
        let query = e.target.value;
        const newrecords = proyectsTable.filter((item) => item.client.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
        setRecords(newrecords);
    };
    const handleChange3 = (e) => {
        let query = e.target.value;
        const newrecords = proyectsTable.filter((item) => item.status.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
        setRecords(newrecords);
    };
    return (

        <div className="tables">
            <div className="titles">Proyects</div>
            <div className="search">
                <h2></h2>
                <Link to='/NewProyect'>
                    <button className="new Btn">New Proyect</button>
                </Link>
                <input type="text" placeholder="Filtrar por Proyecto" onChange={handleChange} />
                <input type="text" placeholder="Filtrar por Cliente" onChange={handleChange2} />
                <input type="text" placeholder="Filtrar por Satus" onChange={handleChange3} />
            </div>
            <DataTable columns={columns} data={records} customStyles={customStyles} pagination />
        </div>
    );

}