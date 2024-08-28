import { useState } from 'react'

const Section = ({title , description}) => {

const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="instamart-div">
      {
          isVisible ? 
          <button onClick={() => setIsVisible(false)}> hide </button> :
          <button onClick={() => setIsVisible(true)}> show </button> 
      } 
      <h2> {title} </h2>
      {isVisible && <p> {description} </p>}
    </div>
  )
}

const InstaMart = () => {

  return(
    <div>
      <h1> Instamart </h1>
      <div>
        <Section 
        title = "About Us" 
        description = " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        />  
      </div> 

      <div>
        <Section 
        title = "Contact Us" 
        description = " is simply dummy text of the printing and t xt ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        />  
      </div> 

      <div>
        <Section 
        title = "Call Us" 
        description = " is simply dummy text of the printing and t xt ever  rinter took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        />  
      </div> 
    </div>
  )
}



export default InstaMart
