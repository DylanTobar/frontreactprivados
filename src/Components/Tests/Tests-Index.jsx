import { useState } from "react"
import { testsTable } from "../Tables"
import DataTable from "react-data-table-component"

import { Link } from "react-router-dom"

const columns = [
    {
        name: "Proyect Name",
        selector: row => row.proyectname,
        sortable: true
    },
    {
        name: "Title",
        selector: row => row.taskTitle,
        sortable: true
    },
    {
        name: "Case",
        selector: row => row.case,
        sortable: true
    },
    {
        name: "Made By",
        selector: row => row.madeBy,
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
        name: "Actions",
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

export default function Tests() {

    const [records, setRecords] = useState(testsTable);

    const handleChange = (e) => {
        let query = e.target.value;
        const newrecords = testsTable.filter((item) => item.proyectname.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
        setRecords(newrecords);
    };

    const handleChange2 = (e) => {
        let query = e.target.value;
        const newrecords = testsTable.filter((item) => item.madeBy.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
        setRecords(newrecords);
    };
    const handleChange3 = (e) => {
        let query = e.target.value;
        const newrecords = testsTable.filter((item) => item.status.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
        setRecords(newrecords);
    };
    return (

        <div className="tables">
            <div className="titles">Tests</div>
            <div className="search">
                <h2></h2>
                <Link to='/NewTest'>
                    <button className="new Btn">New Test</button>
                </Link>
                <input type="text" placeholder="Filtrar por Proyecto" onChange={handleChange} />
                <input type="text" placeholder="Filtrar por Creador" onChange={handleChange2} />
                <input type="text" placeholder="Filtrar por Satus" onChange={handleChange3} />
            </div>
            <DataTable columns={columns} data={records} customStyles={customStyles} pagination />
        </div>
    );

}