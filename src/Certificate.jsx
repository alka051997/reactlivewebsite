import React from 'react';
const Certificate = (props) =>{
return(
       <> <div className='container'>
       <h1 className='section_heading'>{props.cer_heading}</h1>
       <div className='row container'>
         
         <div className='col-md-6 col-sm-12 col-xs-12'>
            <p className='cerpara'>{props.cer_desc}</p>
         </div>
         <div className='col-md-6 col-sm-12 col-xs-12'>
            <img src={props.cer_img} alt='cerimg' className='cerimg' />
         </div>
         </div>
         </div>
         </>
    )
}

    
       
    

export default Certificate;