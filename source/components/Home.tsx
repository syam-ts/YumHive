import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const userIn = useSelector((store: any) => store.cart.isUser)
  const navigate = useNavigate()

  console.log('user ', userIn)

          useEffect(() => {
            if(!userIn) {
              navigate('/home')
            }

          }, [])

    return (
    <div>
      <div className="w-screen h-screen overflow-hidden relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:left-0 before:z-10 before:opacity-30">
        <img src="https://picsum.photos/seed/picsum/1900/850" className="absolute top-0 left-0 min-h-full ob" alt="" />
        <div className="relative z-20 max-w-screen-lg mx-auto grid grid-cols-12 h-full items-center">
          <div className="col-span-6">
            <span className="uppercase text-white text-xs font-bold mb-2 block">Welcome To Yumhive</span>
            <h1 className="text-white font-extrabold text-5xl mb-8">Findout Latest Tasteful and quality foods</h1>
            <p className="text-stone-100 text-base">
              Log in to chose , order and enjoying the feast of foods...
            </p>
            <button className="mt-8 text-white uppercase py-4 text-base font-light px-10 border border-white hover:bg-white hover:bg-opacity-10">Get started</button>
          </div>
        </div>
      </div>  
</div> 
    )
}

export default Home