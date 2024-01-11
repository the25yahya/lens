import { color } from 'framer-motion'
import React from 'react'

const BagProduct = (props) => {
  return (
    <div>
        <div>
            <div>
                <img
                    src={props.img1}
                />
            </div>
            <div>
                <h1>{props.name}</h1>
                <p><span>{props.color} </span>/<span>{props.type}</span></p>
            </div>
            <p>{props.price}</p>
        </div>
    </div>
  )
}

export default BagProduct