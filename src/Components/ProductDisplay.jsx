import React from 'react'

const ProductDisplay = (props) => {
  return (
    <div>
        <div className='flex items-center justify-center'>
            <img
                className='w-500'
                src={props.img1}
            />
            <div>
                <h1>{props.name}</h1>
                <p>{props.price}</p>
                <div>
                    <button>-</button>
                    <p>1</p>
                    <button>+</button>
                </div>
                <p>{props.decription}</p>
            </div>
        </div>
        <div className='flex flex-wrap items-center justify-center'>
            <img src={props.img2} />
            <img src={props.img3} />
            <img src={props.img4} />
            <img src={props.img5} />
            <img src={props.img6} />
            <img src={props.img7} />
        </div>
    </div>
  )
}

export default ProductDisplay