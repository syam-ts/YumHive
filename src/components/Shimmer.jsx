const Shimmer = () => {


    return (
      <div className="flex gap-12 flex-wrap px-44 mt-32">
        {Array(10)
          .fill("")
          .map((e, index) => (
            <div key={index} className="h-[220px] w-[320px] rounded-md bg-gray-200 "></div>
          ))}
      </div>
    )
  }
  

  export default Shimmer



   
    
     