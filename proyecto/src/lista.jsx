import { useState} from "react";

function Lista() {
    const [nombres, setNombres] = useState(["Ana","Luis","Carlos,","Daniel","Gabriel"]); // Estado con array

    return(
        <div>
            <h3>Lista de Nombres:</h3>
            <ul>
                {nombres.map((nombre, index) =>(
                    <li key={index}>{nombre}</li>
                ))}
                <button onClick={() => setNombres(nombres.slice(0, -1))}>
                    Fliminar ultimo
                </button>
            </ul>
        </div>
    );
}

export default Lista;