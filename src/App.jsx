import { useState } from "react";
import GeneralInfo from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";

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
  return (
    <div>
      <GeneralInfo data={generalInfo} setData={setGeneralInfo} />
      <Education data={education} setData={setEducation} />
      <Experience jobs={jobs} setJobs={setJobs} />
    </div>
  );
}

export default App;
