import { useState } from "react";

function GeneralInfo({ data: formData, setData: setFormData }) {
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
            name="name"
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            name="phone"
            type="tel"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
          />
          <button className="btn-primary" onClick={handleSubmit}>
            Save Section
          </button>
        </div>
      ) : (
        <div>
          <h2>{formData.name}</h2>
          <p>{formData.phone}</p>
          <p>{formData.email}</p>
          <button className="btn-secondary" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
}

export default GeneralInfo;
