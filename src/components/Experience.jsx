import { useState } from "react";

function Experience() {
  const [isEditing, setIsEditing] = useState(true); //tell the component whether it's in Editing or Display mode
  const [formData, setFormData] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleSubmit() {
    setIsEditing(false);
  }

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            name="compnay"
            type="text"
            placeholder="Company name Name"
            value={formData.company}
            onChange={handleChange}
          />
          <input
            name="position"
            type="text"
            placeholder="Position"
            value={formData.position}
            onChange={handleChange}
          />
          <label>Start Date</label>
          <input
            type="month"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />

          <label>End Date</label>
          <input
            type="month"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <div>
          <h2>{formData.company}</h2>
          <p>{formData.position}</p>
          <p>
            {formData.startDate} – {formData.endDate}
          </p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}
export default Experience;
