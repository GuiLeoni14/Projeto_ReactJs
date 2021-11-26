import Item from "./Item";
function List(){
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Fiat" ano_lancamento="{2009}" />
                <Item/>
            </ul>
        </>
    )
}

export default List;