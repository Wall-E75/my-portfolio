import style from '@styles/Cards.module.css';
import Link from 'next/link';
import Image from 'next/image';

function Cards(props) { 
    if(props.image2) {

    }
    return (
        <>
            <article className={style.card} title={props.title}>
                <Link href={props.link}>
                    <div className={style.imageContainer}>
                        <Image
                            className={style.cardImage} 
                            src={props.image} 
                            alt={props.alt} 
                            width={500} 
                            height={400}
                            style={{borderRadius: '10px'}} 
                            priority={props.priority}
                        />
                        {props.image2 && 
                            <Image
                                className={style.cardImage}
                                src={props.image2}
                                alt={props.alt2}
                                width={500}
                                height={400}
                                priority={props.priority}
                            />
                                
                        }
                    </div>
                </Link>
                {/* <Link href={props.link}>
                    <div className={style.cardText}>
                        <h2>{props.title}</h2>
                        <p>{props.description}</p>
                    </div>
                </Link> */}
            </article>
        </>
    );
}

export default Cards;