import { useState } from "react";
import GeneralInfo from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import CVPreview from "./components/CVPreview";
import "./styles/App.css";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [education, setEducation] = useState({
    school: "",
    title: "",
    startDate: "",
    endDate: "",
  });
  const [jobs, setJobs] = useState([]);
  const [showPreview, setShowPreview] = useState(false);
  return (
    <div className="app-container">
      {!showPreview ? (
        <div>
          <GeneralInfo data={generalInfo} setData={setGeneralInfo} />
          <Education data={education} setData={setEducation} />
          <Experience jobs={jobs} setJobs={setJobs} />
          <button className="btn-primary" onClick={() => setShowPreview(true)}>
            Generate CV
          </button>
        </div>
      ) : (
        <div>
          <CVPreview
            generalInfo={generalInfo}
            education={education}
            jobs={jobs}
          />
          <button className="btn-primary" onClick={() => setShowPreview(false)}>
            Return to Form
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
