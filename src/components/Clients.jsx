import React from 'react'
import styles from '../styles'
import { clients } from '../constants'

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex flex-wrap w-full  `}>
        {clients.map((clents)=>(
          <div className={`${styles.flexCenter}  flex-1 min-w-[120px] sm:min-w-[192px] `} key={clents.id}>
            <img className='sm:w-[192px] sm:mt-0 mt-4  w-[100px] object-contain' src={clents.logo} alt="" />
          </div> 
        ))}
      </div>
    </section>
  )
}

export default Clients
