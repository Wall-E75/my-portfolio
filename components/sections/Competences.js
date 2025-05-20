import styles from '@styles/Competences.module.css';
import Image from 'next/image';
import Carousel from '../layouts/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHtml5,
    faCss3,
    faReact,
    faNodeJs,
    faGithub,
    faSquareJs,
    faJs
 } from '@fortawesome/free-brands-svg-icons';

// Icônes classiques (non-marques)
import { 
    faDatabase,
    faSquareCaretUp,
    faWrench // Icône pour "outils"
 } from '@fortawesome/free-solid-svg-icons';
function Competences() {
    const skillsData = [
        {
            title: 'Front-end',
            skills: [
                {
                    name:'JavaScript',
                    icon: faJs,
                }, 
                {
                    name: 'HTML5',
                    icon: faHtml5,
                }, 
                {
                    name: 'CSS3',
                    icon: faCss3,
                }, 
                {
                    name: 'React',
                    icon: faReact,
                },
                {
                    name: 'Next.js',
                    icon: faSquareCaretUp,
                },
                {
                    name: 'React-native',
                    icon: faSquareJs,
                },
                {
                    name: 'Tailwind',
                    icon: '/Tailwind_CSS_Logo.svg',
                }
            ]
        },
        {
            title: 'Back-end',
            skills: [
                {
                    name: 'Node.js',
                    icon: faNodeJs,
                },
                {
                    name: 'Express',
                    icon: faNodeJs,
                },
                {
                    name: 'RESTful API',
                    icon: faWrench,
                }
            ]
        },
        {
            title: 'Base de données',
            skills: [
                {
                    name: 'MongoDB',
                    icon: faDatabase,
                },
                {
                    name: 'Mongoose',
                    icon: faDatabase,
                }
            ]
        },
        {
            title: 'Outils',
            skills: [
                {
                    name: 'Git',
                    icon: faGithub,
                },
                {
                    name: 'GitHub',
                    icon: faGithub,
                },
                {
                    name: 'VSCode',
                    icon: faWrench,
                },
                {
                    name: 'Postman',
                    icon: faWrench,
                },
                {
                    name: 'ThunderClient',
                    icon: faWrench,
                },
                {
                    name: 'Expo',
                    icon: faWrench,
                }
            ]
        },
        {
            title: 'Autres compétences',
            skills: [
                {
                    name: 'Responsive design',
                    icon: faWrench,
                },
                {
                    name: 'SEO',
                    icon: faWrench,
                },
                {
                    name: 'Accessibilité',
                    icon: faWrench,
                },
                {
                    name: 'Web sémantique',
                    icon: faWrench,
                },
                {
                    name: 'Performance web',
                    icon: faWrench,
                },
                {
                    name: 'Gestion de projet',
                    icon: faWrench,
                }
            ]
        }
    ];
   
    const skills = skillsData.map((skill, index) => {
        // return (
        //     <div key={index} className={`${styles.stack} ${styles[skill.title]}`}>
        //         <h3 className={styles.titleColor}>{skill.title}</h3>
        //         <ul>
        //             {skill.skills.map((skill, index) => {
        //                 return (
        //                     <li key={index}>
        //                         {/* {typeof skill.icon === 'string' ? <Image className={styles.icon} src={skill.icon} alt={skill.name} width={55} height={55}  /> : <FontAwesomeIcon icon={skill.icon} className={styles.icon} />} */}
        //                         {skill.name}
        //                     </li>
        //                 )
        //             })}
        //         </ul>
        //     </div>
        // )
    });

     const skillsCarousel = skillsData.map((skill, index) => {
        return <Carousel key={index} {...skill} />
     });
    return (
        <>
            <main className={styles.main}>
            <h1 className={`${styles.title} ${styles.titleColor}`}>Mes compétences</h1>
                <div className={styles.skillsIntro}>
                    <q className={styles.skillsText}>
                        <i>Mes expériences antérieures, mon permis de développé des compétences transversales et une grande adaptabilité. 
                        Autonome et rigoureux, je sais faire face aux défis avec efficacité. 
                        De plus mes différentes formations continues m'ont permis d'acquérir et d'affiner des compétences techniques, 
                        dont voici un aperçu : </i>
                    </q>
                </div>
                {/* <h2 className={styles.titleColor}>Compétences techniques</h2> */}

                <div className={styles.skillsContainer}>
                    {/* {skills} */}
                    {skillsCarousel}
                    {/* <Carousel {...skillsData} /> */}

                </div>
            </main>
        </>
    );
};

export default Competences;