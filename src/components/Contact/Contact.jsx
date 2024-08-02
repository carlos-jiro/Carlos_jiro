//styles
import styles from './Contact.module.css'

//img´s
import gitB from '../../img/gitB.svg'
import inB from '../../img/inB.svg'
import instaB from '../../img/instaB.svg'

import { useSelector } from 'react-redux';    

function Contact () {
    const showC = useSelector((state) => state.showC)
    const s = styles;

    return(
        <div className={s.mainCon} id="contact" style={{opacity: showC}}>
            {/* ------------------------------------------- */}
            <div className={s.titleCon}>
                <div className={s.circle}></div>
                <h1>Contact</h1>
            </div>
            {/* ------------------------------------------- */}
            <div className={s.cardCon}>
                <div className={s.backCard}>
                    <h1>Contactame!</h1>

                    <div className={s.card}>
                        <div className={s.cardText}>
                            <p>Puedes enviarme un correo dando click
                               en el boton saludame o mandarme DM en
                               en cualquiera de mis redes sociales;
                               Sera un placer saludarte!
                            </p>
                        </div>
                        <div className={s.cardRedes}>
                            <a href="https://github.com/carlos-jiro" target="_blank" rel="noopener noreferrer">
                                <img src={gitB} alt="github" />
                            </a>
                            <a href="https://www.linkedin.com/in/carlos-jimenez-84373823a/" target="_blank" rel="noopener noreferrer">
                                <img src={inB} alt="linkedin" />
                            </a>
                            <a href="https://www.instagram.com/carlos_jiro/" target="_blank" rel="noopener noreferrer">
                                <img src={instaB} alt="instagram" />
                            </a>
                        </div>
                        <div className={s.sayHi}>
                            <a href="mailto:carlos.jiro.dev@gmail.com" target="_blank" rel="noopener noreferrer">
                                <button>Saludame</button>
                            </a>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
}

export default Contact;