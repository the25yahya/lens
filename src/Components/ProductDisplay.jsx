import React, {useState} from 'react'
import { useStateContext } from '../Contexts/ContextProvider';

const ProductDisplay = (props) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })}
  const {state,dispatch} = useStateContext();
  /////////////////////
  const addToCart = () =>{
    dispatch({ type : 'ADD_TO_CART', payload:props})
    scrollToTop();
  };
    const [quantity, setQuantity,productDisplay,setProductDisplay,displayedProduct] = useState(1);
  // Function to handle increasing the quantity
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Function to handle decreasing the quantity
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
    const [selectedImage, setSelectedImage] = useState(props.img1);
    const handleImageClick = (image) => {
      setSelectedImage(image);
    };
  return (
    <div className='mt-20'>
        <div className='flex items-center justify-center'>
            <img
                className='z-10 w-350 mr-12'
                src={selectedImage}
            />
            <div className='ml-20'>
                <h1 className='text-4xl w-500'>{props.name}</h1>
                <p className='my-2 text-gray-400'>
                  <span>{props.type} -</span>
                  <span> {props.color}</span>
                </p>
                <p className='font-semibold text-xl'>{props.price}</p>
                <div className='flex my-5'>
                    <button onClick={decreaseQuantity} className='p-2 px-4 bg-gray-200'>-</button>
                    <p className='p-2 px-8 border border-gray-200'>{quantity}</p>
                    <button  onClick={increaseQuantity}  className='p-2 px-4 bg-gray-200'>+</button>
                </div>
                <p className='w-500 font-mono my-5 font-semibold'>{props.description}</p>
                <button  onClick={addToCart} className='mt-5 px-12 py-3 bg-black text-white cursor-pointer hover:bg-transparent hover:text-black transition'>BUY NOW</button>
            </div>
        </div>
        <div className='flex flex-wrap items-center justify-center small-imgs mt-10'>
            <img onClick={() => handleImageClick(props.img1)} className='w-150 m-3' src={props.img1} />
            <img onClick={() => handleImageClick(props.img2)} className='w-200 borde-2 border-black' src={props.img2} />
            <img onClick={() => handleImageClick(props.img3)} className='w-200 borde-2 border-black' src={props.img3} />
            <img onClick={() => handleImageClick(props.img4)} className='w-200 borde-2 border-black' src={props.img4} />
            <img onClick={() => handleImageClick(props.img5)} className='w-200 borde-2 border-black' src={props.img5} />
            <img onClick={() => handleImageClick(props.img6)} className='w-200 borde-2 border-black' src={props.img6} />
        </div>
    </div>
  )
}

export default ProductDisplay