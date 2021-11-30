function OutraLista({itens}){
    return(
        <>
            <h3>Listas de coisas boas</h3>
            {itens.length > 0 ? (
                itens.map((item, index) => (
                    <p key={index}>{item}</p>
                ))) : (
                    <p>Nao existe itens</p>
                )
            }
        </>
    )
}

export default OutraLista;