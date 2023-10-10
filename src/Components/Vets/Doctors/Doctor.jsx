import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Doctor = () => {
//hOOKS
  const[allvet,setAllvet] = useState([]);
//UseerEffect
useEffect(() => {
  getAllvet();
},[]);


//Getting All Doctor Details 
const getAllvet = async () => {
  try {
    axios.get("https://petzyvet20230117095949.azurewebsites.net/api/vet")
    .then((response) => {
      console.log(response);
      setAllvet(response.data);
    })
  } catch (error){
    console.log(error);
  }
};

//Deleting Particular Department Data
const onDelete = async(doctorId) => {
  axios.delete(`https://petzyvet20230117095949.azurewebsites.net/api/vet/${doctorId}`)
  .then(() => {
    getAllvet();
  })
}

  return (
    <div>
      <div className="main-wrapper">
        <div className="page-wrapper">
          <div className="content">
            <div className="row">
              <div className="col-sm-4 col-3">
                <h4 className="page-title"><b>Vets</b></h4>
              </div>
              <div className="col-sm-8 col-9 text-right m-b-20">
              
                <a href="addPets" className="btn btn-outline-dark">
                  <i className="fa fa-plus"></i> Add Pets
                </a>
              </div>
           
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table className="table table-striped custom-table">
                    <thead>
                      <tr>
                      <th>Doctor Id</th>
                        <th>Doctor Name</th>
                        <th>Speciality</th>
                        <th>Address</th>
                        <th className="text-right">Action</th>
                      </tr>
                    </thead>
                    {
//mAPPING DATA TO THE PARTICULAR DETAILS
allvet.map((p) => {
  return (
                    <tbody>

                      <tr>
                        <td>
                          
                          {p.doctorId}
                        </td>
                        <td>{p.fullName}</td>
                        <td>{p.speciality}</td>
                        <td>{p.address}</td>
                        
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
                              <Link   className="btn btn-success"
                                href="editpets">
                                <i className="fa fa-pencil m-r-5"></i> Edit
                              </Link>
                              <button
                              className="btn btn-danger"
                                
                                data-toggle="modal"
                                onClick={ () => onDelete(p.doctorId)}
                                // data-target="#delete_patient"
                              >
                                <i className="fa fa-trash-o m-r-5"></i> Delete
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                      
                     
                     
                    
                     
                    </tbody>
                   );
                  })}    
                  </table>
                </div>
              </div>
            </div>

           

                
           
          </div>
          <div className="notification-box">
            <div className="msg-sidebar notifications msg-noti">
              <div className="topnav-dropdown-header">
                <span>Messages</span>
              </div>
              <div className="drop-scroll msg-list-scroll" id="msg_list">
                <ul className="list-box">
                  <li>
                    <a href="chat">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">R</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Richard Miles </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix"></div>
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat">
                      <div className="list-item new-message">
                        <div className="list-left">
                          <span className="avatar">J</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">John Doe</span>
                          <span className="message-time">1 Aug</span>
                          <div className="clearfix"></div>
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">T</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author"> Tarah Shropshire </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix"></div>
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">M</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Mike Litorus</span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix"></div>
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">C</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">
                            {" "}
                            Catherine Manseau{" "}
                          </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix"></div>
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">D</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author"> Domenic Houston </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix"></div>
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">B</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author"> Buster Wigton </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix"></div>
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">R</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author"> Rolland Webber </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix"></div>
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">C</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author"> Claire Mapes </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix"></div>
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">M</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Melita Faucher</span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix"></div>
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">J</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Jeffery Lalor</span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix"></div>
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">L</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Loren Gatlin</span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix"></div>
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">T</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Tarah Shropshire</span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix"></div>
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
                <a href="chat">See all messages</a>
              </div>
            </div>
          </div>
        </div>
        <div id="delete_patient" className="modal fade delete-modal" role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body text-center">
                <img src="assets/img/sent.png" alt="" width="50" height="46" />
                <h3>Are you sure want to delete this Patient?</h3>
                <div className="m-t-20">
                  {" "}
                  <a href="#" className="btn btn-white" data-dismiss="modal">
                    Close
                  </a>
                  <button type="submit" className="btn btn-danger" >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
