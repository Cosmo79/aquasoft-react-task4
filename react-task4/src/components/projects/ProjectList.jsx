import { useSelector } from "react-redux";

export function ProjectList() {
  const { entities } = useSelector((state) => state.projects);
  return (
    <div className="container">
      <div className="row">
        <h1>Projects List</h1>
      </div>
      <div className="container mt-5">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Project Name</th>
              <th>Start Date</th>
              <th>Planned End Date</th>
              <th>Description</th>
              <th>Project Code</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {entities.map(({ id, project_name, start_date, planned_end_date, description, project_code }, i) => (
              <tr key={i}>
                <td>{id}</td>
                <td>{project_name}</td>
                <td>{start_date}</td>
                <td>{planned_end_date}</td>
                <td>{description}</td>
                <td>{project_code}</td>
                <td>
                  <button type="button" class="btn btn-success">View Employees</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}