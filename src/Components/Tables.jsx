
import { Link } from "react-router-dom"

export const proyectsTable = [
    {
        id: 1,
        proyectname: "seminario",
        client: "dylan",
        startdate: "1998",
        status: "Creado",
        action: <div>
            <button className="table Btn"> Add</button>
            <button className="table Btn"> View</button>
        </div>
    },
    {
        id: 1,
        proyectname: "prueba",
        client: "dylan",
        startdate: "1998",
        status: "cancelado",
        action: <div>
            <button className="table Btn"> Add</button>
            <button className="table Btn"> View</button>
        </div>
    }, {
        id: 1,
        proyectname: "examen",
        client: "juan",
        startdate: "1998",
        status: "Creado",
        action: <div>
            <Link to='/NewTask'>
                <button className="table Btn"> Add</button>
            </Link>
            <Link to='/Tasks'>
                <button className="table Btn"> View</button>
            </Link>
        </div>
    },

]

export const tasksTable = [
    {
        id: 1,
        proyectname: "examen",
        title: "tarea 1",
        assignedTo: "juan",
        startdate: "1998",
        status: "Creado",
        action: <div>
            <Link to='/Welcome'>
                <button className="table Btn"> Test</button>
            </Link>
            <Link to='/Welcome'>
                <button className="table Btn"> View Task</button>
            </Link>
        </div>
    },
    {
        id: 1,
        proyectname: "proyecto",
        title: "tarea 2",
        assignedTo: "dylan",
        startdate: "1998",
        status: "Creado",
        action: <div>
            <Link to='/Welcome'>
                <button className="table Btn">Test</button>
            </Link>
            <Link to='/Welcome'>
                <button className="table Btn"> View Task</button>
            </Link>
        </div>
    },

]

export const testsTable = [
    {
        id: 1,
        proyectname: "examen",
        taskTitle: "tarea 1",
        case:"1",
        madeBy: "juan",
        startdate: "1998",
        status: "Creado",
        action: <div>
            <Link to='/NewTest'>
                <button className="table Btn"> View</button>
            </Link>
        </div>
    },
    {
        id: 1,
        proyectname: "examen",
        taskTitle: "tarea 1",
        case:"2",
        madeBy: "juan",
        startdate: "1998",
        status: "Creado",
        action: <div>
            <Link to='/NewTest'>
                <button className="table Btn"> View</button>
            </Link>
        </div>
    },
]

export const defectsTable = [
    {
        id: 1,
        proyectname: "examen",
        type: "tarea 1",
        madeBy:"Dylan",
        assignedTo: "juan",
        startdate: "1998",
        status: "Creado",
        action: <div>
            <Link to='/NewDefect'>
                <button className="table Btn"> View</button>
            </Link>
        </div>
    },
    {
        id: 1,
        proyectname: "examen",
        type: "tarea 1",
        madeBy:"Dylan",
        assignedTo: "juan",
        startdate: "1998",
        status: "Creado",
        action: <div>
            <Link to='/NewDefect'>
                <button className="table Btn"> View</button>
            </Link>
        </div>
    },
]