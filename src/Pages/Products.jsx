import React from 'react'
import { useStateContext } from '../Contexts/ContextProvider'
import Product from '../Components/Product'
import { propNames } from '@chakra-ui/react'
import FeaturedSelect from '../Components/FeaturedSelect'
import Filter from '../Components/Filter'

const Products = () => {
  const {glasses} = useStateContext();
  const Products = glasses.map((item) =>{
    return(
      <Product
        key={item.name}
        name={item.name}
        img1={item.img1}
        img2={item.img2}
        img3={item.img3}
        img4={item.img4}
        img5={item.img5}
        img6={item.img6}
        price={item.price}
        description={item.description}
        tag={item.tag}
        colors={item.colors}
      />
    )
  })
  return (
    <div className='relative flex justify-start pt-100 px-12'>
     <FeaturedSelect />
     <Filter />
     <div className='flex flex-wrap'>
      {Products}
     </div>
    </div>
  )
}

export default Products