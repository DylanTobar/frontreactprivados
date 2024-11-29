import { useState } from "react"
import { defectsTable } from "../Tables"
import DataTable from "react-data-table-component"

import { Link } from "react-router-dom"

const columns = [
    {
        name: "Proyect Name",
        selector: row => row.proyectname,
        sortable: true
    },
    {
        name: "Type",
        selector: row => row.type,
        sortable: true
    },
    {
        name: "Made By",
        selector: row => row.madeBy,
        sortable: true
    },
    {
        name: "Assigned To",
        selector: row => row.assignedTo,
        sortable: true
    },
    {
        name: "Status",
        selector: row => row.status,
        sortable: true
    },
    {
        name: "View",
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

export default function Defects() {

    const [records, setRecords] = useState(defectsTable);

    const handleChange = (e) => {
        let query = e.target.value;
        const newrecords = defectsTable.filter((item) => item.proyectname.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
        setRecords(newrecords);
    };

    const handleChange2 = (e) => {
        let query = e.target.value;
        const newrecords = defectsTable.filter((item) => item.madeBy.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
        setRecords(newrecords);
    };
    const handleChange3 = (e) => {
        let query = e.target.value;
        const newrecords = defectsTable.filter((item) => item.assignedTo.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
        setRecords(newrecords);
    };
    return (

        <div className="tables">
            <div className="titles">Defects</div>
            <div className="search">
                <h2></h2>
                <Link to='/NewProyect'>
                    <button className="new Btn">New Defect</button>
                </Link>
                <input type="text" placeholder="Filtrar por Proyecto" onChange={handleChange} />
                <input type="text" placeholder="Filtrar por Creador" onChange={handleChange2} />
                <input type="text" placeholder="Filtrar por Asignación" onChange={handleChange3} />
            </div>
            <DataTable columns={columns} data={records} customStyles={customStyles} pagination />
        </div>
    );

}