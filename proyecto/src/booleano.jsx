import {useState} from "react";

function Booleano(){
    const[booleano, setbooleano] = useState(true);

    let colorTexto;
    let mensaje;

    if(booleano== true){
        colorTexto = "blue";
        mensaje = "El booleano es Verdadero";

    }else{
        colorTexto = "red";
        mensaje = "El booleano es Falso"
    }

    return(
        <div>
            <h3 style={{color: colorTexto}}>{mensaje}</h3>
            <button onClick={()=>setbooleano(!booleano)}>
                Cambiar booleno

            </button>
        </div>
    );
}

export default Booleano;