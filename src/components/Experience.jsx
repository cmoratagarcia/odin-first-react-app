import { useState } from "react";

function Experience({ jobs, setJobs }) {
  const [isEditing, setIsEditing] = useState(true); //tell the component whether it's in Editing or Display mode
  const [currentJob, setCurrentJob] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
  });

  function handleChange(e) {
    setCurrentJob({ ...currentJob, [e.target.name]: e.target.value });
  }

  function handleAddJob() {
    setJobs([...jobs, currentJob]);
    setCurrentJob({ company: "", position: "", startDate: "", endDate: "" });
  }
  function handleSubmit() {
    setIsEditing(false);
  }
  return (
    <div>
      {isEditing ? (
        <div>
          {/* Show already-added jobs above the form */}
          {jobs.map((job, index) => (
            <div key={index}>
              <h2>{job.company}</h2>
              <p>{job.position}</p>
              <p>
                {job.startDate} – {job.endDate}
              </p>
            </div>
          ))}
          {/* Form to keep adding jobs */}
          <input
            name="company"
            type="text"
            placeholder="Company Name"
            value={currentJob.company}
            onChange={handleChange}
          />
          <input
            name="position"
            type="text"
            placeholder="Position"
            value={currentJob.position}
            onChange={handleChange}
          />
          <label>Start Date</label>
          <input
            type="month"
            name="startDate"
            value={currentJob.startDate}
            onChange={handleChange}
          />

          <label>End Date</label>
          <input
            type="month"
            name="endDate"
            value={currentJob.endDate}
            onChange={handleChange}
          />
          {/* Adds current job to the list, clears form */}
          <button onClick={handleAddJob}>Add Job</button>

          <button onClick={handleSubmit}>Save Section</button>
        </div>
      ) : (
        <div>
          {jobs.map((job, index) => (
            <div key={index}>
              <h2>{job.company}</h2>
              <p>{job.position}</p>
              <p>
                {job.startDate} – {job.endDate}
              </p>
            </div>
          ))}
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}
export default Experience;
