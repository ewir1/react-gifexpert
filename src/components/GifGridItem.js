import React from 'react'

const GifGridItem = ({ title, id, url }) => {
  return (
    <div className='card'>
      <img src={url} alt={title} />
      <p>{title}</p>
      <hr />
    </div>
  )
}

export default GifGridItem
