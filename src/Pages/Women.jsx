import React from 'react'
import { useStateContext } from '../Contexts/ContextProvider'
import Product from '../Components/Product';
import FeaturedSelect from '../Components/FeaturedSelect';
import ProductDisplay from '../Components/ProductDisplay';
import Filter from '../Components/Filter';
const Women = () => {

  const {womenGlasses,setProductDisplayWomen,setDisplayedProduct,scrollToTop,productDisplayWomen,displayedProduct} = useStateContext();
  const WomenProducts = womenGlasses.map((item) =>{
    const handleDisplayedProduct = () => {
      setDisplayedProduct(item);
      setProductDisplayWomen(true);
      scrollToTop();
    } 
    return(
      <Product
      onClick={handleDisplayedProduct}
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
  if(!productDisplayWomen){
    return (
      <div className='relative flex justify-start pt-100 px-12'>
      <FeaturedSelect />
      <Filter />
      <div className='flex flex-wrap'>
       {WomenProducts}
      </div>
     </div>
    )
  } else{
    return(
      <div className='relative flex justify-start pt-50 px-12'>
       <ProductDisplay 
        key={displayedProduct.name}
        name={displayedProduct.name}
        img1={displayedProduct.img1}
        img2={displayedProduct.img2}
        img3={displayedProduct.img3}
        img4={displayedProduct.img4}
        img5={displayedProduct.img5}
        img6={displayedProduct.img6}
        price={displayedProduct.price}
        description={displayedProduct.description}
        tag={displayedProduct.tag}
        colors={displayedProduct.colors}
        type={displayedProduct.type}
        color={displayedProduct.colors}
       />
     </div>
    )
  }
}

export default Women