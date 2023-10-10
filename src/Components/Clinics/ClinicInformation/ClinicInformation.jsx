import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../../../Shared/Loader";
import { Await, Link, Navigate, useNavigate } from "react-router-dom";

const ClinicInformation = () => {
  const [allClinic, setAllClinic] = useState([]);
  const [clinicId, setclinicId] = useState([]);
  
  //use effect
  useEffect(() => {
    const interval = setInterval(() => {
      getAllClinic();
    }, 500);
    return () => clearInterval(interval);
  }, []);

  //Get All Clinic Details
  const getAllClinic = async () => {
    try {
      await axios
        .get("https://optclinic.learn.skillassure.com/clinic/clinic")
        .then((response) => {
          console.log(response);
          setAllClinic(response.data);
          setclinicId(response.data.clinicId);
          console.log(response.data.length);
        });
    } catch (error) {
      console.log(error);
    }
  };

  //Storing the data to local Storage
  const setData = (p) => {
    let {
      clinicId,
      clinicName,
      address,
      clinicInfo,
      contactNum,
      contactPerson,
      workingDays,
      description,
      time,
      status,
    } = p;
    localStorage.setItem("clinicId", clinicId);
    localStorage.setItem("clinicName", clinicName);
    localStorage.setItem("address", address);
    localStorage.setItem("clinicInfo", clinicInfo);
    localStorage.setItem("contactNum", contactNum);
    localStorage.setItem("contactPerson", contactPerson);
    localStorage.setItem("workingDays", workingDays);
    localStorage.setItem("description", description);
    localStorage.setItem("time", time);
    localStorage.setItem("status", status);
  };

  //Delete the particula  Data
  const onDelete = (clinicId) => {
    axios
      .delete(`https://optclinic.learn.skillassure.com/clinic/delete/${clinicId}`)
      .then(() => {
        getAllClinic();
      });
  };

  return (
    <div>
      <div className="main-wrapper">
        <div className="page-wrapper">
          <div className="content">
            <div className="row">
              <div className="col-sm-8 col-6">
                <h4 className="page-title" id="s1">
                  <b>Clinic Information</b>
                </h4>
              </div>
              <div className="col-sm-4 col-6 text-right m-b-30">
                <a href="addclinic" className="btn btn-outline-dark">
                  <i className="fa fa-plus"></i> Add Clinic
                </a>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table className="table table-striped custom-table mb-0 datatable">
                    <thead>
                      <tr>
                        <th>Clinic ID</th>
                        <th>Clinic Info</th>
                        <th>Clinic Name</th>
                        <th>Clinic Location</th>
                        <th>Contact Number</th>
                        <th>Timings</th>

                        <th className="text-center">Status</th>
                        <th className="text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* // Mapping the Values to the particular Fields\\ */}
                      {allClinic.map((p) => {
                        return (
                          <tr>
                            <td>{p.clinicId}</td>
                            <td>{p.clinicInfo}</td>
                            <td>{p.clinicName}</td>
                            <td>{p.address}</td>
                            <td>{p.contactNum}</td>
                            <td>{p.time}</td>

                            <td className="text-center">
                              <div className="dropdown action-label">
                                <a
                                  className="custom-badge "
                                  href="#"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <b> {p.status}</b>
                                </a>
                              </div>
                            </td>

                            <td className="text-right">
                              <div className="dropdown dropdown-action">
                                <a
                                  href="#"
                                  className="action-icon dropdown-toggle"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fa fa-ellipsis-v"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <Link to="/editclinic">
                                    <button
                                      className="btn btn-success"
                                      //Using Hook assigning Data to store data to local
                                      onClick={() => setData(p)}
                                    >
                                      {" "}
                                      <i className="fa fa-pencil m-r-5"></i>{" "}
                                      Edit
                                    </button>
                                  </Link>
                                  {/* onClick={(e) => {{e.preventDefault();setDataToLocalStorage(p);console.log("hellos");}}} */}
                                  <button
                                    className="btn btn-danger"
                                    //Calling delete Function
                                    onClick={() => onDelete(p.clinicId)}
                                    data-toggle="modal"
                                    //  data-target="#delete_asset"
                                  >
                                    Delete
                                  </button>
                                </div>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicInformation;
