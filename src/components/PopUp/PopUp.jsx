import styles from './PopUp.module.css'
import ex from "../../img/1.png"
//import { useState } from 'react';

const PopUp = ({handleOpenModal, children}) => {
    //const [logged, setLogget] = useState(false);
    return (
        <>
          <div className={styles.SC}>
            <div className={styles.header}>
    
                <div className={styles.left}>
                    <img src={ex} alt="logo ww" />
                </div>
    
                <div className={styles.center}>
                    <p></p>
                </div>
    
                <div className={styles.right}>
                    <div className={styles.closeBtn} onClick={()=>handleOpenModal()}>
                    <p><i class="bi bi-x"></i></p>
                    <p>Holas</p>
                    </div>
                </div>
            </div>
    
            <div className={styles.UserInfo}>
              {children}
            </div>
    
          </div>
          <div className={styles.MC} onClick={()=>handleOpenModal()} ></div>
        </>
      )
}

export default PopUp