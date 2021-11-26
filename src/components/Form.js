function Form(){
    function cadastrarUsuario(e){
        e.preventDefault()
        console.log('usuario cadastrado')
    }

    return(
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <input type="text" placeholder="Digite o seu nome" />
                <button type="sumbmit">Cadastrar</button>
            </form>
        </div>
    )
}

export default Form;