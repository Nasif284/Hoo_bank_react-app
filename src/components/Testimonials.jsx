import React from 'react'
import styles from '../styles'
import FeedbackCard from '../components/FeedbackCard'
import { feedback } from '../constants'
const Testimonials = () => {
  return (
    <section className={`${styles.paddingY} ${styles.flexCenter} flex-col realtive`}>
      <div className=' absolute w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient z-[0] ' />
      <div className='w-full flex justify-between items-center md:flex-row flex-col ralative sm:mb-16 mb-6  z[1]'>
        <h1 className={`${styles.heading2}`}>What people are<br className='sm:block hidden' /> saying about us</h1>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} max-w-px[450px]  `}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
      </div>
    </section>
  )
}

export default Testimonials
