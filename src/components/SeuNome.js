import { useState } from "react";

function SeuNome({setNome}){
    return(
        <input type="text" placeholder="digite seu nome" onChange={(e) => setNome(e.target.value)} />
    )
}
export default SeuNome;