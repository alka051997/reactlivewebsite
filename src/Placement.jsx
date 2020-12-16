import React from 'react';
const Placement = (props) =>{
return(
         <>
           <div class='col-md-2 col-sm-12 col-xs-12'>
            <img src={props.img1} alt='cerimg' className='cerimg' />
         </div>
         <div class='col-md-2 col-sm-12 col-xs-12'>
        <p>{props.place_desc1}</p>
         </div>
         <div class='col-md-2 col-sm-12 col-xs-12'>
            <img src={props.img2} alt='cerimg' className='cerimg' />
         </div>
         <div class='col-md-2 col-sm-12 col-xs-12'>
            <p>{props.place_desc2}</p>
         </div>
         <div class='col-md-2 col-sm-12 col-xs-12'>
            <img src={props.img3} alt='cerimg' className='cerimg' />
         </div>
         <div class='col-md-2 col-sm-12 col-xs-12'>
            <p>{props.place_desc3}</p>
         </div>
         </>
    )
}

    
       
    

export default Placement;