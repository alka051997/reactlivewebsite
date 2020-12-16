import React from 'react';

const BannerRight = () => {
    return (
        <>
                             
                       <div className='col-md-6  col-sm-12 col-xs-12'>
                         <div className='form_main_container mx-auto mx-xl-0 ml-xl-auto border'>
                          <form>
        <div>
        <div className="form-group">
            <label>Email:</label>
            <input  type="text" className="form-control"  disabled/>
        </div>
        <div className="form-group">
            <label>Password:</label>
            <input type="text" className="form-control" disabled/>
        </div>
        <div className="d-flex flex-row" >
            <div className="form-group flex1 mr-1">
                <label>First Name:</label>
                <input type="text" className="form-control" disabled />
            </div>
            <div className="form-group flex1 ml-1">
                <label>Last Name:</label>
                <input type="text" className="form-control" disabled />
            </div>
        </div>
    </div>
        <div className="form-group mb-0">
        <label className="control-label">Mobile Number:</label>
        <div className="form-row">
            <div className="form-group col-2">
                <input  type="text" className="form-control" disabled />
            </div>
            <div className="form-group col-10">
                <input type="text"  className="form-control" disabled />
            </div>
        </div>
    </div>
    <div className="d-flex flex-row mt-n4">
        <div className="form-group flex1 mr-1">
            <label className="control-label">Batch:</label>
            <select className="custom-select pr-4" disabled >
            </select>
        </div>
                <div className="form-group flex1 ml-1">
            <label className="control-label">Coupon code:</label>
            <input type="text" className="form-control" disabled />
        </div>
            </div>
    <div className="form-group">
        <label className="control-label">I want to learn Digital Marketing to :</label>
        <select className="custom-select" disabled>
        </select>
    </div>
    <div className="spinner-container text-center">
        <i className="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
    </div>
    <div className="form-group mb-0">
        <button className="btn btn-primary contest_register_now" disabled>SIGN UP</button>
    </div>
</form>
</div>
</div>


        </>
    );
}
export default BannerRight;