import React from 'react'

const EditDoctor = () => {
  return (
    <div>
     <div class="main-wrapper">
        <app-menu></app-menu>
        <div class="page-wrapper">
          <div class="content">
            <div class="row">
              <div class="col-lg-8 offset-lg-2">
                <h4 class="page-title">Edit Vets</h4>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-8 offset-lg-2">
                <form>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>
                          First Name <span class="text-danger">*</span>
                        </label>
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Last Name</label>
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>
                          Specialist <span class="text-danger">*</span>
                        </label>
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group gender-select">
                        <label class="gen-label">Gender:</label>
                        <div class="form-check-inline">
                          <label class="form-check-label">
                            <input
                              type="radio"
                              name="gender"
                              class="form-check-input"
                            />
                            Male
                          </label>
                        </div>
                        <div class="form-check-inline">
                          <label class="form-check-label">
                            <input
                              type="radio"
                              name="gender"
                              class="form-check-input"
                            />
                            Female
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="row">
                      <div class="col-sm-6">
                      <div class="form-group">
                        <label>
                        Email Id <span class="text-danger">*</span>
                        </label>
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Address</label>
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                        <div class="col-sm-6 col-md-6 col-lg-3">
                          <div class="form-group">
                            <label>State/Province</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Phone </label>
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Avatar</label>
                        <div class="profile-upload">
                          <div class="upload-img">
                            <img alt="" src="assets/img/user.jpg" />
                          </div>
                          <div class="upload-input">
                            <input type="file" class="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Short Biography</label>
                    <textarea
                      class="form-control"
                      rows="3"
                      cols="30"
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <label class="display-block">Status</label>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="status"
                        id="doctor_active"
                        value="option1"
                        checked
                      />
                      <label class="form-check-label" for="doctor_active">
                        Active
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="status"
                        id="doctor_inactive"
                        value="option2"
                      />
                      <label class="form-check-label" for="doctor_inactive">
                        Inactive
                      </label>
                    </div>
                  </div>
                  <div class="m-t-20 text-center">
                    <button class="btn btn-primary submit-btn">
                      Update Vet
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default EditDoctor
