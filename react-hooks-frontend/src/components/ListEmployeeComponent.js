import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import employeeService from "../services/EmployeeService";

// Using Hooks to set the Employees Data
const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);

  const getAllEmployees = () => {
    employeeService
      .getAllEmployees()
      .then((response) => {
        const sortedEmployees = response.data.sort((a, b) => a.id - b.id);
        setEmployees(sortedEmployees);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // useEffect to get the data using axios library
  useEffect(() => {
    getAllEmployees();
  }, []);

  const deleteEmployee = (employeeId) => {
    employeeService
      .deleteEmployee(employeeId)
      .then((response) => {
        getAllEmployees();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h2 className="text-center">List Employees</h2>
      <Link to="/add-employee" className="btn btn-primary mb-2">
        Add Employee
      </Link>
      <main className="main">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Employee's First Name</th>
              <th>Employee's Last Name</th>
              <th>Employee's Email Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.emailId}</td>
                <td>
                  <Link
                    className="btn btn-info"
                    to={`/edit-employees/${employee.id}`}
                  >
                    Update
                  </Link>
                  <button
                    style={{ marginLeft: "10px" }}
                    className="btn btn-danger"
                    onClick={() => deleteEmployee(employee.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default ListEmployeeComponent;
