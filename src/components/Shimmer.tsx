const Shimmer = () => {


    return (
      <div className="flex gap-12 flex-wrap px-60 mt-28">
        {Array(13)
          .fill("")
          .map((e, index) => (
            <div key={index} className="h-[220px] w-[300px] rounded-md bg-gray-200 "></div>
          ))}
      </div>
    )
  }
  

  export default Shimmer



   
    
     