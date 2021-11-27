import Button from "./evento/Button";


function Eventos (){

    function meuEvento(){
        console.log("evento ativado com sucesso")
    }

    function segundoEvento(){
        console.log('ativando segundo evento')
    }


    return (
        <>
            <p>Clique para disparar um evento</p>
            <Button event={meuEvento} text="primeiro evento"/>
            <Button event={segundoEvento} text="segundo evento"/>
        </>
    )
}

export default Eventos;