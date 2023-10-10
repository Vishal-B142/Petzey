import React ,{useState,useEffect}from "react";
import axios from 'axios';
import { Link, Navigate, useNavigate } from "react-router-dom" 

const AdminDashBoard = () => {

  const [allClinic,setAllClinic] = useState([]);
  const [clinicId,setclinicId] = useState([]);
  const[count,setCount]=useState([]);
  
  //use effect
  useEffect(() => {
    getAllClinic();
  }, []);
  const getAllClinic = async () => {
    try{
      axios.get("https://petzyappointmentapi20230116185726.azurewebsites.net/api/appointment")
      .then((response )=>{
          console.log(response);
          setAllClinic(response.data);
          setclinicId(response.data.clinicId)
        setCount(response.data.length)
      })
    }catch(error){
      console.log(error);
    }
  };


  const[allPet,setAllPet] = useState([]);
  const[petcount,setpetcount]=useState([])

  useEffect(() => {
    getAllPet();
  },[]);
  
  const getAllPet = async () => {
    try {
      axios.get("https://petzeypett01.azurewebsites.net/api/patient")
      .then((response) => {
       // console.log(response);
        setAllPet(response.data);
        setpetcount(response.data.length)
      })
    } catch (error){
      console.log(error);
    }
  };




  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
              <div className="dash-widget">
                <span className="dash-widget-bg3">
                  <i className="fa fa-user-md" aria-hidden="true"></i>
                </span>
                <div className="dash-widget-info text-right">
                  <h3>{count}</h3>
                  <span className="widget-title3">
                    Total <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                  <span>Appointments</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
              <div className="dash-widget">
                <span className="dash-widget-Cancelled">
                  <i className="fa fa-user-o" aria-hidden="true"></i>
                </span>
                <div className="dash-widget-info text-right">
                  <h3>20</h3>
                  <span className="Cancelled">
                    Cancelled <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                  <span>Appointments</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
              <div className="dash-widget">
                <span className="dash-widget-Approved">
                  <i className="fa fa-user-o" aria-hidden="true"></i>
                </span>
                <div className="dash-widget-info text-right">
                  <h3>50</h3>
                  <span className="Approved">
                    Approved <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                  <span>Appointments</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
              <div className="dash-widget">
                <span className="dash-widget-Pending">
                  <i className="fa fa-user-o" aria-hidden="true"></i>
                </span>
                <div className="dash-widget-info text-right">
                  <h3>2</h3>
                  <span className="Pending">
                    Pending <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                  <span>Appointments</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
              <div className="dash-widget">
                <span className="dash-widget-bg1">
                  <i className="fa fa-stethoscope" aria-hidden="true"></i>
                </span>
                <div className="dash-widget-info text-right">
                  <h3>98</h3>
                  <span className="widget-title1">
                    Vets <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
              <div className="dash-widget">
                <span className="dash-widget-bg2">
                  <i className="fa fa-user-o"></i>
                </span>
                <div className="dash-widget-info text-right">
                  <h3>{petcount}</h3>
                  <span className="widget-title2">
                    Pets <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-6 col-lg-8 col-xl-8">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title d-inline-block">
                    Upcoming Appointments
                  </h4>
                  <a href="allAppointments" className="btn btn-primary float-right">
                    View all
                  </a>
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table mb-0">
                      <tr>
                        <th>Patient Name</th>
                        <th>Doctor Name</th>
                        <th>Timing</th>
                        <th className="text-right">Status</th>
                      </tr>

                      <tbody>
                        <tr>
                          <td>
                            <a className="avatar">B</a>
                            <h2>
                              <a>
                                Bernardo Galaviz <span>New York, USA</span>
                              </a>
                            </h2>
                          </td>
                          <td>
                            <h5 className="time-title p-0">Appointment With</h5>
                            <p>Dr. Cristina Groves</p>
                          </td>
                          <td>
                            <h5 className="time-title p-0">Timing</h5>
                            <p>7.00 PM</p>
                          </td>
                          <td className="text-right">
                            <a
                              href="allAppointments"
                              className="btn btn-outline-primary take-btn"
                            >
                              Take up
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a className="avatar">B</a>
                            <h2>
                              <a>
                                Bernardo Galaviz <span>New York, USA</span>
                              </a>
                            </h2>
                          </td>
                          <td>
                            <h5 className="time-title p-0">Appointment With</h5>
                            <p>Dr. Cristina Groves</p>
                          </td>
                          <td>
                            <h5 className="time-title p-0">Timing</h5>
                            <p>7.00 PM</p>
                          </td>
                          <td className="text-right">
                            <a
                              href="allAppointments"
                              className="btn btn-outline-primary take-btn"
                            >
                              Take up
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a className="avatar">B</a>
                            <h2>
                              <a>
                                Bernardo Galaviz <span>New York, USA</span>
                              </a>
                            </h2>
                          </td>
                          <td>
                            <h5 className="time-title p-0">Appointment With</h5>
                            <p>Dr. Cristina Groves</p>
                          </td>
                          <td>
                            <h5 className="time-title p-0">Timing</h5>
                            <p>7.00 PM</p>
                          </td>
                          <td className="text-right">
                            <a
                              href="allAppointments"
                              className="btn btn-outline-primary take-btn"
                            >
                              Take up
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a className="avatar">B</a>
                            <h2>
                              <a>
                                Bernardo Galaviz <span>New York, USA</span>
                              </a>
                            </h2>
                          </td>
                          <td>
                            <h5 className="time-title p-0">Appointment With</h5>
                            <p>Dr. Cristina Groves</p>
                          </td>
                          <td>
                            <h5 className="time-title p-0">Timing</h5>
                            <p>7.00 PM</p>
                          </td>
                          <td className="text-right">
                            <a
                              href="allAppointments"
                              className="btn btn-outline-primary take-btn"
                            >
                              Take up
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a className="avatar">B</a>
                            <h2>
                              <a>
                                Bernardo Galaviz <span>New York, USA</span>
                              </a>
                            </h2>
                          </td>
                          <td>
                            <h5 className="time-title p-0">Appointment With</h5>
                            <p>Dr. Cristina Groves</p>
                          </td>
                          <td>
                            <h5 className="time-title p-0">Timing</h5>
                            <p>7.00 PM</p>
                          </td>
                          <td className="text-right">
                            <a
                              href="allAppointments"
                              className="btn btn-outline-primary take-btn"
                            >
                              Take up
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-4">
              <div className="card member-panel">
                <div className="card-header bg-white">
                  <h4 className="card-title mb-0">Doctors</h4>
                </div>
                <div className="card-body">
                  <ul className="contact-list">
                    <li>
                      <div className="contact-cont">
                        <div className="float-left user-img m-r-10">
                          <a title="John Doe">
                            <img
                              src="assets/img/user.jpg"
                              alt=""
                              className="w-40 rounded-circle"
                            />
                            <span className="status online"></span>
                          </a>
                        </div>
                        <div className="contact-info">
                          <span className="contact-name text-ellipsis">
                            John Doe
                          </span>
                          <span className="contact-date">MBBS, MD</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="contact-cont">
                        <div className="float-left user-img m-r-10">
                          <a title="Richard Miles">
                            <img
                              src="assets/img/user.jpg"
                              alt=""
                              className="w-40 rounded-circle"
                            />
                            <span className="status offline"></span>
                          </a>
                        </div>
                        <div className="contact-info">
                          <span className="contact-name text-ellipsis">
                            Richard Miles
                          </span>
                          <span className="contact-date">MD</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="contact-cont">
                        <div className="float-left user-img m-r-10">
                          <a title="John Doe">
                            <img
                              src="assets/img/user.jpg"
                              alt=""
                              className="w-40 rounded-circle"
                            />
                            <span className="status away"></span>
                          </a>
                        </div>
                        <div className="contact-info">
                          <span className="contact-name text-ellipsis">
                            John Doe
                          </span>
                          <span className="contact-date">BMBS</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="contact-cont">
                        <div className="float-left user-img m-r-10">
                          <a title="Richard Miles">
                            <img
                              src="assets/img/user.jpg"
                              alt=""
                              className="w-40 rounded-circle"
                            />
                            <span className="status online"></span>
                          </a>
                        </div>
                        <div className="contact-info">
                          <span className="contact-name text-ellipsis">
                            Richard Miles
                          </span>
                          <span className="contact-date">MS, MD</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="contact-cont">
                        <div className="float-left user-img m-r-10">
                          <a title="John Doe">
                            <img
                              src="assets/img/user.jpg"
                              alt=""
                              className="w-40 rounded-circle"
                            />
                            <span className="status offline"></span>
                          </a>
                        </div>
                        <div className="contact-info">
                          <span className="contact-name text-ellipsis">
                            John Doe
                          </span>
                          <span className="contact-date">MBBS</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="contact-cont">
                        <div className="float-left user-img m-r-10">
                          <a title="Richard Miles">
                            <img
                              src="assets/img/user.jpg"
                              alt=""
                              className="w-40 rounded-circle"
                            />
                            <span className="status away"></span>
                          </a>
                        </div>
                        <div className="contact-info">
                          <span className="contact-name text-ellipsis">
                            Richard Miles
                          </span>
                          <span className="contact-date">MBBS, MD</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="card-footer text-center bg-white">
                  <a className="text-muted">View all Doctors</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;
