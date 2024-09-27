import React from 'react'

interface CartMenu {
  id: string,
  name: string,
  imageId: string,
  inStock: number,
  price: number
}

const CartMenu = ({ id, name, imageId, inStock, price }: CartMenu) => {
  console.log("name: ", imageId)

  return (
    <div
      key={id}
      className=" flex gap-3 mx-96 my-6 bg-stone-200 rounded-2xl w-[1000px] h-[100px]"
         >
      <img
        className="h-[100px] w-[300px] object-cover rounded-md"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`}
        alt={name}
      />
      <div className="m-1">
        <span className="text-xl font-mono">{name}</span>
        <h3 className="text-xs">Stock left {inStock}</h3>
        <h4 className="text-xs">Price {price}</h4>
      </div>
    </div>
  )
}

export default CartMenu
