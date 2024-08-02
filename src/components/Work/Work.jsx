import style from './Work.module.css'

//img
import one from '../../img/1.png'
import two from '../../img/2.png'
import three from '../../img/ww.png'

import { useSelector } from 'react-redux';

function Work () {
    const showW = useSelector((state) => state.showW)
    const s = style
    return(
        <div className={s.mainCon} id="work"  style={{opacity: showW}}>
            
            <div className={s.titleCon}>
                <div className={s.circle}></div>
                <h1>Proyects</h1>
            </div>

            <div className={s.cardsCon}>

                <div className={s.card}>
                    <div className={s.infoCard}>
                        <h1>PokeApp</h1>
                        <div className={s.infoText}>
                            <p>PokeApp es una aplicacion de consultas auna api tanto externa como una propia
                                que conecta cons una base de datos, con lo que permite almacenar datos
                                introducidos por el usuario
                            </p>
                        </div>
                        <button>Ver Proyecto</button>
                    </div>
                    <div>
                        <img src={one} alt="one" />
                    </div>

                </div>

                <div className={s.card}>
                    <div className={s.infoCard}>
                        <h1>Duit</h1>
                        <div className={s.infoText}>
                            <p>PokeApp es una aplicacion de consultas auna api tanto externa como una propia
                                que conecta cons una base de datos, con lo que permite almacenar datos
                                introducidos por el usuario
                            </p>
                        </div>
                        <button>Ver Proyecto</button>
                    </div>
                    <div>
                        <img src={two} alt="two" />
                    </div>

                </div>

                <div className={s.card}>
                    <div className={s.infoCard}>
                        <h1>Wall Won</h1>
                        <div className={s.infoText}>
                            <p>
                                Wallpaper Wonderland is a small wallpaper store, with an API developed with 
                                .net 8 and a front end developed with ReactJS.
                            </p>
                        </div>
                        <button>Ver Proyecto</button>
                    </div>
                    <div>
                        <img src={three} alt="three" />
                    </div>

                </div>


            </div>

        </div>
    );
}

export default Work;