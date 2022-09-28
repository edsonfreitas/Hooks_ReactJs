//Exemplo sem useContext
import  React from 'react'

//Componente  Principal
 function Principal(){

    let frase = "Enviando informações";

    return(
        <Camada1 frase={frase}/>
    )
}

//Componente Camada 1
    function Camada1({frase}){
        return(
            <div style={{backgroundColor:'red', width:'500px', height:'500px', display:'inline-block'}}>
                <Camada2 frase={frase} />
            </div>
        )
}

//Componente Camada2
function Camada2({frase}){
    return(
        <div style={{backgroundColor:'yellow', width:'400px', height:'400px', margin:'50px', display:'inline-block'}}>
            <Camada3  frase={frase}/>
        </div>
    )
}

//Componente Camada2
function Camada3({frase}){
    return(
        <div style={{backgroundColor:'green', width:'300px', height:'300px', margin:'50px'}}>
            <p>{frase}</p>
        </div>
    )
}

export default Principal;