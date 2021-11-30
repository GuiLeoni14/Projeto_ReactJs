import style from "./Frase.module.scss"

function Frase(){
    return(
        <div className={style.fraseContainer}>
            <p className={style.fraseContent}>Esse é um componente com uma frase</p>
        </div>
    )
}

export default Frase