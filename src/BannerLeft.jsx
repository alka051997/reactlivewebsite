import React from 'react';
import star from './star.svg';
import place from './place.svg';
import week from './week.svg';
import enroll from './enroll.svg';
const BannnerLeft = (props) => {
    return (
        <>
                                 <div className='col-md-6  col-sm-12 col-xs-12'>
                         <div className="content-container">
                        <div className="certified-tag d-inline-block ">{props.cert}</div>
                        <div className="course-headline-container d-flex">
                            <h1 className="course-headline">
                                <span id="course-headline">{props.coursefname} <br/> {props.courselname}</span>
                                                            </h1>
                        </div>

                        <p className="course-brief">{props.brief}</p>
                        <div className="tags">
                                                                <div>
                                        <img src={star} alt="star"/>
                                        <span>4.2</span>
                                    </div>
                                <div>
                                    <img src={enroll} alt="users"/>
                                    <span>31,619 Enrolled</span>
                                </div>
                                                            <div>
                                    <img src={week} className="calender" alt="calender"/>
                                    <span>6 Weeks</span>
                                </div>
                                <div>
                                    <img src={place} alt="placement-assistace"/>
                                    <span>Placement Assistance</span>
                                </div>
                                                        </div>
                        <div className="treatment-section-container"></div>
                    </div>
                      </div>
        </>
    );
}
export default BannnerLeft;