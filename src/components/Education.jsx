import { useState } from "react";

function Education({ data: formData, setData: setFormData }) {
  const [isEditing, setIsEditing] = useState(true); //tell the component whether it's in Editing or Display mode

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleSubmit() {
    setIsEditing(false);
  }

  return (
    <div className="section-card">
      {isEditing ? (
        <div>
          <input
            name="school"
            type="text"
            placeholder="School Name"
            value={formData.school}
            onChange={handleChange}
          />
          <input
            name="title"
            type="text"
            placeholder="Title Name"
            value={formData.title}
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
          <button className="btn-primary" onClick={handleSubmit}>
            Save Section
          </button>
        </div>
      ) : (
        <div>
          <h2>{formData.school}</h2>
          <p>{formData.title}</p>
          <p>
            {formData.startDate} – {formData.endDate}
          </p>
          <button className="btn-secondary" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
}
export default Education;
