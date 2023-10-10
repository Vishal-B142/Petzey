import React from "react";

const AddDoctor = () => {
  return (
    <div>
      <div className="main-wrapper">
        <app-menu></app-menu>
        <div className="page-wrapper">
          <div className="content">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <h4 className="page-title">Add Vets</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <form>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>
                          First Name <span className="text-danger">*</span>
                        </label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Last Name</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>
                          Specialist <span className="text-danger">*</span>
                        </label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group gender-select">
                        <label className="gen-label">Gender:</label>
                        <div className="form-check-inline">
                          <label className="form-check-label">
                            <input
                              type="radio"
                              name="gender"
                              className="form-check-input"
                            />
                            Male
                          </label>
                        </div>
                        <div className="form-check-inline">
                          <label className="form-check-label">
                            <input
                              type="radio"
                              name="gender"
                              className="form-check-input"
                            />
                            Female
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="row">
                      <div className="col-sm-6">
                      <div className="form-group">
                        <label>
                        Email Id <span className="text-danger">*</span>
                        </label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Address</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                        <div className="col-sm-6 col-md-6 col-lg-3">
                          <div className="form-group">
                            <label>State/Province</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Phone </label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Avatar</label>
                        <div className="profile-upload">
                          <div className="upload-img">
                            <img alt="" src="assets/img/user.jpg" />
                          </div>
                          <div className="upload-input">
                            <input type="file" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Short Biography</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      cols="30"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label className="display-block">Status</label>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="status"
                        id="doctor_active"
                        value="option1"
                        checked
                      />
                      <label className="form-check-label" for="doctor_active">
                        Active
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="status"
                        id="doctor_inactive"
                        value="option2"
                      />
                      <label className="form-check-label" for="doctor_inactive">
                        Inactive
                      </label>
                    </div>
                  </div>
                  <div className="m-t-20 text-center">
                    <button className="btn btn-primary submit-btn">
                      Create Vet
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
