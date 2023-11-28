import React from 'react'
import styles from '../styles'
import { logo } from '../assets'
import { features, footerLinks } from '../constants'
import { socialMedia } from '../constants'
const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
          <div className='flex flex-1 flex-col  flex-start mr-10'>
            <img src={logo} alt="" className='w-[266px] h-[72px] object-contain' />
            <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make the payments easy, reliable and secure.</p>
          </div>
          <div className='flex flex-[1.5] felx-row sm:mt-0 mt-10 flex-wrap justify-between'>
            {footerLinks.map((footer,index)=>(
              <div key={index} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
                <h4 className='font-poppins font-medium text-white text-[18px] leading-[27px]'>{footer.title}</h4>
                <ul>
                {footer.links.map((links,index)=>(
                  <li  className='mt-4 font-poppins font-normal text-dimWhite text-[16px] leading-[27px] hover:text-secondary cursor-pointer'>
                      {links.name}
                  </li>
                ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className='flex md:flex-row justify-between items-center flex-col w-full pt-6 border-t-[1px] border-t-dimWhite'>
          <p className='font-poppins font-normal text-center text-dimWhite text-[18px] leading-[27px]'>
            2021 HooBank. All Rights Reserved.
          </p>
            <div className='flex flex-row md:mt-0 mt-6'>
              {socialMedia.map((img,index)=>(
                <img src={img.icon}
                className='w-[21px] h-[21px] mr-4 '
                 alt="" />
              ))}
            </div>
        </div>
    </section>
  )
}

export default Footer
