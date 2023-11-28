import React from 'react'
import styles from '../styles'
import { arrowUp } from '../assets'

const GetStarted = () => {
  return (
    // <div className={`bg-blue-gradient ${styles.flexCenter} rounded-full w-[140px] h[140px] p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} w-[100%] h-[100%] bg-primary rounded-full flex-col`}>
        <p className={`${styles.flexCenter} flex-row font-popppins font-medium text-[18px] leading-[23px] `}>
          <span className='text-gradient'>Get</span>
          <img src={arrowUp} alt="" />
        </p>
        <p className={`${styles.flexCenter} flex-row font-popppins font-medium text-[18px] leading-[23px] `}>
          <span className='text-gradient'>Started</span>
        </p>
      </div>
    </div>
  )
}

export default GetStarted
