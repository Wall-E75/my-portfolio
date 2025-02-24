import style from '../styles/Cards.module.css';
import Link from 'next/link';
import Image from 'next/image';

function Cards(props) { 
    return (
        <>
            <article className={style.card}>
                <Link href={props.link}>
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
                </Link>
                <Link href={props.link}>
                    <div className={style.cardText}>
                        <h2>{props.title}</h2>
                        <p>{props.description}</p>
                    </div>
                </Link>
            </article>
        </>
    );
}

export default Cards;