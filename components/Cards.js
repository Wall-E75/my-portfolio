import style from '../styles/Cards.module.css';
import Image from 'next/image';

function Cards(props) { 
    return (
        <>
            <article className={style.card}>
                <div className={style.imageContainer}>
                    <Image
                        className={style.cardImage} 
                        src={props.image} 
                        alt={props.alt} 
                        width={500} 
                        height={400}
                        style={{borderRadius: '10px 10px 0 0', width: '100%', height: 'auto'}} 
                    />
                </div>
                <div className={style.cardText}>
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                </div>
            </article>
        </>
    );
}

export default Cards;