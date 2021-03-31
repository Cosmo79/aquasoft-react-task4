import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";

export function EmployeeList() {
  const { entities } = useSelector((state) => state.employees);
  const { pathname } = useLocation()
  const projectId = parseInt(pathname.replace("/view-employees/", ""));

  return (
    <div className="container">
      <div className="row">
        <h1>Employees List</h1>
      </div>
      <div className="container mt-5">
        <Link to={`/home`}>
          <button type="button" class="btn btn-primary mb-2">Back to Projects</button>
        </Link>
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Hire Date</th>
              <th>Salary</th>
              <th>Job Title</th>
              <th>Project ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {entities
            .filter((employee) => { return employee.project_id === projectId })
            .map(({ id, name, email, hire_date, salary, job_title, project_id }, i) => (
              <tr key={i}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{hire_date}</td>
                <td>{salary}</td>
                <td>{job_title}</td>
                <td>{project_id}</td>
                <td>
                  <button type="button" class="btn btn-primary">Edit</button>
                  <button type="button" class="btn btn-danger ml-1">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}