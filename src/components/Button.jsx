import React from 'react'

const Button = ({style}) => {
  return (
    <button className={`${style} rounded-[10px] py-4 px-6 bg-blue-gradient font-poppins font-medium text-primary text-[18px] outline-none`}>
      Get Started
    </button>
  )
}

export default Button
