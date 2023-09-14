import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import employeeService from "../services/EmployeeService";

const AddEmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const history = useNavigate();
  const { id } = useParams();
  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();
    const employee = {
      firstName,
      lastName,
      emailId,
    };
    if (id) {
      employeeService
        .updateEmployee(id, employee)
        .then((response) => {
          history("/employees");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      employeeService
        .createEmployee(employee)
        .then((response) => {
          console.log(response.data);
          history("/employees");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    employeeService
      .getEmployeeById(id)
      .then((response) => {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmailId(response.data.emailId);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const title = () => {
    if (id) {
      return <h2 className="text-center">Update Employee</h2>;
    } else {
      return <h2 className="text-center">Add Employee</h2>;
    }
  };
  return (
    <div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {title()}
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Employee Address</label>
                  <input
                    type="email"
                    placeholder="Enter Email Address"
                    className="form-control"
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                  />
                </div>

                <button
                  className="btn btn-success"
                  onClick={(e) => saveOrUpdateEmployee(e)}
                >
                  Submit
                </button>
                <Link to="/employees" className="btn btn-danger">
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeComponent;
