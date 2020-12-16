import React from 'react';
const Reviews = () =>{
return(
         <>
         <section id="course-teachers-section" className="section background-alternate">
        <div className="container py-5">
            <h2 className="section-heading">Who will be your teacher?</h2>
            <div className="teachers-container mx-auto">
                <div className="custom-carousel">
                    <div className="slider">
                                                <div className="slider-item mx-auto">
                            <div className="teacher-card h-100 text-center">
                                <div className="image-wrapper w-100">
                                    <div className="image-container mx-auto">
                                        <img alt='degit' src="https://trainings.internshala.com/uploads/digital-marketing/signup_page_media/teachers_images/amitabh_verma.png" className="image" />
                                    </div>
                                </div>
                                <div className="teacher-info h-100">
                                    <div className="name-and-designation-container">
                                        <h3 className="name">Amitabh Verma</h3>
                                        <p className="designation">Founder, AMP Digital. Ex-Google</p>
                                    </div>
                                    <div className="separator mx-auto"></div>
                                    <div className="about-info-container">
                                        <p className="about-info">Delhi School of Economics (1995), IIM Kozhikode (1999), 14+ years of experience working with companies like ICICI Bank and Google.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                                            </div>
                    <div className="navigation-container  d-none">
                        <div className="navigation d-flex align-items-center justify-content-center">
                            <i className="fa fa-arrow-left control left disabled" aria-hidden="true"></i>
                            <div className="indicators-container">
                                <div className="indicators d-flex">
                                                                        <div className="indicator"></div>
                                                                        <div className="indicator d-block d-lg-none"></div>
                                </div>
                                <div className="active-indicator"></div>
                            </div>
                            <i className="fa fa-arrow-right control right" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
         </>
    )
}

    
       
    

export default Reviews;