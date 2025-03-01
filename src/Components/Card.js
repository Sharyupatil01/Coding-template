import { useState } from "react";

function Card({id,name,info,image,removeTour})
{
  const[readmore,setreadmore]=useState(false);
  const description= readmore ? info :`${info.substring(0,120)}....`;
  function readmorehandler()
  {
    setreadmore(!readmore);
  }

  return(
   
    <div className='card'>
        <img src={image} className='image'></img>
        <div className='tour-info'>
        <div className='tour-details'>
            <h4 className='tour-name'>{name}</h4>
        </div>
        <div className='description'>
          {description}
          <span className='readmore' onClick={readmorehandler}>
            {readmore ? `Show less`:`Read more`}
          </span>

        </div>
        </div>
      
        <button  className='btn-red' onClick={()=> removeTour(id)}>
          Get Subcription
        </button>


    </div>


  );

}
export default Card;