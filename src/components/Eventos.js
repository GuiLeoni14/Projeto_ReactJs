function Eventos (){

    function meuEvento(){
        console.log("evento ativado")
    }

    return (
        <>
            <p>Clique para disparar um evento</p>
            <button onClick={meuEvento} >Ativar</button>
        </>
    )
}

export default Eventos;