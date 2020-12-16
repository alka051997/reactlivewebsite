import React from 'react';
import BannerLeft from './BannerLeft';
import BannerRight from './BannerRight';
import Certificate from './Certificate';
import Placement from './Placement';
import Syllabus from './Syllabus';
import TrainingHighLight from './TrainingHighLight';
import Studentreview from './Studentreview';
import Reviews from './Reviews';
import Footer from './Footer';
const Home = () => {
return(
         <>
            <section id='header' className='banner'>
              <div className='container-fluid'>
                 <div className='bg_banner'>
                    <div className='container'>
                    <div className='row'>
                         <BannerLeft cert='Certified Online Training' coursefname='Learn Digital' courselname='Marketing' brief='Become an ace digital marketer - learn Google Analytics, SEO, Social Media Marketing, Email Marketing, and more'/>
                        <BannerRight/>
                       </div>
                    </div>
                 </div>
              </div>
              
            </section>
             <section id='header' className='training_high'>
              <div className='container-fluid'>
                 <div className='bg_banner'>
                    <div className='container'>
                    <div className='row'>
                        <TrainingHighLight/>
                       </div>
                    </div>
                 </div>
              </div>
              
            </section>

             <section id='certificate' className='Certificate'>
              <div className='container-fluid'>
                 <div className='bg_banner'>
                    <div className='container'>
                    <div className='row'>
                        <Certificate cer_heading='How will you get your certificate?' cer_desc='
						Take the final exam online to complete the Digital Marketing Training after which you will be able to download your certificate from Internshala Trainings
					' cer_img='https://trainings.internshala.com/cached_uploads/digital-marketing/signup_page_media/certificate.png'/>
                       </div>
                    </div>
                 </div>
              </div>
              
            </section>

            
             <section id='placement' className='placement'>
              <div className='container-fluid'>
                 <div className='bg_banner'>
                 <h1 className='section_heading'>What placement assistance will you receive?</h1>
                    <div className='container'>
                    <div className='row'>
                        <Placement
                         place_heading='What placement assistance will you receive?'
                          img1='https://trainings.internshala.com/uploads/digital-marketing/signup_page_media/placement_assistance_icons/placement_assistance_1.png'
                           img2='https://trainings.internshala.com/uploads/digital-marketing/signup_page_media/placement_assistance_icons/placement_assistance_2.png'
                            img3='https://trainings.internshala.com/uploads/digital-marketing/signup_page_media/placement_assistance_icons/placement_assistance_3.png' 
                          
                          place_desc1='Free Placement Preparation Training' 
                          place_desc2='Access to curated Internships & Jobs'
                          place_desc3='Top performers will be highlighted in their internship & job applications  on Internshala'
                          />
                       </div>
                    </div>
                 </div>
              </div>
              
            </section>


            <section id='placement' className='placement'>
              <div className='container-fluid'>
                 <div className='bg_banner'>
                 <h1 className='section_heading'>Why learn Digital Marketing?</h1>
                    <div className='container'>
                    <div className='row'>
                        <Placement
                         place_heading='What placement assistance will you receive?'
                          img1='https://trainings.internshala.com/uploads/digital-marketing/signup_page_media/why_learn_icons/take_your_idea_to_millions.png'
                           img2='https://trainings.internshala.com/uploads/digital-marketing/signup_page_media/why_learn_icons/be_in_demand.png'
                            img3='https://trainings.internshala.com/uploads/digital-marketing/signup_page_media/why_learn_icons/channel_your_creativity.png' 
                          
                          place_desc1='
Take your idea to millions
Whether you have an app, blog, YouTube channel, or want to manage publicity for your college fest; digital marketing can help you reach millions!' 
                          place_desc2='Be in demand
Digital marketing is one of the hottest career options these days with thousands of internships and jobs being added everyday.'
                          place_desc3='Channel your creativity
Whether you like numbers, or wordplay, or designing things; digital marketing offers a heady mix of creativity for everyone.'
                          />
                       </div>
                    </div>
                 </div>
              </div>
              
            </section>

            <section id="course-activities-section" className="section background-alternate" data-gtm-vis-first-on-screen-6410365_68="394343" data-gtm-vis-total-visible-time-6410365_68="300">
        <div className="container py-5">
            <h2 className="section-heading">How will your training work?</h2>
            <div className="d-flex flex-row flex-lg-column align-items-lg-center mx-auto">
                <div className="dashed-border">
                    
                </div>
                <div className="d-flex flex-column flex-lg-row justify-content-lg-center">
                                        <div className="item-container d-flex flex-lg-column align-items-center">
                        <div className="number-container">
                            <div className="number-box">1</div>
                            <div className="arrow-container">
                                <div className="arrow arrow-left"></div>
                                <div className="arrow arrow-right"></div>
                            </div>
                        </div>
                        <div className="content-container">
                            <p className="activity">Watch the videos to learn various concepts</p>
                        </div>
                    </div>
                                        <div className="item-container d-flex flex-lg-column align-items-center">
                        <div className="number-container">
                            <div className="number-box">2</div>
                            <div className="arrow-container">
                                <div className="arrow arrow-left"></div>
                                <div className="arrow arrow-right"></div>
                            </div>
                        </div>
                        <div className="content-container">
                            <p className="activity">Test your knowledge through quizzes &amp; module tests</p>
                        </div>
                    </div>
                                        <div className="item-container d-flex flex-lg-column align-items-center">
                        <div className="number-container">
                            <div className="number-box">3</div>
                            <div className="arrow-container">
                                <div className="arrow arrow-left"></div>
                                <div className="arrow arrow-right"></div>
                            </div>
                        </div>
                        <div className="content-container">
                            <p className="activity">Get hands on practice by doing projects</p>
                        </div>
                    </div>
                                        <div className="item-container d-flex flex-lg-column align-items-center">
                        <div className="number-container">
                            <div className="number-box">4</div>
                            <div className="arrow-container">
                                <div className="arrow arrow-left"></div>
                                <div className="arrow arrow-right"></div>
                            </div>
                        </div>
                        <div className="content-container">
                            <p className="activity">Take the final exam to get certified in Digital Marketing</p>
                        </div>
                    </div>
                                    </div>
            </div>
        </div>
    </section>


    <section id='syllabus' className='syllabus'>
              <div className='container-fluid'>
                 <div className='bg_banner'>
                 <h1 className='section_heading'>What will be the training syllabus?</h1>
                    <div className='container'>
                    <div className='row'>
                        <Syllabus/>
                        <br/>
                         <Syllabus/>
                         <br/>
                          <Syllabus/>
                       </div>
                    </div>
                 </div>
              </div>
              
            </section>
            <Reviews/>
            <Studentreview/>
            <Footer/>

         </>
    )
}

    
       
    

export default Home;