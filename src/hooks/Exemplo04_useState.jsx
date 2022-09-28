import React, {useState} from "react";

export function Exemplo04_useState(){

    //Modelo (JSON)
    const modelo ={nome: "", email: '',cidade: ''}

    //useState
    const [formulario, setFormulario] = useState(modelo);

    //Evento
    const evento = (e) =>{
        let nome = e.target.name;
        let valor = e.target.value;

        setFormulario({...formulario, [nome]:valor});
    } 

    return(
        <>
         <h1>Trabalhando com useState e JSON</h1>
         <input type="text" name="nome" placeholder="Informe seu nome" onChange={evento} />
         <br/>
         <input type="text" name="email" placeholder="Informe seu email" onChange={evento} />
         <br/>
         <input type="text" name="cidade" placeholder="Informe sua cidade" onChange={evento}/>

            <p>{formulario.nome}</p>
            <p>{formulario.email}</p>
            <p>{formulario.cidade}</p>
            <h3>Estutura do JSON utilizada</h3>
            <p>{JSON.stringify(formulario)}</p>
        </>
    )
}