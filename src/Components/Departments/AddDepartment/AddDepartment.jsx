import React, { useState } from "react";
import axios from 'axios';


const AddDepartment = () => {
  
  const [departmentName, setDepartmentName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('1');
    const [data, setData] = useState(null);

    const handleSubmit = async() => {

      const data ={
       
        departmentName: departmentName,
        description: description,
        status: status
        
      }
      axios.post("https://petzeydept20230116171016.azurewebsites.net/api/dept",data).then(response => {
        setData(response.data);
        console.log(response.data);
        setDepartmentName('');
        setDescription('');
        setStatus('');

    })
  }

  return (
    <div>
      <div className="main-wrapper">
        <div className="page-wrapper">
          <div className="content">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <h4 className="page-title"><b>Add Department</b></h4>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <form>
                  <div className="form-group">
                    <label><b>Department Name</b></label>
                    <input className="form-control" type="text" value={departmentName} onChange={e => setDepartmentName(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label><b>Description</b></label>
                    <textarea 
                    value={description} onChange={e =>  setDescription(e.target.value)}
                      cols="30"
                      rows="4"
                      className="form-control"
                    ></textarea>
                  </div>
                
                  <div className="m-t-20 text-center">
                    <button className="btn btn-dark submit-btn" type="submit" onClick={handleSubmit}>
                      Create Department
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

export default AddDepartment;
