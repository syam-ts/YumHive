import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

interface Section {
  title: string,
  description: string
}

const Section = ({ title, description }: Section) => {

  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="instamart-div">
      {isVisible ? (
        <button className="font-serif" onClick={() => setIsVisible(false)}> Hide </button>
      ) : (
        <button className="font-serif" onClick={() => setIsVisible(true)}> Show </button>
      )}
      <h2>{title}</h2>
      {isVisible && <p>{description}</p>}
    </div>
  )
}


const InstaMart = () => {

  const user = useSelector((store: any ) => store.user.isUser)
  const navigate = useNavigate()
 
  
  useEffect(() => {
    !user && navigate('/home')
  }, [])


  return (
    <div className="grid gap-12 px-44 pt-44 pb-44">
      <div className="border border-black rounded-md">
        <Section
          title="About us"
          description="is simply dummy text of the printing and t xt ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu"
        />
      </div>

      <div className="border border-black rounded-md">
        <Section
          title="Contact us"
          description="is simply ummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including vers ey of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu"
        />
      </div>

      <div className="border border-black rounded-md">
        <Section
          title="Team us"
          description="is simply dummy text of the printing and t xt ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu"
        />
      </div>
    </div>
  )
}

export default InstaMart
