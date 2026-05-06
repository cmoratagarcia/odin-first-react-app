function CVPreview({ generalInfo, education, jobs }) {
  return (
    <div className="cv-preview">
      <div className="cv-header">
        <h1>{generalInfo.name}</h1>
        <p>
          {generalInfo.phone} · {generalInfo.email}
        </p>
      </div>

      <div className="cv-section">
        <h2>Education</h2>
        <p>{education.school}</p>
        <p>{education.title}</p>
        <p>
          {education.startDate} – {education.endDate}
        </p>
      </div>

      <div className="cv-section">
        <h2>Experience</h2>
        {jobs.map((job, index) => (
          <div key={index} className="cv-job">
            <h3>{job.company}</h3>
            <p>{job.position}</p>
            <p>
              {job.startDate} – {job.endDate}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CVPreview;
