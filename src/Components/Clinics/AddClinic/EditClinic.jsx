import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Await, Route, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Loader from "../../../Shared/Loader";

const EditClinic = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [clinicId, setclinicid] = useState("");
  const [clinicName, setclinicName] = useState("");
  const [clinicInfo, setclinicInfo] = useState("");
  const [addres, setAddres] = useState("");
  const [contactNumber, setcontactNumber] = useState("");
  const [contactPerson, setcontactPerson] = useState("");
  const [workingDays, setworkingDays] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [data, setData] = useState(null);
//use effect
  useEffect(() => {
    setclinicid(localStorage.getItem("clinicId"));
    setclinicName(localStorage.getItem("clinicName"));
    setclinicInfo(localStorage.getItem("clinicInfo"));
    setAddres(localStorage.getItem("address"));
    setcontactNumber(localStorage.getItem("contactNum"));
    setcontactPerson(localStorage.getItem("contactPerson"));
    setworkingDays(localStorage.getItem("workingDays"));
    setDescription(localStorage.getItem("description"));
    setTime(localStorage.getItem("time"));
    setStatus(localStorage.getItem("status"));
  }, []);


  //Editing the informatation of the particular Clinic using axios
  const handleSubmit = async () => {
    const data = {
      clinicId: clinicId,
      clinicName: clinicName,
      clinicInfo: clinicInfo,
      address: addres,
      contactNum: contactNumber,
      contactPerson: contactPerson,
      workingDays: workingDays,
      time: time,
      description: description,
      status: status,
    };
    await axios
      .put("https://optclinic.learn.skillassure.com/clinic/update", data)
      .then((response) => {
        setData(response.data);
        setIsLoading(true);
        console.log(response.data);
        setclinicid("");
        setclinicName("");
        setclinicInfo("");
        setAddres("");
        setcontactNumber("");
        setcontactPerson("");
        setworkingDays("");
        setTime("");
        setDescription("");
        setStatus("");
      })
      .then(() => {
        Route("/clinic");
      });
  };



  return (
    <div>
      <div className="main-wrapper">
        <div className="page-wrapper">
          <div className="content">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <h4 className="page-title">
                  <b>Update Clinic</b>
                </h4>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          <b>Clinic Name</b>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          value={clinicName}
                          onChange={(e) => setclinicName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          <b>Clinic Info</b>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          value={clinicInfo}
                          onChange={(e) => setclinicInfo(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          <b>Address</b>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          value={addres}
                          onChange={(e) => setAddres(e.target.value)}
                        />
                      </div>
                    </div>
                 
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          <b>Contact Number</b>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          value={contactNumber}
                          onChange={(e) => setcontactNumber(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          <b>Contact Person</b>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          value={contactPerson}
                          onChange={(e) => setcontactPerson(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          <b>Working Days</b>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          value={workingDays}
                          onChange={(e) => setworkingDays(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          <b>Time</b>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          value={time}
                          onChange={(e) => setTime(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>
                          <b>Description</b>
                        </label>
                        <textarea
                          className="form-control"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>
                        {" "}
                        <b>Status</b>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                      />
                    </div>
                    {/* </div> */}
                  </div>
                  <div className="m-t-20 text-center">
                    <Link
                      className="btn btn-dark submit-btn"
                      to={"/clinic"}
                      onClick={handleSubmit}
                    >
                      Update Clinic
                    </Link>
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

export default EditClinic;
