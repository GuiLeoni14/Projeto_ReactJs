import { useState } from 'react'
function Form(){
    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(`Usuario ${name}, senha ${password}`)
        console.log('usuario cadastrado')
    }
    const [name, setName] = useState()
    const [password, setpassword] = useState()
    return(
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>

                <label htmlFor="name">Nome:</label>
                <input 
                type="text" 
                name="nome" 
                id="name"
                onChange={(e) => setName(e.target.value)} 
                placeholder="Digite o seu nome" />

                <label htmlFor="password">Senha:</label>
                <input type="password" 
                name="password" 
                id="password" 
                onChange={(e) => setpassword(e.target.value)} 
                placeholder="Digite o seu nome" />
                
                <button type="sumbmit">Cadastrar</button>
            </form>
        </div>
    )
}

export default Form;