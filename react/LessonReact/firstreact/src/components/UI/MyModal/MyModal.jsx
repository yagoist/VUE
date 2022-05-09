import React from 'react'
import style from './MyModal.module.css'

const MyModal = ({ children, visible, setVisible }) => {

  const changeClasses = [style.myModal]

  if (visible) {
    changeClasses.push(style.active)
  }


  return (
    <div className={changeClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={style.myModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default MyModal