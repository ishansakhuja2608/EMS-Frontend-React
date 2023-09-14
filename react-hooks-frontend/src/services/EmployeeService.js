/*
 We're using Axios library to make REST API Call

 Since out REST API is running on port 8080 and the front end is running on port 3000 we'll get some errors, in order to solve this
 we can use @CrossOrigin annotation with the REST API

*/

import axios from "axios";

const EMPLOYEE_BASE_REST_API_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {
  /**
   * Fetches all employees from the API.
   * @returns {Promise} // A promise that resolves the response data
   */
  getAllEmployees() {
    return axios.get(EMPLOYEE_BASE_REST_API_URL);
  }

  // This will make a rest api call and will send the employee data to the rest api, and it will be saved in the database
  createEmployee(employee) {
    return axios.post(EMPLOYEE_BASE_REST_API_URL, employee);
  }

  getEmployeeById(employeeId) {
    return axios.get(EMPLOYEE_BASE_REST_API_URL + "/" + employeeId);
  }

  updateEmployee(employeeId, employee) {
    return axios.put(EMPLOYEE_BASE_REST_API_URL + "/" + employeeId, employee);
  }

  deleteEmployee(employeeId) {
    return axios.delete(EMPLOYEE_BASE_REST_API_URL + "/" + employeeId);
  }
}
const employeeService = new EmployeeService();

// Exporting the object of EmployeeService() so that we can directly use the object in a component, no need to instantiate the class object
export default employeeService;
