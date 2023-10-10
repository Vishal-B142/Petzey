
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";


const EditDepartment = () => {

  const [allDepartment,setAllDepartment] =useState([]);
  const[departmentId, setdepartmentId]=useState('');
  
  
  useEffect(() => {
    setdepartmentId(localStorage.getItem('departmentId'))
  
  }, []);
  console.log(departmentId)

  useEffect(() => {
    getAllDepartmrnt();
  }, []);
 
  const getAllDepartmrnt = async () => {
    try{
      axios.get(`https://petzeydept20230116171016.azurewebsites.net/api/dept/${departmentId}`)
      .then((response )=>{
          console.log(response);
          setAllDepartment(response.data);
          setdepartmentId(response.data.departmentId)
      })
    }catch(error){
      console.log(error);
    }
  };

  return (
    <div>
      <div className="main-wrapper">
        <div className="page-wrapper">
          <div className="content">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <h4 className="page-title">Update Department</h4>
              </div>
            </div>
         
            <div className="row">
           
              <div className="col-lg-8 offset-lg-2">
            
                <form>
                  <div className="form-group">
                    <label>Department Name</label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      cols="30"
                      rows="4"
                      className="form-control"
                     
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label className="display-block">Department Status</label>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="status"
                        id="product_active"
                        
                        checked
                      />
                      <label className="form-check-label" for="product_active">
                        Active
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="status"
                        id="product_inactive"
                        value="option2"
                      />
                      <label className="form-check-label" for="product_inactive">
                        Inactive
                      </label>
                    </div>
                  </div>
                  <div className="m-t-20 text-center">
                    <button className="btn btn-primary submit-btn">
                      Update Department
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

export default EditDepartment
