import { useState } from "react";

function Teste(){
    const [texto, setTexto] = useState('aopa');
    return(
        <>
            <input type="text" placeholder="testando" defaultValue={texto} onChange={(event) =>  setTexto( event.target.value) } />
            {texto}
        </>
    )
}

export default Teste;
