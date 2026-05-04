import { useState } from "react";

function Experience() {
  const [isEditing, setIsEditing] = useState(true); //tell the component whether it's in Editing or Display mode
  const [jobs, setJobs] = useState([]); // submitted jobs
  const [currentJob, setCurrentJob] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
  });

  function handleChange(e) {
    setCurrentJob({ ...currentJob, [e.target.name]: e.target.value });
  }
  function handleSubmit() {
    setJobs([...jobs, currentJob]);
    setCurrentJob({ company: "", position: "", startDate: "", endDate: "" });
    setIsEditing(false);
  }
  return (
    <div>
      {isEditing ? (
        <div>
          <input
            name="company"
            type="text"
            placeholder="Company name Name"
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
          <button onClick={handleSubmit}>Submit</button>
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
          <button onClick={() => setIsEditing(true)}>Add Job</button>
        </div>
      )}
    </div>
  );
}
export default Experience;
