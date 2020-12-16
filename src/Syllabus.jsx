import React from 'react';
const Syllabus = () =>{
return(
        <>
            <div className='section-container syllabus_con mx-auto'>
         <div className="module-container " data-toggle="collapse" data-target="#topics-container-collapse-1" aria-expanded="false">
                        
                            <div className="module w-100 ">
                                <h3 className="name">Blogging &amp; Web Analytics</h3>
                                <div className="info d-flex">
                                    <div className="no-of-topics d-flex">
                                        <img className="image" alt='img' src="https://trainings.internshala.com/static/images/icons/book_outlined.svg" />
                                        <span className="content">7 Topics</span>
                                    </div>
                                         <div className="no-of-topics d-flex">                                                                   <div class="no-of-demo-videos">
                                        <img className="image" alt='img' src="https://trainings.internshala.com/static/images/icons/play_outlined.svg" />
                                        <span className="content">2 Demo videos inside</span>
                                    </div>
                                    </div>
                                                                    </div>
                            </div>
                            <div className="collapse-arrow-container">
                                <i className="fa fa-angle-up-down"></i>
                            </div>
                            </div>
                        </div>         </>
    )
}

    
       
    

export default Syllabus;