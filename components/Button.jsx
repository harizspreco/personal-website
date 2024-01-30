import React from 'react'

const Button = ({content}) => {
  return (
    <div className='flex p-10 justify-center items-center bg-opacity-10 bg-gray-300 hover:bg-opacity-20 hover:scale-105 border-purple-300 border'>
        {content}
    </div>
  )
}

export default Button