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

  function handleEdit(index) {
    setCurrentJob(jobs[index]); // load into form
    setJobs(jobs.filter((_, i) => i !== index)); // remove from list
    setIsEditing(true);
  }
  function handleDelete(index) {
    setJobs(jobs.filter((_, i) => i !== index));
  }
  function handleSubmit() {
    setIsEditing(false);
  }

  function renderJobs(showActions) {
    return jobs.map((job, index) => (
      <div className="job-entry" key={index}>
        <h2>{job.company}</h2>
        <p>{job.position}</p>
        <p>
          {job.startDate} – {job.endDate}
        </p>
        {showActions && (
          <>
            <button className="btn-secondary" onClick={() => handleEdit(index)}>
              Edit
            </button>
            <button className="btn-danger" onClick={() => handleDelete(index)}>
              Delete
            </button>
          </>
        )}
      </div>
    ));
  }
  return (
    <div className="section-card">
      {isEditing ? (
        <div>
          {/* Show already-added jobs above the form */}
          {renderJobs(true)}
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

          <button className="btn-primary" onClick={handleSubmit}>
            Save Section
          </button>
        </div>
      ) : (
        <div>
          {renderJobs(false)}
          <button className="btn-secondary" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
}
export default Experience;
