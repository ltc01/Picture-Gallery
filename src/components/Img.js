import React from 'react'

const Img = ({ data }) => {
  return (
    <a href={data.urls.regular} target='_blank' rel='noreferrer'>
        <img src={data.urls.small} alt={data.alt_description}
        className='h-72 w-full object-cover rounded-lg shadowm-md'
        />
    </a>
  )
}

export default Img