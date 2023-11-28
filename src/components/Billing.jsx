import React from 'react'
import  {layout } from '../styles'
import { apple, bill, google } from '../assets'
import styles from '../styles';
const Billing = () => {
  return (
    <section className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>
      <img className='w-[100%] h-[100%] z-[4]' src={bill} alt="" />
      <div className='white__gradient absolute z-[3] top-0 -left-1/2 w-[50%] h-[50%] rounded-full '  />
      <div className='pink__gradient absolute z-[3] bottom-0 -left-1/2 w-[50%] h-[50%] rounded-full '  />
      </div>
      <div className={`${layout.sectionInfo}`}>
        <h1 className={ `${styles.heading2}`}>
        Easily control your <br className='sm:block hidden' /> billing & invoicing. 
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>

        <div className='flex flex-row flex-wrap sm:mpt-10 mt-6'>
          <img src={apple} className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' alt="" />
          <img src={google} className='w-[128px] h-[42px] object-contain  cursor-pointer' alt="" />
        </div>
      </div>
    </section>
  )
};

export default Billing
