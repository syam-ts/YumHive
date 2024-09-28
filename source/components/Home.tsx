import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import OAuth from './OAuth'

const Home = () => {

  const userIn = useSelector((store: any) => store.user.isUser)
  const navigate = useNavigate() 

  console.log(userIn)
          useEffect(() => {
            if(userIn) {
              navigate('/')
            }

          }, [])
          

          // https://img.freepik.com/free-photo/top-view-asparagus-with-salad_23-2148622386.jpg?t=st=1727520039~exp=1727523639~hmac=3e9fd3ca00b56446a063a87b1c52f6827954e4481c075559f76e53174638f9c9&w=1800
      return (
      <div >
        <div className="w-screen h-screen overflow-x-hidden overflow-hidden relative ">
          <img src="https://img.freepik.com/premium-photo/large-table-chinese-new-years-eve-dinner-spread_1316316-16632.jpg?w=1380" className="absolute top-0 left-0 min-h-full " alt="" />
          <div className="relative z-20 max-w-screen-lg mx-auto grid grid-cols-12 h-full items-center">
            <div className="col-span-6">
              <span className="uppercase text-white text-xs font-bold mb-2 block">Welcome To Yumhive</span>
              <h1 className="text-white font-extrabold text-5xl mb-8">Findout Latest Tasteful and quality foods</h1>
              <p className="text-stone-100 text-base">
                Log in to chose , order and enjoying the feast of foods...
              </p>
              <button className="mt-8 text-white uppercase py-2 text-base font-light px-10 border border-white hover:bg-white hover:bg-opacity-50 hover:text-black"> 
              <OAuth method='sign-in'/>
              </button>
              </div>
          </div>
        </div>  
    </div> 
    )
}

export default Home