import React, { useEffect, useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

const Department = () => {
  const [allDepartment, setAllDepartment] = useState([]);

  useEffect(() => {
    getAllDepartmrnt();
  }, []);

  //Getting all department details
  const getAllDepartmrnt = async () => {
    try {
      axios
        .get("https://petzeydept20230116171016.azurewebsites.net/api/dept")
        .then((response) => {
          console.log(response.data);
          setAllDepartment(response.data);
          for (let element of response.data) {
            if (element.status == "1") {
              element.FEStatus = "ACTIVE";
            } else if (element.status == "2") {
              element.FEStatus = "INACTIVE";
            } else {
              element.FEStatus = "Status Not Found";
            }
          }
          console.log(response);
        });
    } catch (error) {
      console.log(error);
    }
  };

  //Deleting Clinic Data for Particular Data
  const deleteUser = async (departmentId) => {
    await axios.delete(
      `https://petzeydept20230116171016.azurewebsites.net/api/dept/${departmentId}`
    );
    getAllDepartmrnt();
  };

  const setData = (x) => {
    let { departmentId } = x;
    localStorage.setItem("departmentId", departmentId);
  };

  return (
    <div>
      <div className="main-wrapper">
        <div className="page-wrapper">
          <div className="content">
            <div className="row">
              <div className="col-sm-5 col-5">
                <h4 className="page-title">Departments</h4>
              </div>
              <div className="col-sm-7 col-7 text-right m-b-30">
                <a href="addDepartment" className="btn btn-outline-dark">
                  <i className="fa fa-plus"></i> Add Department
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table className="table table-striped custom-table mb-0 datatable">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Department Name</th>
                        <th>Status</th>
                        <th className="text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allDepartment.map((x) => {
                        return (
                          <tr>
                            <td>{x.departmentId}</td>
                            <td>{x.departmentName}</td>
                            {/* <td>{x.status}</td> */}

                            <td>
                              <span className="custom-badge">{x.FEStatus}</span>
                              {/* <span className="custom-badge" id="statusnew">{x.status}</span>
                          <span className="custom-badge" id="statusnotfound">{x.status}</span> */}
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
                                  <Link to="/editdepartment">
                                    <button
                                      className="btn btn-success"
                                      onClick={() => setData(x)}
                                    >
                                      {" "}
                                      <i className="fa fa-pencil m-r-5"></i>{" "}
                                      Edit
                                    </button>
                                  </Link>

                                  <Link
                                    className="btn btn-danger"
                                    onClick={() => deleteUser(x.departmentId)}
                                    type="submit"
                                    data-toggle="modal"
                                  >
                                    <i className="fa fa-trash-o m-r-5"></i>{" "}
                                    Delete
                                  </Link>
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

export default Department;
