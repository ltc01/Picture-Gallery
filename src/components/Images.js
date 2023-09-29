import React, { useContext } from 'react'
import { ImageContext } from '../App';
import Img from './Img';
import Structure from './Structure';

const Images = () => {
    const {response, isLoading, searchImage} = useContext(ImageContext);

  return (
    <div className='bg-sky-50'>
      <h1 className="text-xl pt-4 font-bold text-center">Images Shown for {searchImage || 'Cats'}</h1>
      <div 
        className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 mx-auto my-10 gap-4 max-w-7xl">
       {isLoading ? <Structure item={10} /> : response.map((data, key) => <Img key={key} data={data} />)}
      </div>
    </div>
  )
}

export default Images