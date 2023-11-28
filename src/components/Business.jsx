import React from 'react'
import styles,{layout} from '../styles'
import Button from '../components/Button'
import { features } from '../constants'
const FeatureCard =({icon, title, content, index})=>(
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length-1? 'mb-6' : 'mb-0'} feature-card`}  >
    <div className={`${styles.flexCenter} w-[64px] h-[64px] bg-dimBlue rounded-full`}>
      <img className='w-[50%] h-[50%]' src={icon} alt="" />
    </div>
    <div className='flex flex-1 flex-col ml-4'>
        <h4 className='font-poppins font-semibold text-white text-[18px] leading[23px]'>
          {title}
        </h4>
        <p className='font-poppins font-normal text-dimWhite text-[16px] leading[24px]'>
          {content}
        </p>
    </div>
  </div>
)
const Business = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h1 className={ `${styles.heading2}`}>
          Youd do the business <br className='sm:block hidden' />
          we wil handle the money
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <Button style="mt-5" />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((features, index)=>(
          <FeatureCard key={features.id} {...features} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Business
