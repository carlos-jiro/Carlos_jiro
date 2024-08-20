import React from 'react'
import { useState } from 'react'
import PopUp from './PopUp'

const OpenPopUpBtn = ({btnTxt, popView}) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpenModal = () => {
        setIsOpen(!isOpen)
        console.log(isOpen)
    }

  return (
    <div>
        <button onClick={()=>handleOpenModal()}>{btnTxt}</button>
        {isOpen && <PopUp handleOpenModal={handleOpenModal} >{popView}</PopUp>}
    </div>
  )
}

export default OpenPopUpBtn