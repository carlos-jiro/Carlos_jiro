//css
import style from './About.module.css'
//text
//import text from '../../Texts/textEN.json'
//photo
import me from '../../img/me.png'
import { useSelector } from 'react-redux';

function About () {
    const s = style
    //const t = text.About
    const showA = useSelector((state) => state.showA)
// ${showA==="1" ? s.animado : ""}     style={{opacity: showA}}
    return(
        <div id='about' className={`${s.mainCon}`} style={{opacity: showA}}>
            
            <div className={s.infoAbout}>
                <div className={s.infoTitleCon}>
                    <div className={s.circle}></div>
                    <h1>About</h1>
                </div>
                <div className={s.infoTextCon}>
                    <p>
                        Hello! my name is Carlos Jimenez and my passion is to develop <span>web applications</span>,  
                        both back end and front end.
                       <br/><br/>
                        For several years I have learned, through courses and research, the basics and concepts of 
                        web development. I love to put into practice what I have learned, and I am always learning more. 
                        I have worked on several personal projects, and I am currently a developer at TeamVenti (since 2023), 
                        where I continue to develop my skills.
                       <br/><br/>
                        And I am proudly Mexican!
                    </p>
                </div>
            </div>

            <div className={s.photoBtnCon}>

                <div className={s.PBsecondary}>
                    <div className={s.photoCon}>
                        <img src={me} alt="just me" />
                    </div>
                    <div className={s.tech}>
                        <p>Tecnologies i work with:</p>
                        <div className={s.techs}>
                            <div><span>► JavaScript</span></div>
                            <div><span>► React js</span></div>
                            <div><span>► Redux</span></div>
                            <div><span>► Node JS</span></div>
                            <div><span>► Express</span></div>
                            <div><span>► CSS</span></div>
                            <div><span>► C#</span></div>
                            <div><span>► .NET</span></div>
                            <div><span>► SQLServer</span></div>
                        </div>
                    </div>
                    <a href="./resume" target="_blank" rel="noopener noreferrer">
                        <div className={s.btnCon}>
                            <button>Resume</button>
                        </div>
                    </a>
                </div>
                
                
            </div>
        </div>
    );
}

export default About;