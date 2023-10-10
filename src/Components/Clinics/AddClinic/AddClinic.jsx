import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const AddClinic = () => {
  const navigate = useNavigate();
  const [clinicName, setclinicName] = useState("");
  const [cliniInfo, setclinicInfo] = useState("");
  const [addres, setAddres] = useState("");
  const [contactNumber, setcontactNumber] = useState("");
  const [contactPerson, setcontactPerson] = useState("");
  const [workingDays, setworkingDays] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Active");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");





  //this function is used to Add required clinic deatils to database using axios
  const handleSubmit = async () => {

    const data = {
      clinicName: clinicName,
      clinicInfo: cliniInfo,
      address: addres,
      contactNum: contactNumber,
      contactPerson: contactPerson,
      workingDays: workingDays,
      time: time,
      description: description,
      status: status,
    };

    axios
      .post("https://optclinic.learn.skillassure.com/clinic/clinic/add", data)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
        setclinicName("");
        setclinicInfo("");
        setAddres("");
        setcontactNumber("");
        setcontactPerson("");
        setworkingDays("");
        setTime("");
        setDescription("");
        setStatus("");
      });
  };


//Valadation code for Add clinic form
  function ValidationForm() {
    let clinicName = document.forms["RegForm"]["name"];
    let clinicInfo = document.forms["RegForm"]["info"];
    let address = document.forms["RegForm"]["address"];
    let contactNumber = document.forms["RegForm"]["number"];
    let contactPerson = document.forms["RegForm"]["contactperson"];
    let workingDays = document.forms["RegForm"]["workingdays"];
    let time = document.forms["RegForm"]["time"];
    let description = document.forms["RegForm"]["description"];
    if (clinicName.value == "") {
      alert("Please enter your name.");
      clinicName.focus();
      return false;
    }
    if (clinicInfo.value == "") {
      alert("Please enter a valid e-mail address.");
      clinicInfo.focus();
      return false;
    }
    if ((address.value = "")) {
      alert("Please enter a valid e-mail address.");
      address.focus();
      return false;
    }
    if (contactNumber.value == "") {
      alert("Please enter a valid e-mail address.");
      contactNumber.focus();
      return false;
    }
    if (contactPerson.value == "") {
      alert("Please enter your telephone number.");
      contactPerson.focus();
      return false;
    }
    if (workingDays.value == "") {
      alert("Please enter your password");
      workingDays.focus();
      return false;
    }
    if (time.value == "") {
      alert("Please enter your password");
      time.focus();
      return false;
    }
    if (description.value == "") {
      alert("Please enter your course.");
      description.focus();
      return false;
    }

  }

  return (
    <div>
      <div classNameName="main-wrapper">
        <div className="page-wrapper">
          <div className="content">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <h4 className="page-title">
                  <b>Add Clinic</b>
                </h4>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <form id="RegForm">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          <b>Clinic Name</b>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="name"
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
                          id="info"
                          value={cliniInfo}
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
                          id="address"
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
                          id="contactnumber"
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
                          id="contactperson"
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
                          id="workingdays"
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
                          id="time"
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
                          id="description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="m-t-20 text-center">
                    <Link to={"/clinic"} className="btn btn-dark submit-btn">
                      <button
                        className="btn btn-dark submit-btn"
                        //calling Handle Submit function
                        onClick={handleSubmit}
                      >
                        Add Clinic
                      </button>
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

export default AddClinic;
