import React from 'react';

import Training_data from './Training_data';
function ncard(val) {
return(
<div className='col-md-4 col-sm-12 col-xs-4'>
              <div className="row">
                 <div className='col-md-3'>
                    <div className='icon_img'>
                    <img src={val.ticonsrc} id={val.key}  className="image" alt='img1'/>
                    </div>
                 </div>
                 <div className='col-md-9'>
                    <div className="content-container">
                            <h3 className="title">{val.ticonhad}</h3>
                            <p className="description">{val.ticondec}</p>
                        </div>
                 </div>
              </div>
            </div>
)
    
}
const TrainingHighLight = () =>{
return(
      
      <>
           {Training_data.map(ncard)} 
            
     
         </>
    );
}

    
       
    

export default TrainingHighLight;