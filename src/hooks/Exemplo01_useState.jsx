//Importar módulo React e o hook useState
import React, { useState } from "react";

export function Exemplo01_useState(){

    const [texto, setTexto] = useState('Hello World!');

    //Evento Click
    const evento = (e) => {
        setTexto(e.target.value);
    }

    return(
        <div>
            <input type="text" onChange={evento} />
            <h1>{texto}</h1>
        </div>
    )
}