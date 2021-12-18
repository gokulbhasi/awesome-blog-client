import React from 'react'
import LazyLoad from 'react-lazyload'
import loadingImg from '../img/placeholder_for_missing_posters.png'

const ItemCard = ({ data }) => {
  const { image, title } = data
  // const updatedImg = image[0].split("3000").join("3001")
  const updatedImg = image[0]
  const onErrorGetSrc = e => {
    e.target.src = loadingImg
  }
  return (
    <div className=' w-1/3 px-2 pbx-90 '>
      <div className=''>
        <LazyLoad
          placeholder={
            <img src={loadingImg} alt='' />
          }
        >
          <img
            src={updatedImg}
            alt={title}
            // src='https://images.unsplash.com/photo-1536572701422-28e6051dd93f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1490&q=80'
            className='w-full '
            onError={onErrorGetSrc}
          />
        </LazyLoad>
      </div>
      <div className='pt-6'>
        <p className='text-black truncate text-5xl font-light'>{title}</p>
      </div>
    </div>
  )
}
export default ItemCard
