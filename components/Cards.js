import style from '../styles/Cards.module.css';

function Cards() { 
    return (
        <>
            <article className={style.card}>
                <h2>Projet 1</h2>
                <p>description du projet 1</p>
            </article>
        </>
    );
}

export default Cards;