import { useState } from "react";

function GeneralInfo() {
  const [isEditing, setIsEditing] = useState(true); //tell the component whether it's in Editing or Display mode
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleSubmit() {
    setIsEditing(false);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="tel"
        placeholder="Phone number"
        value={formData.phone}
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="Email address"
        value={formData.email}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default GeneralInfo;
