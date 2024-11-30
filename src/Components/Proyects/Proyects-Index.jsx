import { useState, useEffect } from "react"
import DataTable from "react-data-table-component"
import axios from 'axios';

import { Link } from "react-router-dom"



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



const Proyects = () => {
    const [proyectsTable, setProyectsTable] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get('http://localhost:4000/api/proyects/allproyects')
            .then((response) => {
                setProyectsTable(response.data.data);
                console.log(response.data.data, "Datos cargados");
            })
            .catch((error) => {
                console.error("Error al cargar los datos:", error);
            });
    }, []);
    useEffect(() => {
        setRecords(proyectsTable);
        setLoading(false)
    }, [proyectsTable]);
    const columns = [
        {
            name: "Proyect Name",
            selector: (row) => row.proyect_name,
            sortable: true
        },
        {
            name: "Client",
            selector: (row) => row.client_name,
            sortable: true
        },
        {
            name: "Start Date",
            selector: (row) => row.start_date,
            sortable: true
        },
        {
            name: "Status",
            selector: (row) => row.status,
            sortable: true
        },
        {
            name: "Task",
            selector: (row) => <div>
            <Link to='/NewTask'>
                <button className="table Btn"> Add</button>
            </Link>
            <Link to='/NewProyect'>
                <button className="table Btn"> View</button>
            </Link>
        </div>,
            sortable: true
        },

    ]

    const [records, setRecords] = useState(proyectsTable);

    const handleChange = (e) => {
        let query = e.target.value;
        const newrecords = proyectsTable.filter((item) => item.proyect_name.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
        setRecords(newrecords);
    };

    const handleChange2 = (e) => {
        let query = e.target.value;
        const newrecords = proyectsTable.filter((item) => item.client_name.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
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
export default Proyects;