import { useState } from "react";

function Education() {
  const [isEditing, setIsEditing] = useState(true); //tell the component whether it's in Editing or Display mode
  const [formData, setFormData] = useState({
    school: "",
    title: "",
    dates: "",
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
          <input
            name="dates"
            type="date"
            placeholder="Date"
            value={formData.dates}
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <div>
          <h2>{formData.school}</h2>
          <p>{formData.title}</p>
          <p>{formData.dates}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}
export default Education;
